# Load & Go Junk Removal Laguna

Marketing site for Load & Go Junk Removal Laguna — Laguna Beach, CA — (714) 410-6226.

React 18 + Vite + CSS Modules + React Router. Hosted on Cloudflare Pages.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

Cloudflare Pages: build command `npm run build`, output directory `dist`.
SPA routing is handled by `public/_redirects`.

## Editing business details

Everything lives in `src/data/business.js`:

- Name, phone, city, hours, site URL
- Service areas (`serviceAreas`)
- Services, How It Works steps, pricing checklist, FAQ
- Before & After job photos (`beforeAfter`, images in `public/images/`)
- Reviews (`reviews`) — section stays hidden until real reviews are added
- `estimateWebhook` — paste a GHL inbound webhook URL to receive estimate form submissions

If the final domain is not `loadandgojunkremovallaguna.com`, also update
`index.html`, `public/robots.txt`, and `public/sitemap.xml`.
