# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern static website for Coderra.je IT Consultancy. Built with Tailwind CSS for simplicity and performance. The site consists of multiple static HTML pages with custom animations and a premium design aesthetic.

**Main Pages:**
- `index.html` - Homepage with services, work showcase, and about section
- `web-development.html` - AI in the Workplace service page
- `ecommerce-development.html` - E-Commerce Development service page
- `iot-solutions.html` - IoT Solutions service page
- `education-robotics.html` - Education & Robotics Workshops service page
- `websites.html` - Professional website design showcase
- `404.html` - Custom 404 error page

**Demo Pages (`webDemos/`):**
- Self-contained demo websites showcasing different business templates
- Uses Tailwind CDN (NOT the compiled `css/styles.css`)
- Includes demos for: bakery, coaching, portfolio, wellness, carpenter, chiropractor, CV

## Project Structure

```
coderraje_v2/        # Root directory (deployable website)
├── index.html       # Homepage with hero, services showcase, portfolio
├── *.html           # Service pages (4) + websites.html showcase page
├── 404.html         # 404 error page
├── webDemos/        # Self-contained demo websites (use Tailwind CDN)
├── css/
│   └── styles.css   # Generated Tailwind CSS (do not edit directly)
├── assets/
│   ├── favicon.ico
│   └── img/
│       ├── bg-masthead.jpg
│       └── coderra-favicon.svg
├── build-tools/     # Development files (NOT deployed)
│   ├── input.css    # Tailwind source with custom components
│   ├── tailwind.config.js  # Extended theme with custom colors, animations
│   ├── package.json        # Build scripts and dependencies
│   └── node_modules/       # Dependencies (run npm install first)
├── CLAUDE.md        # This file
├── README.md        # Project documentation
└── DEPLOY.md        # Deployment instructions
```

## Commands

All commands must be run from the `build-tools/` directory:

```bash
# First-time setup
cd build-tools
npm install

# Development
npm run watch:css    # Auto-rebuild CSS on changes (recommended during development)
npm run serve        # Start local server at http://localhost:8000

# Production
npm run build:css    # Build minified CSS for deployment
```

## Making Changes

### Content Changes
Edit HTML files directly in the root directory. Each service page follows a similar structure:
- Fixed navigation with back-to-home link
- Hero section with service icon
- Content sections with cards/features
- CTA section
- Footer

**Important:**
- Main site pages (`index.html`, service pages) use the compiled `css/styles.css`
- Demo pages in `webDemos/` use Tailwind CDN and inline styles - do NOT reference `css/styles.css`

### Style Changes
1. Edit `build-tools/input.css` (for custom components) or `build-tools/tailwind.config.js` (for theme extensions)
2. From the `build-tools/` directory, run `npm run build:css` to regenerate `css/styles.css`
3. **Always commit both source and generated CSS**
4. Changes only affect main site pages, not `webDemos/` directory

### Custom Components in `build-tools/input.css`
- `.glass-card` - Glassmorphism effect for cards
- `.btn-premium` / `.btn-secondary` - Custom button styles with hover effects
- `.feature-card` / `.service-tile` - Interactive card components with hover effects
- `.gradient-text` - Gradient text effect
- `.nav-blur` - Navigation backdrop blur
- `.scroll-reveal` - Scroll-triggered animations (add `.revealed` class via JS)
- `.section-header` / `.section-title` / `.section-subtitle` - Section heading styles
- `.icon-wrapper` - Icon containers with gradient backgrounds and hover animations
- `.animated-gradient` - Animated gradient background (15s loop)

## Design System

### Colors (in `tailwind.config.js`)
- **primary**: Custom blue scale (50-900) - main brand color (#0ea5e9 at 500)
- **accent.purple**: #8b5cf6 - E-commerce services
- **accent.teal**: #14b8a6 - IoT services
- **accent.orange**: #f59e0b - Education services
- **accent.pink**: #ec4899 - AI services

**Usage:** Reference as `primary-500`, `accent-purple`, etc. in Tailwind classes

### Typography
- **Font**: Inter (Google Fonts) with variable weights
- **Display font**: Cal Sans (referenced but Inter used as fallback)
- Font features enabled: cv02, cv03, cv04, cv11

### Custom Animations
Defined in `tailwind.config.js`:
- `animate-fade-in` - Fade in effect
- `animate-slide-up/down` - Slide animations
- `animate-scale-in` - Scale in effect
- `animate-float` - Floating effect (6s infinite)
- `animate-glow` - Glow effect (2s infinite)

## Page Architecture

### Homepage (`index.html`)
- Hero section with animated badge, gradient text, stats
- Services grid with icon-based cards
- Portfolio/work section
- About section
- Contact CTA
- Footer

### Service Pages
All follow consistent structure:
- Gradient hero with service-specific color
- Vision/overview section
- Feature breakdowns
- CTA section
- Footer with navigation links

## Architecture Notes

### Two Different CSS Systems
The site uses TWO different CSS approaches:

1. **Main site pages** (`index.html`, service pages, `404.html`):
   - Use compiled `css/styles.css` from Tailwind build process
   - Styles defined in `build-tools/input.css` and `build-tools/tailwind.config.js`
   - Requires rebuilding CSS after changes

2. **Demo pages** (`webDemos/*.html`, `websites.html`):
   - Use Tailwind CDN: `<script src="https://cdn.tailwindcss.com"></script>`
   - Include inline `<style>` blocks for custom CSS
   - Independent from build process
   - Do NOT link to `css/styles.css`

### Mobile Navigation
- Service pages have a mobile hamburger menu (toggle via inline JavaScript)
- Homepage has sticky navigation with smooth scroll
- All use fixed/sticky positioning

## Development Workflow

1. **Local development**:
   - `cd build-tools`
   - Use `npm run watch:css` + `npm run serve` concurrently (in separate terminals)
   - Server runs on http://localhost:8000
2. **Testing**: Check all pages, test mobile menu, verify responsive design
3. **Before commit**: From `build-tools/`, run `npm run build:css` to ensure minified production CSS
4. **Deployment**: Upload all files from root (excluding `build-tools/`) to hosting

## Deployment

See `DEPLOY.md` for detailed instructions.

### Key Points
- Deploy from root directory (`/`)
- No build command needed (CSS pre-built in `css/styles.css`)
- Exclude `build-tools/` folder from deployment
- Supported platforms: DigitalOcean App Platform, GitHub Pages, Netlify, Vercel, Cloudflare Pages
- Current repository: `jgalan247/coderraje`
- Main branch for deployment: `main` (note: repo's main branch is `master`)

## Important Notes

- **Static HTML only** - No template engine, SSG, or JS framework
- **CSS must be rebuilt** - Generated `styles.css` is not auto-updated; run `npm run build:css` after changes
- **Python dependency** - `npm run serve` uses Python's HTTP server (`python3 -m http.server`)
- **Mobile-first** - Responsive breakpoints: sm (640px), md (768px), lg (1024px)
- **Build tools isolated** - All Tailwind/build dependencies in `build-tools/` folder
- **Clean deployment** - Deploy root excluding `build-tools/` for production
- **Two CSS approaches** - Main site uses compiled CSS; demo pages use Tailwind CDN
- **Untracked files** - Current untracked: `webDemos/` directory and `websites.html` (as of last commit)
