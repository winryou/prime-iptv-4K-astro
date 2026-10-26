export const durations = [3, 6, 12, 24] as const;

export const bonusMonths: Record<number, number> = { 3: 0, 6: 1, 12: 1, 24: 2 };

// Prices are in CAD and are the owner's published prices (same as iptvt.ca). Plans for more than 4 devices are quoted on WhatsApp or by email.
export const prices: Record<number, Record<number, number>> = {
  1: { 3: 34.99, 6: 49.99, 12: 79.99, 24: 124.99 },
  2: { 3: 54.99, 6: 79.99, 12: 129.99, 24: 199.99 },
  3: { 3: 74.99, 6: 109.99, 12: 179.99, 24: 274.99 },
  4: { 3: 94.99, 6: 139.99, 12: 229.99, 24: 349.99 },
};

export const planNames: Record<number, string> = { 3: 'Starter', 6: 'Standard', 12: 'Popular', 24: 'Premium' };

export const features = [
  '25,000+ Live Channels',
  '120,000+ Movies & Series',
  'SD / HD / FHD / 4K',
  'EPG',
  'Sports & PPV',
  '24/7 Support',
];

export const connectionTabs = [1, 2, 3, 4];

export function buildPlans(connections: number) {
  const base = prices[connections][3] / 3;
  return durations.map((months) => {
    const price = prices[connections][months];
    const perMonth = price / months;
    const savePct = months === 3 ? 0 : Math.round((1 - perMonth / base) * 100);
    return {
      months,
      name: planNames[months],
      price: price.toFixed(2),
      perMonth: perMonth.toFixed(2),
      bonus: bonusMonths[months],
      savePct,
      popular: months === 12,
      bestValue: months === 24,
    };
  });
}

export const planMonths = [1, 2, 3, 6, 12, 24] as const;
export const isPriced = (months: number) => (durations as readonly number[]).includes(months);
export const planSlug = (months: number) => `iptv-subscription-${months}-${months === 1 ? 'month' : 'months'}`;
export const planUrl = (months: number) => `/${planSlug(months)}/`;
export const planLabel = (months: number) => `${months} ${months === 1 ? 'Month' : 'Months'}`;
export const bonusFor = (months: number) => bonusMonths[months] ?? 0;
