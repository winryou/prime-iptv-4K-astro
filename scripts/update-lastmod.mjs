// Records each page's real last-modified time (source file + the data/components it imports)
// into src/data/lastmod.json. Run locally before committing/deploying:  npm run lastmod
// (Deploy hosts reset file times on checkout, so this must NOT run during the hosted build.)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = path.join(root, 'src');
const IGNORE = ['components/Header.astro', 'components/Footer.astro', 'layouts/Layout.astro', 'components/Icon.astro'];

const mtime = (f) => fs.statSync(f).mtimeMs;
function resolveImport(from, spec) {
  const base = path.resolve(path.dirname(from), spec);
  for (const ext of ['', '.ts', '.astro', '.json']) if (fs.existsSync(base + ext) && fs.statSync(base + ext).isFile()) return base + ext;
  return null;
}
function newestWithDeps(file, seen = new Set()) {
  if (seen.has(file)) return 0;
  seen.add(file);
  let newest = mtime(file);
  const text = fs.readFileSync(file, 'utf8');
  for (const m of text.matchAll(/from\s+'(\.\.?\/[^']+)'/g)) {
    const dep = resolveImport(file, m[1]);
    if (!dep) continue;
    const rel = path.relative(src, dep).replaceAll(path.sep, '/');
    if (IGNORE.includes(rel)) continue;
    newest = Math.max(newest, newestWithDeps(dep, seen));
  }
  return newest;
}
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}
const iso = (ms) => new Date(ms).toISOString().replace(/\.\d{3}Z$/, '+00:00');

const out = {};
for (const f of walk(path.join(src, 'pages'))) {
  if (!f.endsWith('.astro')) continue;
  const rel = path.relative(path.join(src, 'pages'), f).replaceAll(path.sep, '/');
  if (rel.split('/').some((s) => s.startsWith('_') || s.includes('[')) || rel === '404.astro') continue;
  let route = '/' + rel.replace(/\.astro$/, '').replace(/index$/, '');
  if (!route.endsWith('/')) route += '/';
  out[route] = iso(newestWithDeps(f));
}
// dynamic routes
const devicesText = fs.readFileSync(path.join(src, 'data/devices.ts'), 'utf8');
const devFile = path.join(src, 'pages/setup/[device].astro');
const devNewest = iso(Math.max(newestWithDeps(devFile), mtime(path.join(src, 'data/devices.ts'))));
for (const m of devicesText.matchAll(/^\s{4}slug: '([a-z0-9-]+)'/gm)) out[`/setup/${m[1]}/`] = devNewest;
const pricingText = fs.readFileSync(path.join(src, 'data/pricing.ts'), 'utf8');
const months = pricingText.match(/planMonths = \[([^\]]+)\]/)[1].split(',').map((x) => x.trim());
const planNewest = iso(newestWithDeps(path.join(src, 'components/PlanPage.astro')));
for (const m of months) out[`/iptv-subscription-${m}-${m === '1' ? 'month' : 'months'}/`] = planNewest;

const sorted = Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(path.join(src, 'data/lastmod.json'), JSON.stringify(sorted, null, 2) + '\n');
console.log(`lastmod.json updated for ${Object.keys(sorted).length} pages`);
