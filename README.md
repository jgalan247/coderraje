# Coderra Website

Modern static website for Coderra IT Consultancy, built with Tailwind CSS.

## 🚀 Quick Start

```bash
# View the site locally
npm run serve
# Visit http://localhost:8000
```

That's it! The site is ready to deploy as-is.

## 📂 Project Structure

```
Coderra_bootsrap/
├── public/              # The website (ready to deploy)
│   ├── index.html
│   ├── education-robotics.html
│   ├── ecommerce-development.html
│   ├── iot-solutions.html
│   ├── web-development.html
│   ├── css/
│   │   └── styles.css
│   └── assets/
│       ├── favicon.ico
│       └── img/
│           └── bg-masthead.jpg
├── src/
│   └── input.css        # Tailwind CSS source
├── tailwind.config.js
└── package.json
```

## 🎨 Making Changes

### Edit Content
Simply edit the HTML files in `public/`:
- `index.html` - Homepage
- `education-robotics.html` - Education services
- `ecommerce-development.html` - E-commerce services
- `iot-solutions.html` - IoT services
- `web-development.html` - AI services

### Edit Styles
If you need to change styles:

```bash
# Install dependencies (first time only)
npm install

# Edit src/input.css or tailwind.config.js
# Then rebuild:
npm run build:css
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Easiest)
1. Push to GitHub
2. Go to Settings → Pages
3. Source: Deploy from branch
4. Branch: `master`, Folder: `/public`
5. Save

Your site will be at: `https://jgalan247.github.io/coderra/`

### Option 2: Any Static Host
Upload the `public/` folder to any of these:
- **Netlify** (drag & drop, free)
- **Vercel** (import repo, free)
- **Cloudflare Pages** (free)
- **DigitalOcean App Platform** (free tier)
- Any web hosting with FTP

## 🛠️ Development Commands

```bash
npm install          # Install Tailwind CSS
npm run build:css    # Build production CSS
npm run watch:css    # Watch for CSS changes
npm run serve        # Start local server
```

## 📱 Features

- ✅ Fully responsive design
- ✅ Modern Tailwind CSS
- ✅ Fast loading
- ✅ Mobile navigation
- ✅ Smooth animations
- ✅ SEO friendly

## 🎨 Brand Colors

- **Blue** (#1a7aa6) - Primary
- **Purple** (#6a55ff) - E-commerce
- **Green** (#0aa87a) - IoT
- **Orange** (#de8a2a) - Education

## 📧 Contact

admin@coderra.je
