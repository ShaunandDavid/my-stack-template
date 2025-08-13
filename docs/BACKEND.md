# Backend Setup (Optional)

This template can work as a frontend-only project using Next.js API routes, or with a separate backend service on Railway.

## Option 1: Next.js API Routes (Recommended for simple apps)

Create API routes in `src/app/api/`:

```typescript
// src/app/api/hello/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello from API!" });
}
```

## Option 2: Separate Backend on Railway

### 1. Create Backend Project

```bash
mkdir backend
cd backend
npm init -y
```

### 2. Install Dependencies

**Express:**

```bash
npm install express cors dotenv
npm install -D @types/express @types/cors typescript ts-node nodemon
```

**Fastify (Alternative):**

```bash
npm install fastify @fastify/cors dotenv
npm install -D typescript ts-node nodemon
```

### 3. Basic Server Setup

**Express Example:**

```typescript
// backend/src/index.ts
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

### 4. Package.json Scripts

```json
{
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

### 5. Railway Deployment

1. Create `railway.json`:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "healthcheckPath": "/api/health"
  }
}
```

2. Deploy:
   - Connect GitHub repo to Railway
   - Set environment variables
   - Deploy automatically on push

## Database Setup (PostgreSQL on Railway)

### 1. Add Database Service

- In Railway project, add PostgreSQL service
- Copy connection string

### 2. Install Database Client

**Prisma (Recommended):**

```bash
npm install prisma @prisma/client
npx prisma init
```

Generated `prisma/schema.prisma` already contains a `User` model. Adjust as needed.

Run generation & push:

```bash
pnpm db:generate
pnpm db:push
```

**Drizzle (Alternative):**

```bash
npm install drizzle-orm postgres
npm install -D drizzle-kit
```

### 3. Environment Variables

```bash
# .env
DATABASE_URL="postgresql://username:password@host:port/database"
JWT_SECRET="your-secret-key"
```

## Frontend Integration

Update your frontend to use the backend API:

````typescript
// lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const api = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_URL}${endpoint}`);
    return response.json();
  },

  post: async (endpoint: string, data: any) => {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

## Logging

Use the provided Pino logger in `src/lib/logger.ts`:

```typescript
import { logger } from "@/lib/logger";
logger.info("Server started");
````

```

## Authentication (Optional)

Consider these auth solutions:

- **NextAuth.js** - Full-featured auth for Next.js
- **Clerk** - Complete user management
- **Supabase Auth** - If using Supabase as database
- **Custom JWT** - For maximum control
```
