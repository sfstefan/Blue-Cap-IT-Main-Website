# Blue Cap IT Main Website (bluecapit.com)

## About This Project

This is the marketing website for Blue Cap IT, an IT services business and official Verkada Gold Partner. The site showcases security solutions including cameras, access control, sensors, alarms, intercoms, and command center software.

**The owner is not a developer and uses Claude Code to manage the site through natural language.** Always explain what you're about to change and why in plain English before making any edits. Do not use jargon without explanation.

## Current Tech Stack

- **Plain HTML/CSS** — no build tools, no JavaScript framework
- **Fonts:** Google Fonts (Sora + DM Sans)
- **Styling:** Single `style.css` file
- **Hosting/Deployment:** Static files (GitHub Pages or similar)
- **No package.json, no bundler, no dependencies**

## Planned Migration

This site is being migrated to **Astro**. When that migration begins:
- Astro uses `.astro` files for pages and components
- Shared layout (header, nav, footer) will become reusable Astro components
- Pages will live in `src/pages/`
- CSS can stay in a single file or be scoped to components
- Static assets (images) will move to `public/`

## File Structure (Current)

```
/ (root)
  index.html          — Homepage
  about.html           — About page
  services.html        — Services overview
  cameras.html         — Verkada cameras
  access-control.html  — Access control systems
  alarms.html          — Alarm systems
  sensors.html         — Environmental sensors
  intercom.html        — Intercom systems
  command.html         — Command center software
  contact.html         — Contact page
  nav.html             — Shared navigation (included via inline SVG/HTML)
  style.css            — All site styles
  logo.png             — Blue Cap IT logo
  *.png                — Product/marketing images (Verkada product renders)
```

## Key Conventions

- All pages share the same `style.css`
- Navigation markup is duplicated across pages (nav.html is a reference copy)
- Product images are Verkada-provided renders stored in the root directory
- Pages are self-contained HTML with inline `<style>` blocks where needed in addition to the shared stylesheet

## Rules for Making Changes

1. **Explain first.** Before editing any file, describe what will change and why in simple terms.
2. **Keep it simple.** This is a small business marketing site — avoid over-engineering.
3. **Test navigation.** If you change the nav on one page, change it on all pages.
4. **Respect the design.** The site uses Sora for headings and DM Sans for body text. Maintain this typography.
5. **Images stay in root** (until the Astro migration moves them to `public/`).
6. **No new dependencies** unless explicitly approved — the site should remain simple to deploy.
7. **Do not push to the remote** without explicit approval.
