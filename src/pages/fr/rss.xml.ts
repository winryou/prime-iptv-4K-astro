import { posts } from '../../data/posts';
import { postsFr } from '../../data/posts-fr';
import { SITE } from '../../data/sitemap';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const items = [...posts]
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .map((p) => {
      const fr = postsFr[p.slug];
      const link = `${SITE}/fr/blogue/${p.slug}/`;
      return `    <item>
      <title>${esc(fr.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(`${p.datePublished}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${esc(fr.description)}</description>
    </item>`;
    })
    .join('\n');

  const newest = posts.map((p) => p.dateModified).sort().at(-1) as string;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Prime IPTV Blogue</title>
    <link>${SITE}/fr/blogue/</link>
    <description>Guides IPTV pour les spectateurs au Canada : fonctionnement de l’IPTV, lecteurs, installation, essai gratuit et dépannage.</description>
    <language>fr-ca</language>
    <lastBuildDate>${new Date(`${newest}T00:00:00Z`).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE}/fr/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
