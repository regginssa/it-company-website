# Charlie Unicorn AI — Company Website

Marketing site for **Charlie Unicorn AI**, a software studio offering web development, mobile apps, blockchain, AI solutions, Unreal Engine 5 game development, and IT consultancy. Built with **Next.js 14** (App Router), React 18, and TypeScript.

## Features

- Theme 2 layout (home, about, services, portfolio, FAQ, contact)
- **English & Polish** — language dropdown in the header; URLs use locale prefix (`/en/...`, `/pl/...`)
- Dynamic service pages (`/service-details/[slug]`) and portfolio case studies (`/case-details/[slug]`)
- Contact form API with [Resend](https://resend.com) (`/api/contact`)
- SEO: per-page metadata, canonical URLs, Open Graph, Twitter cards, `robots.txt`, `sitemap.xml`, JSON-LD (Organization + WebSite)
- Semantic HTML: `<main>`, one `<h1>` per page, breadcrumb `<nav>`, `<address>`, accessible controls

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en`). Polish: [http://localhost:3000/pl](http://localhost:3000/pl).

### Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Public site URL (e.g. `https://charlieunicornai.eu`) — used for canonical links, sitemap, and Open Graph |
| `RESEND_API_KEY` | Resend API key for the contact form |
| `CONTACT_TO_EMAIL` | Inbox for form submissions |
| `CONTACT_FROM_EMAIL` | Verified sender address in Resend |

## Internationalization (i18n)

- Locales: `en` (English), `pl` (Polski)
- Translations: [`messages/en/`](messages/en/) and [`messages/pl/`](messages/pl/)
- Config & helpers: [`lib/i18n/`](lib/i18n/)
- UI: [`components/layout/LanguageSelector.tsx`](components/layout/LanguageSelector.tsx) — globe dropdown in the header
- Links: [`components/layout/LocalizedLink.tsx`](components/layout/LocalizedLink.tsx) keeps the current locale when navigating

To add or edit copy, update the matching keys in both `messages/en/` and `messages/pl/` files.

## SEO

- Shared config: [`lib/seo.ts`](lib/seo.ts)
- Sitemap: [`app/sitemap.ts`](app/sitemap.ts) — lists `/en` and `/pl` routes, all services, and portfolio cases
- Robots: [`app/robots.ts`](app/robots.ts) — allows crawling; blocks `/api/`
- JSON-LD: Organization and WebSite schemas in [`app/[locale]/layout.tsx`](app/[locale]/layout.tsx)

After deploy, set `NEXT_PUBLIC_SITE_URL` to your production domain and submit `https://your-domain.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).

## Scripts

```bash
npm run dev    # development server
npm run build  # production build
npm run start  # run production build
npm run lint   # ESLint
```

## Project structure

```
app/
  [locale]/          # Localized pages (en, pl)
  api/contact/       # Contact form API
components/
  layout/            # Header, Footer, LanguageSelector, LocalizedLink
messages/
  en/ pl/            # All UI and content translations
data/                # Image assets + slug lists (serviceAssets, portfolioAssets)
lib/i18n/            # Locale config, getDictionary, localized data
lib/seo.ts           # Site metadata and JSON-LD helpers
public/              # Images and global SCSS
```

## Deploy

Deploy on [Vercel](https://vercel.com) or any Node host that supports Next.js 14. Set environment variables in the hosting dashboard before going live.

## License

Private — Charlie Unicorn AI.
