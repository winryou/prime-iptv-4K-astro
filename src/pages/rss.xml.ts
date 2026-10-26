import { posts } from '../data/posts';
import { SITE } from '../data/sitemap';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const items = [...posts]
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .map((p) => {
      const link = `${SITE}/blog/${p.slug}/`;
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(`${p.datePublished}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
    </item>`;
    })
    .join('\n');

  const newest = posts.map((p) => p.dateModified).sort().at(-1) as string;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Prime IPTV Blog</title>
    <link>${SITE}/blog/</link>
    <description>IPTV guides for Canada viewers: how IPTV works, player apps, device setup, free-trial testing and troubleshooting.</description>
    <language>en-ca</language>
    <lastBuildDate>${new Date(`${newest}T00:00:00Z`).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
