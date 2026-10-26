// Generates one 1200x630 social-share image per indexable page into public/og/<key>.jpg.
// Run after `astro build` (it reads dist/ for each page's H1 and description), then build again so Layout.astro finds the files.
// Key rule (must match src/layouts/Layout.astro): "/" -> home, otherwise the path without slashes, joined by "-".
import { readdirSync, readFileSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const OUT = fileURLToPath(new URL('../public/og/', import.meta.url));
mkdirSync(OUT, { recursive: true });

const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : p.endsWith('index.html') ? [p] : []; });
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&nbsp;/g, ' ');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const strip = (s) => dec(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

const chip = (path, fr) => {
  const rules = fr
    ? [[/^\/fr\/$/, 'Abonnement IPTV Canada'], [/tarifs|abonnement-iptv-\d/, 'Forfaits et tarifs'], [/essai-gratuit/, 'Essai gratuit 24 h'], [/iptv-/, 'Guide IPTV local'], [/blogue/, 'Guide IPTV'], [/installation|installer/, 'Guide d’installation'], [/revendeur/, 'Programme de revendeurs'], [/confidentialite|conditions|remboursement|avertissement|dmca/, 'Légal']]
    : [[/^\/$/, 'IPTV Subscription Canada'], [/pricing|iptv-subscription-/, 'Plans & pricing'], [/free-trial/, 'Free trial, 24 hours'], [/\/iptv-[a-z-]+\/$/, 'Local IPTV guide'], [/blog/, 'IPTV guide'], [/setup|install/, 'Setup guide'], [/reseller/, 'Reseller program'], [/privacy|terms|refund|disclaimer|dmca/, 'Legal']];
  for (const [rx, label] of rules) if (rx.test(path)) return label;
  return fr ? 'Prime IPTV Canada' : 'Prime IPTV Canada';
};
const wrap = (text, max) => {
  const words = text.split(' '); const lines = []; let cur = '';
  for (const w of words) { if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); }
  if (cur) lines.push(cur); return lines;
};
let n = 0;
for (const file of walk(DIST)) {
  const html = readFileSync(file, 'utf8');
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) continue;
  const path = '/' + file.slice(DIST.length).replace(/index\.html$/, '');
  const key = path === '/' ? 'home' : path.replace(/^\/|\/$/g, '').replace(/\//g, '-');
  const fr = path.startsWith('/fr');
  let h1 = strip((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || 'Prime IPTV');
  if (h1.length > 96) h1 = h1.slice(0, 93).replace(/\s+\S*$/, '').replace(/[\s.,;:]+$/, '') + '…';
  const desc = dec((html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  let sub = desc.length > 120 ? desc.slice(0, 117).replace(/\s+\S*$/, '').replace(/[\s.,;:]+$/, '') + '…' : desc;
  const hl = wrap(h1, 30).slice(0, 3); const sl = wrap(sub, 62).slice(0, 2);
  const size = hl.length > 2 ? 58 : 66; const y0 = 250 - (hl.length - 1) * 38;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#06143a"/><stop offset="0.6" stop-color="#0b2a6f"/><stop offset="1" stop-color="#12388f"/></linearGradient></defs>
<rect width="1200" height="630" fill="url(#g)"/><circle cx="1090" cy="70" r="250" fill="#4f7bea" opacity="0.22"/><circle cx="90" cy="640" r="230" fill="#e8352f" opacity="0.26"/>
<g transform="translate(70,58) scale(1.1)"><rect width="64" height="64" rx="16" fill="#fff"/><path d="M19 14h15a13 13 0 0 1 0 26H27v10h-8z" fill="#0b2a6f"/><path d="M27 21v12h7a6 6 0 0 0 0-12z" fill="#fff"/><path d="M31 25l8 4-8 4z" fill="#e8352f"/></g>
<text x="152" y="108" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="800" fill="#fff">Prime <tspan fill="#ff6b64">IPTV</tspan></text>
<rect x="70" y="150" rx="22" ry="22" width="${chip(path, fr).length * 15 + 44}" height="44" fill="#e8352f"/><text x="92" y="180" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="700" fill="#fff">${esc(chip(path, fr))}</text>
${hl.map((l, i) => `<text x="70" y="${y0 + 90 + i * (size + 10)}" font-family="Helvetica, Arial, sans-serif" font-size="${size}" font-weight="800" fill="#fff">${esc(l)}</text>`).join('\n')}
${sl.map((l, i) => `<text x="70" y="${y0 + 90 + hl.length * (size + 10) + 20 + i * 38}" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#cfdcf8">${esc(l)}</text>`).join('\n')}
<text x="70" y="590" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#9db3e0">primeiptv4k.ca${fr ? ' · Version française' : ''}</text>
<text x="1130" y="590" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="700" fill="#fff">${fr ? 'Essai gratuit 24 h' : '24-hour free trial'}</text>
</svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 74, mozjpeg: true }).toFile(join(OUT, key + '.jpg'));
  n++;
}
console.log(`[og] wrote ${n} images to public/og/`);
