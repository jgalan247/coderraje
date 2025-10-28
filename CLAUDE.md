# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern static website for Coderra IT Consultancy. Built with Tailwind CSS for simplicity and performance.

**Services:**
- AI in the Workplace
- E-Commerce Development
- IoT Solutions
- Education & Robotics Workshops

## Structure

```
public/              # The entire website (deploy this)
├── index.html      # Homepage with hero, services, portfolio
├── education-robotics.html
├── ecommerce-development.html
├── iot-solutions.html
├── web-development.html
├── css/styles.css  # Generated Tailwind CSS
└── assets/         # Images and favicon

src/
└── input.css       # Tailwind source
```

## Commands

```bash
npm install          # Install Tailwind (first time only)
npm run build:css    # Rebuild CSS after style changes
npm run serve        # View locally at http://localhost:8000
```

## Making Changes

**Content:** Edit HTML files directly in `public/`

**Styles:**
1. Edit `src/input.css` or `tailwind.config.js`
2. Run `npm run build:css`
3. Commit both source and generated CSS

## Brand Colors

In `tailwind.config.js`:
- `coderra-blue`: #1a7aa6
- `coderra-purple`: #6a55ff
- `coderra-green`: #0aa87a
- `coderra-orange`: #de8a2a

Use in HTML: `text-coderra-blue`, `bg-coderra-purple`, etc.

## Deployment

**GitHub Pages:** Deploy `public/` folder from Settings → Pages

**Other hosts:** Upload `public/` folder to any static hosting service

## Important

- All pages are static HTML - no template engine
- CSS must be rebuilt after style changes
- Mobile-first responsive design
- Fixed navigation with mobile menu
