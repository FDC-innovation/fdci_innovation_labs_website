# FDC Innovation Labs Website

A modern, production-ready website for FDC Innovation Labs - Uttarakhand's First AI Innovation Community.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** ShadCN UI
- **Icons:** Lucide React
- **Form Validation:** React Hook Form + Zod
- **Language:** TypeScript

## ✨ Features

- 🎨 Premium AI-themed dark mode design
- ✨ Smooth Framer Motion animations
- 🔍 SEO optimized with metadata
- 📱 Fully responsive and mobile-first
- ♿ Accessibility friendly
- 🎯 High conversion focus
- 🌐 Production-ready

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Deployment

```bash
# Build the project
npm run build

# The build output will be in the .next folder
# Deploy the entire project to your hosting provider
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── training/          # Training page
│   ├── projects/          # Projects page
│   ├── testimonials/      # Testimonials page
│   ├── contact/           # Contact page
│   ├── book-consultation/ # Booking form
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   └── ui/                # ShadCN UI components
├── data/
│   └── site-config.ts     # Site configuration & content
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Customization

### Update Site Content

Edit `src/data/site-config.ts` to update:
- Company information
- Services
- Testimonials
- Projects
- Training programs
- Contact details

### Update Colors

Edit `src/app/globals.css` to customize the color scheme.

### Add New Pages

1. Create a new folder in `src/app/`
2. Add `page.tsx` and `layout.tsx`
3. Update navigation in `src/components/layout/Header.tsx`

## 📝 Environment Variables

Copy `env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

© 2024 FDC Innovation Labs. All rights reserved.

## 🤝 Support

For support, email hello@fdcinnovationlabs.com or visit our [Contact Page](https://fdcinnovationlabs.com/contact).
