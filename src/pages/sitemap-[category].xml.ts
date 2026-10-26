import { categories, entriesFor, urlsetXml } from '../data/sitemap';

export function getStaticPaths() {
  return categories.filter((c) => entriesFor(c.slug).length > 0).map((c) => ({ params: { category: c.slug } }));
}

export function GET({ params }: { params: { category: string } }) {
  return new Response(urlsetXml(entriesFor(params.category)), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
