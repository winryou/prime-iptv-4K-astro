// Embeds copyright/credit/creator metadata (EXIF + XMP) in every raster image in public/, and an XMP-style block in SVGs.
// Run standalone (`npm run stamp`) or import { stampFile } from build-og.mjs. Edit OWNER/SITE to change the license text.
import { readdirSync, readFileSync, writeFileSync, statSync, renameSync } from 'node:fs';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

export const OWNER = 'Prime IPTV';
export const SITE = 'primeiptv4k.ca';
export const YEAR = 2026;
export const RIGHTS = `© ${YEAR} ${OWNER} (${SITE}). All rights reserved.`;

const xmp = `<?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
<rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/" xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/" xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" photoshop:Credit="${OWNER}" xmpRights:Marked="True" xmpRights:WebStatement="https://${SITE}/">
<dc:rights><rdf:Alt><rdf:li xml:lang="x-default">${RIGHTS}</rdf:li></rdf:Alt></dc:rights>
<dc:creator><rdf:Seq><rdf:li>${OWNER}</rdf:li></rdf:Seq></dc:creator>
<xmpRights:UsageTerms><rdf:Alt><rdf:li xml:lang="x-default">${RIGHTS}</rdf:li></rdf:Alt></xmpRights:UsageTerms>
<Iptc4xmpCore:CreatorContactInfo Iptc4xmpCore:CiUrlWork="https://${SITE}/"/>
</rdf:Description></rdf:RDF></x:xmpmeta><?xpacket end="w"?>`;

export const stampFile = async (path) => {
  const ext = extname(path).toLowerCase();
  if (ext === '.svg') {
    let s = readFileSync(path, 'utf8');
    if (s.includes('<metadata')) return;
    s = s.replace(/(<svg[^>]*>)/, `$1<metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description><dc:rights>${RIGHTS}</dc:rights><dc:creator>${OWNER}</dc:creator><dc:publisher>${OWNER}</dc:publisher></rdf:Description></rdf:RDF></metadata>`);
    writeFileSync(path, s); return;
  }
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;
  const tmp = path + '.tmp';
  let img = sharp(path).withExif({ IFD0: { Copyright: RIGHTS, Artist: OWNER, ImageDescription: `Credit: ${OWNER}` } }).withXmp(xmp);
  img = ext === '.png' ? img.png() : ext === '.webp' ? img.webp({ quality: 80 }) : img.jpeg({ quality: 90, mozjpeg: true });
  await img.toFile(tmp);
  renameSync(tmp, path);
};

const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const files = walk(fileURLToPath(new URL('../public/', import.meta.url)));
  let n = 0; for (const f of files) { await stampFile(f); n++; }
  console.log(`[stamp] processed ${n} files`);
}
