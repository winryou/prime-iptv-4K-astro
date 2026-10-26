# Prime IPTV — primeiptv4k.ca

Astro static site (Tailwind v4), hosted on **Cloudflare**.

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the build locally |
| `npm run llms` | Regenerate `public/llms.txt` and `llms-full.txt` (run after content changes, then commit) |
| `npm run lastmod` | Refresh sitemap `lastmod` dates (run locally before deploying) |

## Deploying on Cloudflare

Build settings (Workers & Pages, connected to the GitHub repo):

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`

Run `npm run lastmod` locally and commit `src/data/lastmod.json` before pushing. Build servers reset file times, so it must not run in the hosted build.

Cloudflare reads these files from `public/` (copied into `dist/`):

- `_redirects`: 301s, including `/sitemap.xml` to `/sitemap-index.xml`
- `_headers`: security headers and long-term caching for `/_astro/*`

## Sitemap

`/sitemap-index.xml` lists eight category sitemaps (`/sitemap-core.xml`, `-plans`, `-setup`, `-channels`, `-guides`, `-blog`, `-support`, `-legal`), generated from the real routes in `src/data/sitemap.ts`.
