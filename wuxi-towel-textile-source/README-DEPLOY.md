# Wuxi Towel Textile — Official Website (Source)

English B2B website rebuilt for the independent .com launch. React + Vite SPA,
hash-routed (works on any static host without server rewrite rules).

## Quick start (local)

```bash
npm install
npm run dev        # dev server
npm run build      # production build -> dist/
npm run preview    # preview the built site locally
```

## Deploy to your own .com (static hosting)

1. Register / point your .com domain at any static host or CDN (Cloudflare
   Pages, Vercel, Netlify, S3/OSS + CDN, your own Nginx…).
2. Run `npm run build` and upload the `dist/` folder as the site root.
3. Configure HTTPS and your domain's DNS. No server rewrite is required —
   routing is hash-based (`https://yourdomain.com/#/products`).

Optional: if you prefer clean paths like `/products`, switch `HashRouter` to
`BrowserRouter` in `src/main.jsx` and add an SPA fallback (serve `index.html`
for unknown paths) on your host.

## Everyday edits (no code needed)

| What | Where |
|---|---|
| Prices, MOQs, sold counts, product titles | `src/data/catalog-source.json` (CN¥ values are carried over from your current listings — replace with your USD FOB export price list before going live) |
| Product photos | `public/assets/images/products/<pid>.jpg` — replace with your own Alibaba shop exports to keep them fresh |
| Email / WhatsApp / contact person | `src/site.js` → `CONTACT` |
| Company copy, stats, market split | `src/site.js` |
| Factory / export photos (About page) | `public/assets/images/about-factory.png`, `about-export.png` |
| Brand logo mark | `src/components/ui.jsx` → `Logo()` (recreate your real logo here) |
| Category counts / product list | recomputed automatically from `catalog-source.json` |

The inquiry form opens the visitor's email app with a pre-filled mail to your
sales address — no account or backend needed. Site metrics shown (4.9/5, 98.41%
response) come from your current platform records; keep only what you can
substantiate on the new domain.

## Notes

- Product imagery is re-hosted locally (no third-party CDN hotlinks).
- A few listings returned 404 at export time; their cards show a neutral
  "Photo on request" placeholder — add the photos from your shop when ready.
