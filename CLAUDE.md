# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern static website for Coderra IT Consultancy. Built with Tailwind CSS for simplicity and performance. The site is a multi-page static website with custom animations and a premium design aesthetic.

**Services Pages:**
- AI in the Workplace (`web-development.html`)
- E-Commerce Development (`ecommerce-development.html`)
- IoT Solutions (`iot-solutions.html`)
- Education & Robotics Workshops (`education-robotics.html`)

## Project Structure

```
coderraje/           # Root directory (deployable website)
├── index.html       # Homepage with hero, services showcase, portfolio
├── *.html           # Service-specific landing pages (4 pages)
├── 404.html         # 404 error page
├── css/
│   └── styles.css   # Generated Tailwind CSS (do not edit directly)
├── assets/
│   ├── favicon.ico
│   └── img/
│       └── bg-masthead.jpg
├── build-tools/     # Development files (not deployed)
│   ├── input.css    # Tailwind source with custom components
│   ├── tailwind.config.js  # Extended theme with custom colors, animations
│   ├── package.json        # Build scripts and dependencies
│   └── node_modules/       # Dependencies (run npm install first)
├── CLAUDE.md        # This file
├── README.md        # Project documentation
├── DEPLOY.md        # Deployment instructions
└── .git/            # Git repository
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

### Style Changes
1. Edit `build-tools/input.css` (for custom components) or `build-tools/tailwind.config.js` (for theme extensions)
2. From the `build-tools/` directory, run `npm run build:css` to regenerate `css/styles.css`
3. **Always commit both source and generated CSS**

### Custom Components in `build-tools/input.css`
- `.glass-card` - Glassmorphism effect for cards
- `.btn-premium` / `.btn-secondary` - Custom button styles with hover effects
- `.feature-card` / `.service-tile` - Interactive card components
- `.gradient-text` - Gradient text effect
- `.nav-blur` - Navigation backdrop blur
- `.scroll-reveal` - Scroll-triggered animations

## Design System

### Colors (in `tailwind.config.js`)
- **primary**: Custom blue scale (50-900) - main brand color
- **accent.purple**: #8b5cf6 - E-commerce services
- **accent.teal**: #14b8a6 - IoT services
- **accent.orange**: #f59e0b - Education services
- **accent.pink**: #ec4899 - AI services

Note: README mentions different color codes (e.g., `coderra-blue: #1a7aa6`) but these are not in the current `tailwind.config.js`. Use the `primary` and `accent` colors defined in the config.

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

## Development Workflow

1. **Local development**:
   - `cd build-tools`
   - Use `npm run watch:css` + `npm run serve` concurrently (in separate terminals)
2. **Testing**: Check all pages, test mobile menu (hamburger on mobile)
3. **Before commit**: From `build-tools/`, run `npm run build:css` to ensure minified production CSS
4. **Deployment**: Upload all files from root (excluding `build-tools/`) to hosting

## Deployment

### DigitalOcean App Platform (Preferred)
See `DEPLOY.md` for detailed steps:
- Static site pointing to root directory
- No build command needed (CSS pre-built)
- Free Starter tier available

### GitHub Pages (Alternative)
1. Repository settings → Pages
2. Source: Deploy from branch `main`
3. Folder: `/` (root)
4. Site: `https://jgalan247.github.io/coderraje/`

### Other Options
Netlify, Vercel, Cloudflare Pages:
- Deploy root directory
- Exclude `build-tools/` folder (add to .gitignore or use build ignore settings)

## Important Notes

- **Static HTML only** - No template engine, SSG, or JS framework
- **CSS must be rebuilt** - Generated `styles.css` is not auto-updated
- **Python dependency** - `npm run serve` uses Python's HTTP server
- **Mobile-first** - Responsive breakpoints: sm (640px), md (768px), lg (1024px)
- **Navigation** - Fixed header with mobile hamburger menu (toggle via JS in HTML)
- **Build tools isolated** - All Tailwind/build dependencies in `build-tools/` folder
- **Clean deployment** - Deploy root excluding `build-tools/` for production
