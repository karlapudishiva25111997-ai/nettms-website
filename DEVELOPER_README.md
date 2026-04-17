# NETTMS Urban Habitat — Next.js Website

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS (globals.css)
- **Fonts:** Cormorant Garamond + DM Sans (Google Fonts via CDN)
- **SEO:** Full `metadata` export on every page, OpenGraph, robots

---

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev
# → Opens at http://localhost:3000

# Production build
npm run build
npm run start
```

---

## Project Structure

```
nettms-site/
├── app/
│   ├── layout.tsx              ← Root layout (Navbar + Footer + Metadata)
│   ├── globals.css             ← Brand CSS variables + hover utilities
│   ├── page.tsx                ← Home page (/)
│   ├── about/page.tsx          ← About page (/about)
│   ├── services/
│   │   ├── page.tsx            ← Services landing (/services)
│   │   ├── bim-outsourcing/    ← /services/bim-outsourcing
│   │   ├── bim-coordination/   ← /services/bim-coordination
│   │   ├── digital-construction/ ← /services/digital-construction
│   │   ├── digital-asset-twin/ ← /services/digital-asset-twin
│   │   └── digital-twin-gis/   ← /services/digital-twin-gis
│   ├── process-qaqc/page.tsx   ← /process-qaqc
│   ├── confidentiality/page.tsx ← /confidentiality
│   ├── industries/page.tsx     ← /industries
│   ├── partners/page.tsx       ← /partners
│   ├── nettmsedu/page.tsx      ← /nettmsedu
│   └── contact/page.tsx        ← /contact
├── components/
│   ├── Navbar.tsx              ← Sticky nav + mobile menu (Client Component)
│   ├── Footer.tsx              ← Full footer with all links
│   └── ContactForm.tsx         ← Form with validation (Client Component)
└── public/
    └── logo.png                ← NETTMS logo (used in Navbar + Footer)
```

---

## Brand Colors (CSS Variables in globals.css)

| Variable       | Hex       | Usage                         |
|----------------|-----------|-------------------------------|
| `--navy`       | `#003366` | Headlines, hero, buttons      |
| `--navy-deep`  | `#001e3c` | Hero backgrounds              |
| `--teal`       | `#006666` | Secondary headings, accents   |
| `--cyan`       | `#00AAAA` | Icons, CTAs, highlights       |
| `--bg-light`   | `#E8F4F4` | Card backgrounds              |
| `--text-muted` | `#5a7080` | Body paragraphs               |

---

## SEO Notes

- Every page exports its own `metadata` object (title + description + canonical)
- Root layout has full OpenGraph metadata
- All 14 pages pre-render as **Static HTML** at build time
- Update `metadataBase` in `layout.tsx` to your live domain

---

## Deployment

### Vercel (Recommended — zero config)
```bash
npm i -g vercel
vercel
```

### Self-hosted / VPS
```bash
npm run build
# Serve the .next/standalone folder or use PM2:
npm run start
```

### Update Domain in layout.tsx
```ts
metadataBase: new URL("https://nettms.com"),
```

---

## Contact Form
Currently front-end only (no backend). To wire it up:
1. Add a server action in `app/actions.ts`
2. Or connect to Resend / Nodemailer / FormSpree
3. Update `ContactForm.tsx` to call the action on submit

---

## Fonts
Loaded via `<link>` tag in `layout.tsx`. Works offline once cached.
For production performance, you can switch to `next/font/google` after confirming network access.

---

## Adding Future Pages
1. Create `app/[page-name]/page.tsx`
2. Export `metadata` for SEO
3. Add link to `Navbar.tsx` nav array
4. Add link to `Footer.tsx`

