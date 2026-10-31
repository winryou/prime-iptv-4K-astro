import { enCities as cities } from './cities';
import { devices } from './devices';
import { posts } from './posts';
import { planMonths, planSlug } from './pricing';

export const SITE = 'https://primeiptv4k.ca';

/** English path -> French path. Pages missing from this map have no translation. */
export const routeMap: Record<string, string> = {
  '/': '/fr/',
  '/pricing/': '/fr/tarifs/',
  '/free-trial/': '/fr/essai-gratuit/',
  '/faq/': '/fr/faq/',
  '/contact/': '/fr/contact/',
  '/about/': '/fr/a-propos/',
  '/iptv-channels/': '/fr/chaines/',
  '/iptv-sports-ppv-4k/': '/fr/sports-ppv-4k/',
  '/setup/': '/fr/installation/',
  '/help/': '/fr/aide/',
  '/disclaimer/': '/fr/avertissement/',
  '/refund/': '/fr/remboursement/',
  '/privacy/': '/fr/confidentialite/',
  '/terms/': '/fr/conditions/',
  '/blog/': '/fr/blogue/',
  '/reseller/': '/fr/revendeur/',
  '/dmca/': '/fr/dmca/',
  '/prime-iptv/': '/fr/prime-iptv/',
  '/4k-iptv/': '/fr/iptv-4k/',
  '/iptv-smarters-pro-subscription/': '/fr/abonnement-iptv-smarters-pro/',
  '/install-iptv-smarters-pro-firestick/': '/fr/installer-iptv-smarters-pro-firestick/',
  '/best-iptv-service-canada/': '/fr/meilleur-service-iptv-canada/',
  '/iptv-internet-speed-requirements/': '/fr/vitesse-internet-iptv/',
  ...Object.fromEntries(devices.map((d) => [`/setup/${d.slug}/`, `/fr/installation/${d.slug}/`])),
  ...Object.fromEntries(posts.map((p) => [`/blog/${p.slug}/`, `/fr/blogue/${p.slug}/`])),
  ...Object.fromEntries(planMonths.map((m) => [`/${planSlug(m)}/`, `/fr/abonnement-iptv-${m}-mois/`])),
  ...Object.fromEntries(cities.map((c) => [`/iptv-${c.slug}/`, `/fr/iptv-${c.slug}/`])),
};

export const isFr = (path: string) => path === '/fr' || path.startsWith('/fr/');

const reverse = Object.fromEntries(Object.entries(routeMap).map(([en, fr]) => [fr, en]));

/** The same page in the other language, or null when there is no translation. */
export function altPath(path: string): string | null {
  return isFr(path) ? reverse[path] ?? null : routeMap[path] ?? null;
}

export const ui = {
  en: {
    nav: [['Home', '/'], ['Pricing', '/pricing/'], ['Setup Guide', '/setup/'], ['Reseller', '/reseller/'], ['Blog', '/blog/'], ['Contact', '/contact/']],
    trial: 'Start Free Trial',
    switchLabel: 'FR',
    switchTitle: 'Voir ce site en français',
    home: '/',
  },
  fr: {
    nav: [['Accueil', '/fr/'], ['Tarifs', '/fr/tarifs/'], ['Installation', '/fr/installation/'], ['Revendeur', '/fr/revendeur/'], ['Blogue', '/fr/blogue/'], ['Contact', '/fr/contact/']],
    trial: 'Essai gratuit',
    switchLabel: 'EN',
    switchTitle: 'View this site in English',
    home: '/fr/',
  },
} as const;
