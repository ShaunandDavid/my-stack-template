# Getting Started

## Prerequisites

- Node.js 20+
- pnpm (recommended) or npm
- Git

## Installation

1. **Clone this template:**

```bash
git clone https://github.com/ShaunandDavid/my-stack-template.git my-new-project
cd my-new-project
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Set up environment variables:**

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

If using a database, also create a `.env` (server) with `DATABASE_URL`.

4. **Start development server:**

```bash
pnpm dev
```

Visit http://localhost:3000 to see your app running!

## Development Workflow

### Adding Components

```bash
# Add shadcn/ui components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add form
```

### Creating Stories

Create `.stories.ts` files for your components in `src/stories/`:

```typescript
import { Button } from "@/components/ui/button";

export default {
  title: "UI/Button",
  component: Button,
};

export const Default = {
  args: {
    children: "Click me",
  },
};
```

### Writing Tests

Add E2E tests in the `tests/` directory:

```typescript
import { test, expect } from "@playwright/test";

test("homepage loads", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/My App/);
});
```

### Pre-commit Hooks

The project automatically:

- Formats code with Prettier
- Fixes ESLint issues
- Type-checks TypeScript

### Database (Optional)

```bash
pnpm db:generate   # Generate Prisma client
pnpm db:push       # Push schema to database (development)
pnpm db:migrate    # Create & apply a migration (prompted)
pnpm db:studio     # Open Prisma Studio UI
```

## Next Steps

1. **Customize the template** for your project
2. **Add your components** and pages
3. **Set up backend** (optional) with Railway
4. **Connect to Vercel** for deployment
5. **Start building** your SaaS or app!
