# Technical SEO audit (pre-launch), 2026-10-26

Method: inspected the Astro source, `public/` files, `astro.config.mjs`, `_headers`, `_redirects`, and the built output in `dist/` (134 HTML files). Nothing was tested against a live domain. Rebuild everything with `npm run seo:assets` (build, share images, llms files, final build).

| SEO item | Status | Evidence / method | Change made | Remaining action |
|---|---|---|---|---|
| robots.txt | Passed | Allows all crawlers incl. Googlebot, Bingbot; lists 10 sitemap URLs that all exist in dist | none | Fetch live file after deploy |
| XML sitemap + index | Passed | Index + 10 children; 133 URLs = every indexable page; none are redirects/404/noindex; ISO lastmod | none | Submit sitemap-index.xml in GSC and Bing |
| Sitemap hreflang | Fixed | Sitemaps had none | Added xhtml:link en-CA/fr-CA/x-default for every EN/FR pair, generated from the same map as the HTML tags; FR-only Côte-Nord page has none | none |
| Canonical URLs | Passed | 133/133 self-referencing absolute, trailing slash | none | none |
| Meta robots / indexability | Passed | Only 404.html has noindex; no page blocked | none | none |
| Staging / preview protection | Fixed | pages.dev preview hosts would duplicate the site | `_headers`: X-Robots-Tag noindex,nofollow for `https://:project.pages.dev/*` | Confirm header on the preview URL after first deploy |
| Production indexable at launch | Passed | No noindex, no Disallow, canonicals = production domain | none | Re-check live |
| Redirects | Passed | `_redirects`: single-hop 301s, all targets exist, no internal link points at a redirected URL | none | Test live (Cloudflare Pages behaviour) |
| Preferred host, http->https, www | Blocked | Not configurable in source | none | Cloudflare: redirect www to apex, Always HTTPS |
| Trailing slash / URL normalization | Passed | `trailingSlash: 'always'`; all internal links, canonicals, sitemaps use slashes | none | Verify `/pricing` -> `/pricing/` live |
| Duplicate content / metadata | Passed | 0 duplicate titles/descriptions; titles <=66, descriptions <=160 | none | none |
| Orphan pages / internal links | Passed | 0 orphans (body links), 0 broken | none | none |
| RSS | Fixed | EN feed only, `en-us`, FR pages linked to the EN feed | EN feed `en-ca`; new `/fr/rss.xml` (15 items, fr-ca); discovery link per language | none |
| llms.txt | Fixed | Contained stale email and English-only grouping | Regenerated: correct contact, CAD note, languages, cities group, French section, both feeds | Not a ranking factor; optional |
| AI crawler rules in robots.txt | Passed | GPTBot, ClaudeBot, Perplexity, Google-Extended etc. explicitly allowed; Googlebot untouched | none | Remove entries if you decide to block AI crawlers |
| Open Graph / Twitter tags | Passed | All required og:* and twitter:* present on every page; og:url = canonical | none | Test in Facebook Sharing Debugger / X after deploy |
| Per-page share images | Fixed | One generic og.jpg on all pages | `scripts/build-og.mjs` makes 133 unique 1200x630 JPEGs (max 47 KB) from each page's H1/description, EN and FR; Layout picks `/og/<page>.jpg`; Product/BlogPosting schema images use them | Regenerate with `npm run seo:assets` after changing titles |
| og:image:alt | Fixed | Was a fixed string | Now the page title | none |
| Image SEO (content images) | Not Applicable | No content images; icons are inline SVG | none | Add alt/dimensions/lazy-loading when photos are added |
| Structured data | Fixed | 133 pages parse; Organization, WebSite (home), BreadcrumbList, FAQPage, Product, Service, HowTo, BlogPosting | City Service schema pointed to an organization not on the page: now inline provider | Validate in Google Rich Results Test live; FAQ rich results are restricted by Google and may not show |
| Fabricated data in schema | Passed | No ratings/reviews/awards; prices from pricing.ts in CAD | none | Confirm phone/address in Organization are yours |
| hreflang / language | Passed | 130 pairs reciprocal and self-referencing, html lang en-CA/fr-CA, no auto language redirect, FR-only page has none | none | none |
| Language switcher | Passed | Links to the exact twin, or the other home if none | none | none |
| HTML structure | Passed | 134/134 balanced tags, doctype, charset, viewport, 0 duplicate ids | none | Run W3C validator on live URLs (external validator download was blocked here) |
| Headings | Passed | One H1, no skipped levels on any page | none | none |
| Links safety | Passed | All target=_blank have rel=noopener; 0 empty anchors; 0 http:// resources | none | none |
| Custom 404 | Passed | 404.html exists with noindex | none | Confirm HTTP 404 status live |
| Security headers | Fixed | Had nosniff, referrer, frame, permissions | Added HSTS (1 year, no preload); cache rules for /og/ and XML | Add CSP only after testing (inline scripts/styles present) |
| Rendering / JS | Passed | Static HTML; <=2 small inline scripts per page; content not JS-dependent | none | none |
| Performance (static review) | Passed | CSS inlined (avg 19 KB, max 32 KB), no external CSS/JS/fonts (system fonts), no images above the fold, HTML avg 49 KB (max 187 KB home) | none | LCP/INP/CLS NOT measured: test with PageSpeed/CrUX after deploy |
| Compression / caching | Blocked | Cloudflare compresses at the edge; `_headers` sets cache rules | none | Verify br/gzip and cache headers live |
| Analytics / consent | Not Applicable | No analytics or cookies in source | none | If you add analytics, update privacy policy and consent as needed |
| GSC / Bing readiness | Passed | Sitemap URL ready, robots allows both bots | none | Verify domain, submit sitemap |
| Mobile responsiveness | Passed | Viewport meta, responsive CSS; previewed at 375-1280 px | none | Test on real devices |
