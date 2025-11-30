# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern static website for Coderra.je IT Consultancy. Built with Tailwind CSS for simplicity and performance. Static HTML pages with custom animations and a premium design aesthetic.

**Main Pages:** `index.html` (homepage), `web-development.html` (AI), `ecommerce-development.html`, `iot-solutions.html`, `education-robotics.html`, `pricing.html`, `websites.html` (showcase), `404.html`

**Demo Pages (`webDemos/`):** Self-contained demo websites using Tailwind CDN (NOT `css/styles.css`). Includes: bakery, coaching, portfolio, wellness, carpenter, chiropractor, CV templates.

## Project Structure

```
coderraje/           # Root directory (deployable website)
├── *.html           # Main site pages (8 total)
├── webDemos/        # Demo websites (use Tailwind CDN, independent from build)
├── css/styles.css   # Generated Tailwind CSS (do not edit directly)
├── assets/          # favicon.ico, img/
├── build-tools/     # Development files (NOT deployed)
│   ├── input.css    # Tailwind source with custom components
│   ├── tailwind.config.js
│   └── package.json
└── DEPLOY.md
```

## Commands

All commands run from `build-tools/` directory:

```bash
cd build-tools && npm install   # First-time setup
npm run watch:css               # Auto-rebuild CSS during development
npm run serve                   # Local server at http://localhost:8000
npm run build:css               # Build minified CSS for production
```

## Making Changes

### Content Changes
Edit HTML files in root. Service pages follow: nav → hero → content sections → CTA → footer.

### Style Changes
1. Edit `build-tools/input.css` (components) or `build-tools/tailwind.config.js` (theme)
2. Run `npm run build:css` from `build-tools/`
3. **Commit both source and generated CSS**

### Two CSS Systems (Critical)
- **Main pages** use compiled `css/styles.css` - requires rebuild after changes
- **Demo pages** (`webDemos/`) use Tailwind CDN - do NOT link to `css/styles.css`

### Custom Components (`input.css`)
`.glass-card`, `.btn-premium`, `.btn-secondary`, `.feature-card`, `.service-tile`, `.gradient-text`, `.nav-blur`, `.scroll-reveal` (add `.revealed` via JS), `.section-header/.title/.subtitle`, `.icon-wrapper`, `.animated-gradient`

## Design System

### Colors (`tailwind.config.js`)
- **primary**: Blue scale (50-900), main brand `#0ea5e9` at 500
- **accent**: purple `#8b5cf6` (e-commerce), teal `#14b8a6` (IoT), orange `#f59e0b` (education), pink `#ec4899` (AI)

### Typography
Inter font with variable weights. Font features: cv02, cv03, cv04, cv11.

### Animations (`tailwind.config.js`)
`animate-fade-in`, `animate-slide-up/down`, `animate-scale-in`, `animate-float` (6s), `animate-glow` (2s)

## Development Workflow

1. Run `npm run watch:css` + `npm run serve` in separate terminals from `build-tools/`
2. Test all pages, mobile menu, responsive design
3. Run `npm run build:css` before committing

## Deployment

Deploy root directory excluding `build-tools/`. No build command needed (CSS pre-built). See `DEPLOY.md` for platform-specific instructions (DigitalOcean, GitHub Pages, Netlify, Vercel).

## Important Notes

- **Static HTML only** - No frameworks, SSGs, or template engines
- **CSS rebuild required** - Always run `npm run build:css` after style changes
- **Python required** - `npm run serve` uses `python3 -m http.server`
- **Responsive breakpoints** - sm (640px), md (768px), lg (1024px)
