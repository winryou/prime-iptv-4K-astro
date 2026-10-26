# Prime IPTV (primeiptv4k.ca): pre-launch SEO checklist

Status as of 2026-10-26. Built site: 134 HTML files (66 EN, 67 FR incl. a French-only Côte-Nord page, 404 page). Verified against the built files in `dist/`, not against a live site.

## A. Done and verified in the build files

- [x] One title, one meta description (<=160 chars), one H1 per page; no duplicate titles/descriptions across 132 indexable pages.
- [x] Heading order has no skipped levels (footer headings are H2).
- [x] Canonical on every page = its own absolute URL; trailing-slash format everywhere.
- [x] hreflang en-CA / fr-CA / x-default on every EN/FR pair; all targets exist; every pair is reciprocal and self-referencing.
- [x] `<html lang>` is en-CA or fr-CA to match the URL; og:locale matches.
- [x] sitemap-index.xml lists 10 child sitemaps; every URL in them exists in the build; no duplicates; every indexable page is listed; lastmod values are ISO dates.
- [x] robots.txt allows crawling and lists all sitemaps (incl. cities and fr).
- [x] _redirects: targets exist; no internal link points to a redirected URL.
- [x] No orphan pages (every page has at least one in-body link, not counting header/footer).
- [x] JSON-LD parses on every page: Organization + WebSite (home EN/FR), BreadcrumbList (all), FAQPage (58), Product (9), Service (28 city pages), HowTo (18 device pages), BlogPosting (30).
- [x] No images without alt text (site uses inline SVG icons; og.jpg is the only raster image).
- [x] og:image exists (1200x630), twitter card set.
- [x] Mobile viewport meta; CSS inlined; no render-blocking external CSS/JS.
- [x] Keyword map for every page: docs/seo-keyword-map-en.md and docs/seo-keyword-map-fr.md.

## B. Needs YOUR input before launch (content accuracy, affects trust and SEO)

- [ ] Replace placeholder business facts if they are not yours: phone +1 (406) 235-6618, Florida address, contactiptv.amelia@gmail.com (also in Organization schema, footer, contact, DMCA, FAQ).
- [ ] Confirm 25,000+ channels / 120,000+ movies figures are true for Prime IPTV.
- [ ] Confirm the free bonus months (+1 on 6 and 12 months, +2 on 24 months); iptvt.ca lists none.
- [ ] Reseller page credit-pack prices show "$" with no currency; confirm CAD.
- [ ] Have a native French speaker review all /fr/ pages (legal pages especially).
- [ ] Legal review of terms, privacy, refund, disclaimer.

## C. Must be tested once the site is public (cannot be done now)

1. Deploy, then confirm HTTP status and final URLs:
   - `curl -sI https://primeiptv4k.ca/sitemap.xml` -> 301 to /sitemap-index.xml
   - `/abonnement-iptv-canada` -> 301 to /fr/
   - `www` -> 301 to non-www; http -> https
   - a made-up URL returns the custom 404 page with status 404
2. Fetch robots.txt and each sitemap from the live domain (HTTP 200, correct content type).
3. Google Search Console: add Domain property (DNS TXT), submit `sitemap-index.xml`, URL Inspection on home, /fr/, /iptv-quebec/, /fr/iptv-quebec/, /pricing/, /free-trial/, /fr/tarifs/, /fr/essai-gratuit/, then request indexing.
4. Search Console > Pages: look for "Crawled, currently not indexed", "Duplicate without user-selected canonical", "Alternate page with proper canonical" and fix per page.
5. Search Console > International targeting is retired; instead check that hreflang pairs show no errors in URL Inspection.
6. Rich Results Test on: home (Organization/FAQ), /pricing/ (Product + FAQ), a city page (Service + FAQ), a blog post (BlogPosting), a device page (HowTo). Note: Google has limited FAQ rich results to a few site types; they may not display, this is normal.
7. PageSpeed Insights (mobile) on home, /pricing/, a city page, a blog post; target LCP < 2.5 s, CLS < 0.1, INP < 200 ms. Fix only what the live test shows.
8. Check Cloudflare caching headers from `_headers` apply (cache-control on assets, security headers).
9. Semrush: run a Site Audit on the live domain; add the project to Position Tracking with the keywords in docs/seo-keyword-map-en.md and docs/seo-keyword-map-fr.md (country Canada, both languages); set up Backlink Audit.
10. Bing Webmaster Tools: import from Search Console, submit sitemap.
11. After 2 to 4 weeks, review Search Console Performance by query and page, then adjust titles for pages with impressions but low CTR, and expand pages that rank 8 to 20.

## D. Off-page (ethical only)

- Add the site to legitimate Canadian business directories and your social profiles once real accounts exist.
- Publish helpful, original how-to content that other sites may cite (setup guides, the cost guide).
- Do not buy links or use link networks. Competitors' backlink profiles in this niche are mostly unrelated low-quality sites; copying them is risky.

## E. Known limits

- No Google Search Console data, no live crawl, no indexing verification, no position data (site not live).
- Rankings are not guaranteed. New sites usually need weeks to months, and the "prime iptv" results are crowded by apps with the same name and look-alike sites.
