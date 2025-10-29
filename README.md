# Coderra.je Website

Modern static website for Coderra.je IT Consultancy, built with Tailwind CSS.

## 🚀 Quick Start

```bash
# View the site locally
cd build-tools
npm run serve
# Visit http://localhost:8000
```

That's it! The site is ready to deploy as-is.

## 📂 Project Structure

```
coderraje/               # Root (ready to deploy)
├── index.html          # Homepage
├── education-robotics.html
├── ecommerce-development.html
├── iot-solutions.html
├── web-development.html
├── 404.html
├── css/
│   └── styles.css      # Generated CSS
├── assets/
│   ├── favicon.ico
│   └── img/
│       └── bg-masthead.jpg
├── build-tools/        # Development only (exclude from deployment)
│   ├── input.css       # Tailwind CSS source
│   ├── tailwind.config.js
│   ├── package.json
│   └── node_modules/
├── README.md
├── CLAUDE.md
└── DEPLOY.md
```

## 🎨 Making Changes

### Edit Content
Simply edit the HTML files in the root directory:
- `index.html` - Homepage
- `education-robotics.html` - Education services
- `ecommerce-development.html` - E-commerce services
- `iot-solutions.html` - IoT services
- `web-development.html` - AI services

### Edit Styles
If you need to change styles:

```bash
# Install dependencies (first time only)
cd build-tools
npm install

# Edit input.css or tailwind.config.js
# Then rebuild:
npm run build:css
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Easiest)
1. Push to GitHub
2. Go to Settings → Pages
3. Source: Deploy from branch
4. Branch: `main`, Folder: `/` (root)
5. Save

Your site will be at: `https://jgalan247.github.io/coderraje/`

### Option 2: Any Static Host
Upload the root folder (excluding `build-tools/`) to any of these:
- **Netlify** (drag & drop, free)
- **Vercel** (import repo, free)
- **Cloudflare Pages** (free)
- **DigitalOcean App Platform** (free tier)
- Any web hosting with FTP

## 🛠️ Development Commands

All commands must be run from the `build-tools/` directory:

```bash
cd build-tools
npm install          # Install Tailwind CSS
npm run build:css    # Build production CSS
npm run watch:css    # Watch for CSS changes
npm run serve        # Start local server
```

## 📱 Features

- ✅ Fully responsive design
- ✅ Modern Tailwind CSS with custom animations
- ✅ Fast loading
- ✅ Mobile navigation
- ✅ Smooth animations and transitions
- ✅ SEO friendly
- ✅ Jersey island visualization
- ✅ Vibrant service cards with hover effects

## 🎨 Brand Colors

- **Primary Blue** (50-900 scale) - Main brand color
- **Purple** (#8b5cf6) - E-commerce
- **Teal** (#14b8a6) - IoT
- **Orange** (#f59e0b) - Education
- **Pink** (#ec4899) - AI services

## 📧 Contact

admin@coderra.je
