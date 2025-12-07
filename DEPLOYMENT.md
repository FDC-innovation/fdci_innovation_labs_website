# Deployment Guide for FDC Innovation Labs Website

## GitHub Repository
Repository: https://github.com/adityatonk2/fdc_innovation_labs_website.git

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select the repository: `fdc_innovation_labs_website`
   - Vercel will auto-detect Next.js settings

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Environment Variables** (if needed)
   - Add any environment variables in the Vercel dashboard
   - Most Next.js apps don't need env vars for basic deployment

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (usually 2-3 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# For production deployment
vercel --prod
```

## Post-Deployment

1. **Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

2. **Environment Variables** (if needed later)
   - Project Settings → Environment Variables
   - Add any required variables

3. **Automatic Deployments**
   - Every push to `main` branch will auto-deploy
   - Preview deployments for pull requests

## Build Configuration

The project is already configured for Vercel:
- ✅ Next.js 16.0.7
- ✅ React 19.2.0
- ✅ TypeScript
- ✅ All dependencies in package.json
- ✅ Build script: `npm run build`

## Notes

- Images are in `public/` folder and will be served automatically
- Theme system works client-side (no server config needed)
- All pages are statically generated where possible

