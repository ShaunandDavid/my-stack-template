import { NextResponse } from 'next/server';

// Basic security headers (tweak CSP as needed for external resources)
const securityHeaders: Record<string, string> = {
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "object-src 'none'",
    "frame-ancestors 'none'",
    'base-uri self',
    'form-action self',
  ].join('; '),
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Content-Type-Options': 'nosniff',
};

export function middleware() {
  const res = NextResponse.next();
  Object.entries(securityHeaders).forEach(([k, v]) => res.headers.set(k, v));
  return res;
}

// Apply to all routes (customize if needed)
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
