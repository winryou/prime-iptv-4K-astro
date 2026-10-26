// Run with `npm run llms` (builds, then writes into public/ so the files are committed and deploy with any build command).
// Reads the built HTML in dist/ and writes llms.txt (index) and
// llms-full.txt (page text). Titles, descriptions and text come from the real pages, so nothing is invented.
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://primeiptv4k.ca';
const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const PUBLIC = fileURLToPath(new URL('../public/', import.meta.url));

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('index.html') ? [p] : [];
  });

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&nbsp;/g, ' ');

const pages = walk(DIST)
  .map((file) => {
    const html = readFileSync(file, 'utf8');
    if (/<meta name="robots" content="[^"]*noindex/.test(html)) return null;
    const path = '/' + file.slice(DIST.length).replace(/index\.html$/, '');
    const title = decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || path);
    const description = decode((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
    const main = (html.match(/<main[\s\S]*?<\/main>/) || [html])[0]
      .replace(/<(script|style|svg|noscript)[\s\S]*?<\/\1>/g, '')
      .replace(/<\/(p|h[1-6]|li|tr|div|section|ul|ol|table)>/g, '\n')
      .replace(/<br\s*\/?>/g, '\n')
      .replace(/<[^>]+>/g, ' ');
    const text = decode(main)
      .split('\n')
      .map((l) => l.replace(/\s+/g, ' ').trim())
      .filter(Boolean)
      .join('\n');
    return { path, title, description, text };
  })
  .filter(Boolean)
  .sort((a, b) => a.path.localeCompare(b.path));

const groups = [
  ['Canadian cities (English)', (p) => /^\/iptv-[a-z-]+\/$/.test(p) && !p.startsWith('/iptv-subscription-') && !p.startsWith('/iptv-sports') && !p.startsWith('/iptv-channels') && !p.startsWith('/iptv-smarters') && !p.startsWith('/iptv-internet')],
  ['Main pages', (p) => ['/', '/pricing/', '/free-trial/', '/about/', '/reseller/', '/faq/', '/contact/'].includes(p)],
  ['Plans', (p) => p.startsWith('/iptv-subscription-')],
  ['Device setup guides', (p) => p.startsWith('/setup/') || p === '/install-iptv-smarters-pro-firestick/'],
  ['Channels and content', (p) => ['/iptv-channels/', '/iptv-sports-ppv-4k/', '/4k-iptv/'].includes(p)],
  ['Guides', (p) => ['/best-iptv-service-canada/', '/iptv-smarters-pro-subscription/', '/iptv-internet-speed-requirements/'].includes(p)],
  ['Blog', (p) => p.startsWith('/blog/')],
  ['Legal', (p) => ['/privacy/', '/terms/', '/refund/', '/dmca/', '/disclaimer/'].includes(p)],
  ['Help', (p) => p === '/help/'],
  ['Version française (French site)', (p) => p.startsWith('/fr/')],
];

const used = new Set();
let out = `# Prime IPTV

> Prime IPTV is an IPTV subscription service for viewers in Canada and worldwide, with an English site (/) and a French site (/fr/). Plans cover 1 to 4 connections for 3, 6, 12 or 24 months. It works with players that accept Xtream Codes or an M3U link. A 24-hour free trial is available with no credit card.

Key facts (as published on the site):
- Website: ${SITE}/
- Support: 24/7 by WhatsApp (+1 406 235 6618) or email (contactiptv.amelia@gmail.com), in English and French
- Free trial: 24 hours, no credit card, delivered by WhatsApp or email
- Money-back guarantee: 7 days; no contract
- Currency: prices are in Canadian dollars (CAD)
- Languages: English (en-CA) and French (fr-CA); equivalent pages are linked with hreflang
- Prices are listed on ${SITE}/pricing/ only; check that page for current prices.

`;
for (const [name, test] of groups) {
  const list = pages.filter((p) => !used.has(p.path) && test(p.path));
  if (!list.length) continue;
  list.forEach((p) => used.add(p.path));
  out += `## ${name}\n\n` + list.map((p) => `- [${p.title}](${SITE}${p.path})${p.description ? ': ' + p.description : ''}`).join('\n') + '\n\n';
}
const rest = pages.filter((p) => !used.has(p.path));
if (rest.length) out += `## Other\n\n` + rest.map((p) => `- [${p.title}](${SITE}${p.path})`).join('\n') + '\n\n';
out += `## Optional\n\n- [Sitemap](${SITE}/sitemap-index.xml)\n- [Blog RSS feed (English)](${SITE}/rss.xml)
- [Fil RSS du blogue (français)](${SITE}/fr/rss.xml)\n- [Full text of all pages](${SITE}/llms-full.txt)\n`;
writeFileSync(DIST + 'llms.txt', out);
writeFileSync(PUBLIC + 'llms.txt', out);

const full =
  `# Prime IPTV: full site text\n\nSource: ${SITE}/ (text of each public page).\n\n` +
  pages.map((p) => `---\n\n## ${p.title}\nURL: ${SITE}${p.path}\n\n${p.text}\n`).join('\n');
writeFileSync(DIST + 'llms-full.txt', full);
writeFileSync(PUBLIC + 'llms-full.txt', full);

console.log(`[llms] wrote llms.txt (${pages.length} pages) and llms-full.txt (${Math.round(full.length / 1024)} KB)`);
