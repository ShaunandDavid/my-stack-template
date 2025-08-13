# Project Handoff Guide

Snapshot Commit: `c3e08ecee66207679ba00bc45ee58d83000698ac`

## 1. Overview

A production-ready Next.js 15 + Tailwind + shadcn/ui + Prisma + Storybook + Playwright template. Includes CI (GitHub Actions), linting, formatting, security middleware, API client abstraction, and database scaffolding (SQLite dev, Postgres prod pattern).

## 2. Tech Stack

- Next.js 15 (App Router, React 19)
- TypeScript (strict)
- Tailwind CSS + shadcn/ui (Radix primitives)
- pnpm package manager
- Prisma ORM (SQLite dev / Postgres prod)
- Zod (runtime validation)
- Pino (structured logging)
- Storybook (component dev) + Chromatic (optional)
- Playwright (E2E) + Vitest (unit/utility)
- ESLint (flat config) + Prettier + EditorConfig
- GitHub Actions CI (install / lint / typecheck / build / test)

## 3. Directory Structure (key paths)

```
.github/          CI workflows
.husky/           Git hooks (pre-commit)
.storybook/       Storybook configuration
docs/             Additional documentation
prisma/           Prisma schema
src/app/          Next.js App Router
src/components/   UI components
src/lib/          Utilities & api-client
public/           Static assets
```

## 4. Prerequisites

- Node.js 20+
- Corepack enabled (or pnpm installed globally)
- Git

Enable pnpm via Corepack (preferred):

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## 5. Initial Setup (Fresh Clone)

```bash
git clone <REPO_URL> my-app
cd my-app
pnpm install
cp .env.example .env  # adjust values as needed
pnpm dev
```

Visit: http://localhost:3000

## 6. Environment Variables

File: `.env.example`

```
NEXT_PUBLIC_SITE_NAME=My App
NEXT_PUBLIC_API_URL=http://localhost:3001
DATABASE_URL="file:./dev.db"
LOG_LEVEL=debug
```

Production: set `DATABASE_URL` to Postgres connection string.

## 7. Scripts

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm start        # Serve production build
pnpm lint         # ESLint
pnpm typecheck    # TypeScript only
pnpm test         # Vitest (unit)
pnpm e2e          # Playwright
pnpm storybook    # Storybook UI
pnpm db:dev       # Init & open SQLite dev DB in Prisma Studio
pnpm db:migrate   # Run Prisma migrations (dev)
```

## 8. Database

- Local development uses SQLite (file: ./dev.db) via `DATABASE_URL`.
- For Postgres, update `.env` and run `pnpm db:migrate`.
- Schema file: `prisma/schema.prisma`.

## 9. API Client

Located at `src/lib/api-client.ts`. Provides:

- Wrapper over `fetch`
- Automatic JSON parsing
- Optional Zod validation per request
- Retry logic (basic backoff)

## 10. Security Middleware

`src/middleware.ts` sets security headers (CSP, X-Frame-Options, Referrer-Policy, X-Content-Type-Options). Adjust CSP for external domains when integrating analytics, fonts, etc.

## 11. CI Pipeline

Workflow: `.github/workflows/ci.yml`
Steps: checkout → setup Node → install pnpm (corepack fallback) → install deps → lint → typecheck → build → tests.

## 12. Selling / Transfer Steps

If transferring ownership:

1. Remove any unused secrets from GitHub repo settings (Actions > Secrets).
2. Tag snapshot (optional): `git tag -a v1.0.0 -m "Initial release" && git push --tags`.
3. Provide this HANDOFF.md and `.env.example` to buyer.
4. (Optional) `git archive --format=zip --output=stack-template-v1.0.0.zip main` for a clean zip without history.

## 13. Optional Cleanup Before Packaging

```bash
rm -rf node_modules .next dist tsconfig.tsbuildinfo
```

Buyer reinstalls with `pnpm install`.

## 14. Adding New Features

- Components: `npx shadcn@latest add <component>`
- DB Change: modify `prisma/schema.prisma`, then `pnpm db:migrate`
- API Layer: add helper functions inside `src/lib/`

## 15. Support & Maintenance Notes

This template is a starting point; ongoing updates (dependencies, security) should be run periodically:

```bash
pnpm update --latest
```

Consider enabling Dependabot (already configured) to auto-open upgrade PRs.

## 16. License / Ownership

(Adapt this section depending on sale type.)

- Exclusive Transfer: Provide written assignment specifying commit hash above.
- Non-Exclusive License: Include an MIT LICENSE file or custom license statement.

## 17. Quick Health Check Commands

```bash
pnpm lint && pnpm typecheck
pnpm build
pnpm test --if-present
```

Expect all to pass on a healthy install.

## 18. Contact / Notes

Add your contact or remove this section before delivering if not providing support.

---

Delivered as-is. Happy building!
