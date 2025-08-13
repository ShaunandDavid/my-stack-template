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
