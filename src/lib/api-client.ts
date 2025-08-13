import { z } from 'zod';

// Example response schema using Zod
const exampleSchema = z.object({
  status: z.string(),
  // Use unknown to avoid any; callers can narrow.
  data: z.unknown().optional(),
});

export type ExampleResponse = z.infer<typeof exampleSchema>;

export interface FetchOptions<TParsed = unknown> extends RequestInit {
  /** Number of retry attempts (default 3) */
  retries?: number;
  /** Base delay in ms for linear backoff (default 300) */
  retryDelayMs?: number;
  /** Optional Zod schema to validate/parse the response */
  validateWith?: z.ZodSchema<TParsed>;
}

async function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

async function doFetch<T = unknown>(url: string, options: FetchOptions<T> = {}): Promise<T> {
  const { retries = 3, retryDelayMs = 300, validateWith, ...init } = options as FetchOptions<T>;
  let attempt = 0;
  let lastError: unknown;
  while (attempt <= retries) {
    try {
      const response = await fetch(url, init);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      // Attempt to parse JSON—fallback to text if no content
      const contentType = response.headers.get('content-type') || '';
      const body: unknown = contentType.includes('application/json')
        ? await response.json()
        : await response.text();
      const parsed = validateWith ? validateWith.parse(body) : body;
      return parsed as T;
    } catch (err) {
      lastError = err;
      attempt++;
      if (attempt > retries) break;
      await sleep(retryDelayMs * attempt); // simple backoff
    }
  }
  throw lastError instanceof Error ? lastError : new Error('Unknown fetch error');
}

export const apiClient = {
  get: <T = unknown>(url: string, opts?: FetchOptions<T>) =>
    doFetch<T>(url, { ...(opts || {}), method: 'GET' }),
  post: <T = unknown, TBody = unknown>(url: string, body?: TBody, opts?: FetchOptions<T>) =>
    doFetch<T>(url, {
      ...(opts || {}),
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...(opts?.headers || {}) },
      body: JSON.stringify(body ?? {}),
    }),
  example: (url: string) => doFetch<ExampleResponse>(url, { validateWith: exampleSchema }),
};
