# Prairie Elegance Staging - Website

A stunning, sophisticated website for a Calgary-based home staging company. Built with Astro for optimal performance.

![Astro](https://img.shields.io/badge/Astro-4.x-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

- **Modern Design**: Elegant, luxury aesthetic with warm tones inspired by prairie landscapes
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Fast Performance**: Static site generation with Astro for lightning-fast load times
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured content
- **Smooth Animations**: CSS animations with scroll-triggered reveals
- **Accessible**: WCAG-compliant design with proper labels and navigation

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone or download this project
cd calgary-staging

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

---

## 🌐 FREE Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Method A: Drag & Drop (No Git Required)**

1. Run `npm run build` locally
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag your entire `dist/` folder onto the page
4. Your site is live! Get your URL instantly

**Method B: Connect Git Repository**

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [netlify.com](https://netlify.com) and sign up (free)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

✅ **Benefits:** Automatic deploys on git push, free SSL, CDN, custom domains

---

### Option 2: Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up (free)
3. Click "Add New" → "Project"
4. Import your repository
5. Vercel auto-detects Astro - just click "Deploy"

✅ **Benefits:** Zero-config, automatic previews for PRs, analytics

---

### Option 3: GitHub Pages (100% Free)

1. Push your code to GitHub

2. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. Update `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://YOUR-USERNAME.github.io',
  base: '/YOUR-REPO-NAME',
});
```

4. Go to repo Settings → Pages → Source: "GitHub Actions"
5. Push changes - site deploys automatically!

---

### Option 4: Cloudflare Pages

1. Push your code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Create a project and connect your repository
4. Configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Deploy!

✅ **Benefits:** Unlimited bandwidth, global CDN, Web Analytics

---

## 🎨 Customization Guide

### Changing Colors

Edit `src/styles/global.css` and modify the CSS variables:

```css
:root {
  --color-gold: #C4A962;       /* Primary accent */
  --color-charcoal: #3A3632;   /* Dark text */
  --color-cream: #F7F4EF;      /* Light backgrounds */
  /* ... more colors */
}
```

### Updating Content

- **Hero Section:** `src/components/Hero.astro`
- **Services:** `src/components/Services.astro` (edit the `services` array)
- **Portfolio:** `src/components/Portfolio.astro` (edit the `projects` array)
- **Testimonials:** `src/components/Testimonials.astro`
- **Contact Info:** `src/components/Contact.astro` and `Footer.astro`

### Adding Real Images

Replace the placeholder `img-placeholder` divs with actual images:

```html
<!-- Before (placeholder) -->
<div class="img-placeholder">
  <span>Description</span>
</div>

<!-- After (real image) -->
<img src="/images/your-image.jpg" alt="Description" />
```

Place images in the `public/images/` folder.

### Adding Google Fonts

The site uses Cormorant Garamond and Montserrat. To change fonts:

1. Visit [fonts.google.com](https://fonts.google.com)
2. Select your fonts
3. Update the `@import` in `src/styles/global.css`
4. Update the `--font-display` and `--font-body` variables

---

## 📁 Project Structure

```
calgary-staging/
├── public/
│   ├── favicon.svg
│   └── images/         # Add your images here
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Portfolio.astro
│   │   ├── Process.astro
│   │   ├── About.astro
│   │   ├── Testimonials.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🔧 Commands

| Command           | Action                                      |
|-------------------|---------------------------------------------|
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview build locally before deploying      |

---

## 📝 Adding a Contact Form Backend

The contact form is frontend-only. To make it functional:

### Option 1: Netlify Forms (Easiest with Netlify)

Add `netlify` attribute to your form:

```html
<form name="contact" method="POST" data-netlify="true">
```

### Option 2: Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update form action: `action="https://formspree.io/f/YOUR_ID"`

### Option 3: EmailJS

Use [EmailJS](https://emailjs.com) for client-side email sending.

---

## 📄 License

MIT License - Feel free to use this template for your own projects!

---

## 🙏 Credits

- Fonts: [Google Fonts](https://fonts.google.com) - Cormorant Garamond & Montserrat
- Icons: Custom SVG icons
- Built with: [Astro](https://astro.build)

---

**Made with ❤️ for Calgary home staging professionals**
