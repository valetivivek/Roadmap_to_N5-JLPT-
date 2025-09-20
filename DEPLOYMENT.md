# Deployment Guide

This guide covers deploying the Roadmap to N5 JLPT Study Tracker to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy this Next.js application.

### Prerequisites
- Vercel account
- GitHub repository
- Supabase project

### Step 1: Prepare Your Repository
```bash
# Ensure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

### Step 3: Environment Variables
Add these environment variables in Vercel dashboard:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

### Step 4: Database Setup
1. Run the migration script in your Supabase SQL Editor
2. Run the seed script to populate initial data
3. Configure Row Level Security policies

### Step 5: Deploy
Click "Deploy" and wait for the build to complete.

## 🌐 Netlify

### Prerequisites
- Netlify account
- GitHub repository

### Step 1: Build Configuration
Create `netlify.toml` in your project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `.next`
6. Add environment variables
7. Deploy

## 🚂 Railway

### Prerequisites
- Railway account
- GitHub repository

### Step 1: Deploy
1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Railway will auto-detect Next.js

### Step 2: Environment Variables
Add environment variables in Railway dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_APP_URL`

### Step 3: Database
Railway provides PostgreSQL. You can either:
- Use Railway's PostgreSQL
- Connect to your Supabase database

## 🐳 Docker

### Prerequisites
- Docker installed
- Docker Compose (optional)

### Step 1: Create Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Step 2: Build and Run
```bash
# Build the image
docker build -t roadmap-to-n5 .

# Run the container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SUPABASE_URL=your_url \
  -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key \
  roadmap-to-n5
```

### Step 3: Docker Compose
Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
      - NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}
      - SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE_ROLE_KEY}
      - NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}
    depends_on:
      - postgres

  postgres:
    image: postgres:15
    environment:
      - POSTGRES_DB=roadmap_n5
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

volumes:
  postgres_data:
```

## ☁️ AWS

### Prerequisites
- AWS account
- AWS CLI configured

### Step 1: Elastic Beanstalk
1. Create a new application in Elastic Beanstalk
2. Choose "Node.js" platform
3. Upload your code as a ZIP file
4. Configure environment variables

### Step 2: Lambda + API Gateway
1. Use Serverless Framework
2. Deploy as serverless functions
3. Use RDS for database

### Step 3: ECS + Fargate
1. Create ECS cluster
2. Define task definition
3. Create service
4. Use RDS for database

## 🔧 Environment Variables

### Required Variables
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### Optional Variables
```env
# Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Error Tracking
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_ERROR_TRACKING=true
```

## 🗄️ Database Setup

### Supabase (Recommended)
1. Create a new Supabase project
2. Run the migration script
3. Run the seed script
4. Configure RLS policies

### Self-hosted PostgreSQL
1. Install PostgreSQL
2. Create database
3. Run migration script
4. Run seed script
5. Update connection string

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env.local` to version control
- Use different keys for development and production
- Rotate keys regularly

### Database Security
- Enable Row Level Security (RLS)
- Use strong passwords
- Restrict database access by IP
- Enable SSL connections

### Application Security
- Use HTTPS in production
- Implement rate limiting
- Validate all inputs
- Use secure headers

## 📊 Monitoring

### Application Monitoring
- **Vercel Analytics**: Built-in performance monitoring
- **Sentry**: Error tracking and performance monitoring
- **LogRocket**: Session replay and error tracking

### Database Monitoring
- **Supabase Dashboard**: Built-in monitoring
- **PostgreSQL Monitoring**: Custom queries and alerts
- **Uptime Monitoring**: Pingdom, UptimeRobot

## 🚀 Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
npm run build
npm run analyze

# Optimize images
npm install @next/bundle-analyzer
```

### Runtime Optimization
- Enable Next.js Image Optimization
- Use CDN for static assets
- Implement caching strategies
- Optimize database queries

## 🔄 CI/CD Pipeline

### GitHub Actions
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🐛 Troubleshooting

### Common Issues

#### Build Failures
- Check Node.js version (requires 18+)
- Clear `.next` directory
- Delete `node_modules` and reinstall
- Check for TypeScript errors

#### Database Connection Issues
- Verify environment variables
- Check Supabase project status
- Verify RLS policies
- Test connection with Supabase CLI

#### Authentication Issues
- Check redirect URLs in Supabase
- Verify email templates
- Check CORS settings
- Test with different browsers

### Debug Mode
```bash
# Enable debug logging
DEBUG=* npm run dev

# Check build output
npm run build 2>&1 | tee build.log
```

## 📞 Support

If you encounter issues during deployment:

1. Check the troubleshooting section
2. Review platform-specific documentation
3. Check GitHub issues
4. Contact support

---

**Happy Deploying!** 🚀
