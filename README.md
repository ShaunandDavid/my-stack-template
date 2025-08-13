# Clean Stack Template

A modern, production-ready full-stack template for building SaaS applications and web apps.

## 🚀 Stack

**Frontend:**

- ⚡ Next.js 15 (App Router)
- 🎨 Tailwind CSS + shadcn/ui
- 📱 Responsive design
- 🎭 Storybook for component development
- 🧪 Playwright E2E testing

**Backend (Optional):**

- 🚀 Node.js (Express/Fastify)
- 🗃️ PostgreSQL database
- 🚂 Railway deployment

**DevOps & Quality:**

- 🔧 TypeScript
- 📏 ESLint + Prettier
- 🐕 Husky pre-commit hooks
- 📦 pnpm package manager
- 🤖 GitHub Actions CI/CD
- 👀 Chromatic visual testing
- 📦 Automated dependency updates

## 🏁 Quick Start

```bash
# Clone this template
git clone https://github.com/ShaunandDavid/my-stack-template.git my-new-project
cd my-new-project

# Install dependencies
pnpm install

# Start development
pnpm dev

# Open Storybook (component library)
pnpm storybook

# Run tests
pnpm test
pnpm e2e
```

## 📁 Project Structure

```
├── .github/           # GitHub Actions workflows
├── .husky/            # Git hooks
├── .storybook/        # Storybook configuration
├── docs/              # Documentation
├── public/            # Static assets
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # React components
│   ├── lib/           # Utilities
│   └── stories/       # Storybook stories
├── tests/             # E2E tests
└── package.json
```

## 🔧 Development

```bash
pnpm dev          # Start Next.js development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm typecheck    # Run TypeScript compiler
pnpm storybook    # Start Storybook
pnpm e2e          # Run Playwright tests
```

## 🚀 Deployment

This template is configured for:

- **Frontend**: Vercel (automatic deployments from GitHub)
- **Backend**: Railway (optional, for API + database)
- **Previews**: Automatic preview deployments for PRs

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

## 🎨 Components

Built-in shadcn/ui components:

- Button
- Card
- Dialog
- Input
- Navigation Menu
- Textarea

Add more components:

```bash
npx shadcn@latest add [component-name]
```

## 🧪 Testing

- **Unit**: Built-in with Vitest + Storybook
- **E2E**: Playwright for end-to-end testing
- **Visual**: Chromatic for visual regression testing

## 📝 Usage

1. **Clone this repo** as your starting point
2. **Rename** the project in `package.json`
3. **Update** the README with your project details
4. **Connect** to Vercel for deployments
5. **Start building** your app!

## 🤝 Contributing

This is a template repository. Feel free to:

- Fork and customize for your needs
- Submit improvements via PRs
- Share feedback and suggestions

---

**Happy coding!** 🎉

## 🔌 API Client

Path: `src/lib/api-client.ts`

Features:

- Thin wrapper over `fetch`
- Automatic JSON parsing
- Retries with simple backoff (default 3 attempts)
- Optional Zod schema validation per request

Example:

```ts
import { apiClient } from '@/lib/api-client';
import { z } from 'zod';

const userSchema = z.object({ id: z.string(), email: z.string().email() });

async function loadUser(id: string) {
  return apiClient.get(`/api/users/${id}`, { validateWith: userSchema });
}
```

Use `apiClient.example('/api/health')` to see schema validation in action (example schema).

## 🛡 Security Middleware

Path: `src/middleware.ts`

Adds HTTP security headers:

- `Content-Security-Policy`
- `X-Frame-Options`
- `Referrer-Policy`
- `X-Content-Type-Options`

Adjust CSP for external scripts, fonts, analytics as needed.

## 🗄 Optional Prisma Dev Mode (SQLite)

Local development can use a lightweight SQLite DB:

1. `.env.example` sets `DATABASE_URL="file:./dev.db"`
2. To initialize:

```bash
pnpm db:dev   # Runs a local migration & opens Prisma Studio
```

3. For Postgres in production, override `DATABASE_URL` with your Railway connection string and run:

```bash
pnpm db:migrate
```

4. Generate client manually if needed:

```bash
pnpm db:generate
```

If `DATABASE_URL` is absent, application code should guard DB usage (e.g., lazy import Prisma client).
