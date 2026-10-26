import { indexXml, reportMissing } from '../data/sitemap';

export function GET() {
  const xml = indexXml();
  reportMissing();
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
