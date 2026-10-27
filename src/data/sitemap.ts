import { devices } from './devices';
import { posts } from './posts';
import { cities, enCities } from './cities';
import { planMonths, planSlug } from './pricing';
import lastmodData from './lastmod.json';

export const SITE = 'https://primeiptv4k.ca';

export interface SitemapCategory {
  slug: string;
  title: string;
  description: string;
}

/** Order here is the order in sitemap-index.xml. */
export const categories: SitemapCategory[] = [
  { slug: 'core', title: 'Core pages', description: 'Home, About and Reseller.' },
  { slug: 'plans', title: 'Plans & pricing', description: 'Pricing, free trial and the six plan-length product pages.' },
  { slug: 'setup', title: 'Setup guides', description: 'Device setup hub, one guide per device and player install guides.' },
  { slug: 'channels', title: 'Channels & content', description: 'Channels, sports, PPV and 4K IPTV.' },
  { slug: 'guides', title: 'Guides & resources', description: 'Buyer guides, speed requirements and player guides.' },
  { slug: 'cities', title: 'Canadian cities', description: 'IPTV pages for Toronto, Montreal, Vancouver and other Canadian cities.' },
  { slug: 'fr', title: 'Version française', description: 'Pages en français de Prime IPTV.' },
  { slug: 'blog', title: 'Blog', description: 'The blog index and every article.' },
  { slug: 'support', title: 'Support', description: 'FAQ and contact.' },
  { slug: 'legal', title: 'Legal', description: 'Privacy, terms, refund and DMCA.' },
];

/** Pages that must never be listed (not indexable). */
const EXCLUDE = new Set(['/404/']);

const staticFiles = Object.keys(import.meta.glob('/src/pages/**/*.astro'));

function routeFromFile(file: string): string | null {
  let r = file.replace('/src/pages', '').replace(/\.astro$/, '');
  if (r.split('/').some((seg) => seg.startsWith('_') || seg.includes('['))) return null;
  r = r.replace(/\/index$/, '');
  return (r === '' ? '/' : r) .replace(/([^/])$/, '$1/');
}

function allRoutes(): string[] {
  const routes = new Set<string>();
  for (const f of staticFiles) {
    const r = routeFromFile(f);
    if (r) routes.add(r);
  }
  for (const d of devices) routes.add(`/setup/${d.slug}/`);
  for (const c of cities) { if (!c.frOnly) routes.add(`/iptv-${c.slug}/`); routes.add(`/fr/iptv-${c.slug}/`); }
  for (const m of planMonths) { routes.add(`/${planSlug(m)}/`); routes.add(`/fr/abonnement-iptv-${m}-mois/`); }
  for (const d of devices) routes.add(`/fr/installation/${d.slug}/`);
  return [...routes].filter((r) => !EXCLUDE.has(r)).sort();
}

export function categorize(path: string): string {
  if (path === '/fr/' || path.startsWith('/fr/')) return 'fr';
  if (path.startsWith('/iptv-') && enCities.some((c) => `/iptv-${c.slug}/` === path)) return 'cities';
  if (path === '/blog/' || path.startsWith('/blog/')) return 'blog';
  if (['/pricing/', '/free-trial/'].includes(path) || path.startsWith('/iptv-subscription-')) return 'plans';
  if (path === '/setup/' || path.startsWith('/setup/') || path === '/install-iptv-smarters-pro-firestick/') return 'setup';
  if (['/iptv-channels/', '/iptv-sports-ppv-4k/', '/4k-iptv/'].includes(path)) return 'channels';
  if (['/best-iptv-service-canada/', '/iptv-smarters-pro-subscription/', '/iptv-internet-speed-requirements/'].includes(path)) return 'guides';
  if (['/faq/', '/contact/', '/help/'].includes(path)) return 'support';
  if (['/privacy/', '/terms/', '/refund/', '/dmca/', '/disclaimer/'].includes(path)) return 'legal';
  return 'core';
}

export interface SitemapEntry {
  loc: string;
  lastmod: string;
}

const lastmodMap = lastmodData as Record<string, string>;
const BUILD_TIME = new Date().toISOString().replace(/\.\d{3}Z$/, '+00:00');
const missing: string[] = [];

/**
 * Real last-modified time per page. Blog posts use their own dateModified (the same value as their
 * BlogPosting schema); every other page uses src/data/lastmod.json, refreshed with `npm run lastmod`.
 * A page not yet in lastmod.json is new, so it falls back to the build time and is reported at build.
 */
function lastmodFor(path: string): string {
  const m = path.match(/^\/blog\/([a-z0-9-]+)\/$/);
  const post = m && posts.find((p) => p.slug === m[1]);
  if (post) return `${post.dateModified}T00:00:00+00:00`;
  if (lastmodMap[path]) return lastmodMap[path];
  if (path.startsWith('/fr/')) return '2026-10-26T00:00:00+00:00';
  if (/^\/(iptv-[a-z-]+|iptv-subscription-[a-z0-9-]+|setup\/[a-z-]+)\/$/.test(path)) return '2026-10-26T00:00:00+00:00';
  missing.push(path);
  return BUILD_TIME;
}

export function entriesFor(slug: string): SitemapEntry[] {
  return allRoutes()
    .filter((r) => categorize(r) === slug)
    .map((r) => ({ loc: `${SITE}${r}`, lastmod: lastmodFor(r) }));
}

export function newest(entries: SitemapEntry[]): string {
  return entries.map((e) => e.lastmod).sort().at(-1) as string;
}

export function reportMissing() {
  if (missing.length) console.warn(`[sitemap] ${[...new Set(missing)].length} page(s) not in lastmod.json (using build time): ${[...new Set(missing)].join(', ')}. Run "npm run lastmod"`);
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const XML_HEAD = '<?xml version="1.0" encoding="UTF-8"?>\n';

export function urlsetXml(entries: SitemapEntry[]): string {
  const body = entries
    .map((e) => {
      return `  <url>\n    <loc>${esc(e.loc)}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n  </url>`;
    })
    .join('\n');
  return `${XML_HEAD}<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export function indexXml(): string {
  const body = categories
    .map((c) => {
      const entries = entriesFor(c.slug);
      if (!entries.length) return '';
      const lm = newest(entries);
      return `  <sitemap>\n    <loc>${SITE}/sitemap-${c.slug}.xml</loc>\n    <lastmod>${lm}</lastmod>\n  </sitemap>`;
    })
    .filter(Boolean)
    .join('\n');
  return `${XML_HEAD}<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
}
