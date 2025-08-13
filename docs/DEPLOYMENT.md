# Deployment Guide

## Frontend (Vercel)

1. Connect your GitHub repo to Vercel
2. Framework: Next.js (auto-detected)
3. Deploy automatically on push to `main`
4. Preview deployments on PRs

## Backend (Railway) - Optional

1. Create new project on Railway
2. Connect GitHub repo
3. Add environment variables
4. Deploy automatically on push

## Database (Railway Postgres) - Optional

1. Add Postgres service to Railway project
2. Copy connection string to environment variables
3. Run migrations

## Environment Variables

### Frontend (.env.local)

```
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Backend (.env)

```
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_jwt_secret
PORT=3001
```
