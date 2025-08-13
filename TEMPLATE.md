# 🎯 Clean Stack Template

A complete, production-ready template for building SaaS applications and web apps with modern tools and best practices.

## ⚡ Features

✅ **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui  
✅ **Developer Experience**: Hot reload, pre-commit hooks, automated testing  
✅ **Production Ready**: CI/CD, automated deployments, monitoring  
✅ **Quality Assurance**: ESLint, Prettier, TypeScript, automated testing  
✅ **Visual Testing**: Storybook + Chromatic for component development  
✅ **E2E Testing**: Playwright for end-to-end testing  
✅ **Flexible Backend**: Next.js API routes or separate Railway deployment

## 🏗️ Architecture

```
Frontend (Vercel)     Backend (Optional - Railway)     Database (Railway)
┌─────────────────┐   ┌──────────────────────────┐    ┌─────────────────┐
│   Next.js App   │   │     Express/Fastify      │    │   PostgreSQL    │
│   + Tailwind    │ → │     + REST/GraphQL       │ →  │   + Prisma ORM  │
│   + shadcn/ui   │   │     + Authentication     │    │                 │
└─────────────────┘   └──────────────────────────┘    └─────────────────┘
```

## 🚀 One-Click Setup

1. **Use this template** (click "Use this template" button)
2. **Clone your new repo**
3. **Run setup command:**

```bash
pnpm install && pnpm dev
```

That's it! Your app is running on http://localhost:3000

## 📖 Documentation

- [📋 Getting Started](docs/GETTING-STARTED.md)
- [🚀 Deployment Guide](docs/DEPLOYMENT.md)
- [🔧 Backend Setup](docs/BACKEND.md)

## 🛠️ Built With

### Frontend Core

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components

### Development Tools

- **Storybook** - Component development environment
- **Playwright** - End-to-end testing
- **ESLint + Prettier** - Code linting and formatting
- **Husky** - Git hooks for quality gates
- **pnpm** - Fast, efficient package manager

### DevOps & Deployment

- **GitHub Actions** - CI/CD pipeline
- **Vercel** - Frontend hosting and deployment
- **Railway** - Backend and database hosting
- **Chromatic** - Visual testing and review

## 🎯 Perfect For

- 🚀 **SaaS Applications** - Multi-tenant software platforms
- 💼 **B2B Tools** - Internal business applications
- 🛒 **E-commerce** - Online stores and marketplaces
- 📱 **Mobile Web Apps** - Progressive web applications
- 🎨 **Portfolio Sites** - Personal or agency websites
- 📚 **Documentation** - Project or product docs

## ⭐ Why This Template?

- **Zero Configuration** - Works out of the box
- **Best Practices** - Industry-standard tooling and patterns
- **Scalable** - Grows with your project needs
- **Modern** - Latest stable versions of all tools
- **Documented** - Comprehensive guides and examples
- **Maintained** - Regular updates and improvements

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines for details.

## 📄 License

MIT License - feel free to use this template for any project.

---

**⭐ Star this repo** if you find it helpful!  
**🐛 Report issues** to help us improve the template.  
**💡 Share ideas** for new features or improvements.
