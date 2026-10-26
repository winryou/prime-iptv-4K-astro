import { prices, bonusFor } from './pricing';

export interface PlanCopy {
  title: string;
  description: string;
  h1: string;
  intro: string;
  fit: { title: string; text: string }[];
  watchOut: string[];
  scenario: string;
  faqs: [string, string][];
}

const p1 = (m: number) => prices[1][m]?.toFixed(2);

export const planCopy: Record<number, PlanCopy> = {
  1: {
    title: '1 Month IPTV Subscription | Prime IPTV',
    description: 'Order a 1-month Prime IPTV subscription: 25,000+ live channels, 120,000+ movies & series, 4K. Free 24-hour trial, no credit card. Order on WhatsApp.',
    h1: 'IPTV 1 Month Subscription',
    intro: 'A 1-month plan is the shortest way to use Prime IPTV: the full lineup of 25,000+ live channels and 120,000+ movies and series, with no long commitment. Message us on WhatsApp for today’s 1-month price, or start the 24-hour free trial first.',
    fit: [
      { title: 'You liked the free trial and want more time', text: 'If the 24-hour trial won you over but you want a bit longer on your own device before choosing a longer plan, one month is a low-commitment next step.' },
      { title: 'Seasonal or short-term viewing', text: 'Following one sports season, catching an event or needing TV for a short stay are all good reasons to keep the commitment short.' },
      { title: 'Settling in on a new device', text: 'If you have just set up a Firestick, Smart TV or MAG box, a month lets you get comfortable with the player, the TV guide and your channels.' },
    ],
    watchOut: [
      'Shorter plans mean you renew more often. Longer plans (3 to 24 months) lower the cost per month, so compare the prices listed further down this page.',
      'The free bonus months apply to 6, 12 and 24-month plans, not to short plans.',
    ],
    scenario: 'Imagine you want to follow a sports season on a single TV. You request the 24-hour trial, check your channels and a live game, and then take a 1-month plan while you decide whether a longer plan makes sense.',
    faqs: [
      ['How much is a 1-month IPTV subscription?', 'Message us on WhatsApp for the current 1-month price and we will send you the payment details. The 3, 6, 12 and 24-month plans have published prices on this site.'],
      ['Is a 1-month plan better than the free trial?', 'The free trial lasts 24 hours and needs no credit card. A 1-month plan gives you a full month of viewing, which helps if you want to watch regularly before choosing a longer plan.'],
      ['Which plan length costs the least per month?', 'Longer plans cost less per month. Among the published plans, 24-month plans have the lowest monthly cost, followed by 12-month and 6-month plans.'],
    ],
  },
  2: {
    title: '2 Month IPTV Subscription | Prime IPTV',
    description: 'Order a 2-month Prime IPTV subscription: 25,000+ live channels, 120,000+ movies & series, 4K and sports. Free 24-hour trial, no card. Order on WhatsApp.',
    h1: 'IPTV 2 Months Subscription',
    intro: 'A 2-month plan gives you two full months of Prime IPTV, with 25,000+ live channels, 120,000+ movies and series, sports and PPV, and no need to commit to half a year or more. Message us on WhatsApp for today’s 2-month price, or try the 24-hour free trial first.',
    fit: [
      { title: 'A short season or a couple of months of events', text: 'Two months covers a stretch of a season or a run of events without paying for a long plan.' },
      { title: 'Seasonal households and temporary stays', text: 'If you are staying somewhere for a couple of months, a 2-month plan matches the time you need.' },
      { title: 'A step up from a single month', text: 'If one month feels too short but a quarter feels too long, two months sits in between.' },
    ],
    watchOut: [
      'Longer plans lower the cost per month. If you expect to keep watching, compare the 3, 6, 12 and 24-month prices below.',
      'The free bonus months apply to 6, 12 and 24-month plans, not to short plans.',
    ],
    scenario: 'Say you are travelling or staying somewhere for two months and want your usual lineup on the TV there. A 2-month plan matches that period, and you can set it up on the device you already have using our step-by-step guides.',
    faqs: [
      ['How much is a 2-month IPTV subscription?', 'Message us on WhatsApp for the current 2-month price and we will send you the payment details. The 3, 6, 12 and 24-month plans have published prices on this site.'],
      ['Should I choose 2 months or 3 months?', 'Choose the length that matches how long you expect to watch. The 3-month plan is the shortest published plan and is shown with its price below, so you can compare.'],
      ['Can I try Prime IPTV before ordering a 2-month plan?', 'Yes. Request the 24-hour free trial (no credit card) and test your channels and a live event on your own device first.'],
    ],
  },
  3: {
    title: '3 Month IPTV Subscription from $34.99 | Prime IPTV',
    description: 'Prime IPTV 3-month subscription from $34.99: 25,000+ live channels, 120,000+ movies & series, 4K, 1 to 4 connections. Free trial. Order on WhatsApp.',
    h1: 'IPTV 3 Months Subscription',
    intro: `The 3-month plan is the shortest published Prime IPTV plan and a popular way to start: from $${p1(3)} for 1 connection, with 2, 3 and 4-connection options. You get 25,000+ live channels, 120,000+ movies and series, EPG, sports and PPV in SD to 4K.`,
    fit: [
      { title: 'First-time IPTV subscribers', text: 'Three months is enough time to settle in, learn your player and see how IPTV fits your viewing, without a long commitment.' },
      { title: 'A season or a quarter of viewing', text: 'It covers a good stretch of a sports season or a few months of series and movies.' },
      { title: 'Households testing multiple connections', text: 'You can try 2, 3 or 4 connections for a quarter and see how many screens you really use.' },
    ],
    watchOut: [
      'The 3-month plan has the highest cost per month of the published plans. If you are sure you will keep watching, 6, 12 and 24-month plans cost less per month.',
      'The free bonus months start at 6-month plans, so the 3-month plan has none.',
    ],
    scenario: `A common path is to request the 24-hour trial, install your player and then order a 3-month plan. If you stay, you can move to a 6, 12 or 24-month plan for a lower monthly cost. For 1 connection, 12 months works out to about $${(prices[1][12] / 12).toFixed(2)} a month, versus about $${(prices[1][3] / 3).toFixed(2)} on the 3-month plan.`,
    faqs: [
      ['How much is the Prime IPTV 3-month plan?', `The 3-month plan costs $${p1(3)} for 1 connection, $${prices[2][3].toFixed(2)} for 2 connections, $${prices[3][3].toFixed(2)} for 3 connections and $${prices[4][3].toFixed(2)} for 4 connections.`],
      ['Does the 3-month plan include free months?', 'No. The +1 month free offer applies to 6 and 12-month plans, and +2 months free to 24-month plans.'],
      ['Is the 3-month plan a good first plan?', 'Yes, it is the shortest published plan and a common first choice. Start with the free trial to check your channels and device before ordering.'],
    ],
  },
  6: {
    title: '6 Month IPTV Subscription from $49.99 | Prime IPTV',
    description: 'Prime IPTV 6-month subscription from $49.99 with +1 month free: 25,000+ live channels, 120,000+ movies & series, 4K. Free trial. Order on WhatsApp.',
    h1: 'IPTV 6 Months Subscription',
    intro: `The 6-month plan includes +1 month free, so you get 7 months of Prime IPTV: from $${p1(6)} for 1 connection, with 2, 3 and 4-connection options. It lowers your monthly cost compared with the 3-month plan while keeping the commitment moderate.`,
    fit: [
      { title: 'Viewers who know they will keep watching', text: 'If the trial and your first weeks went well, six months removes the need to renew every quarter.' },
      { title: 'A full season and a bit more', text: 'Seven months of service covers a long stretch of a sports season plus the lead-in or off-season.' },
      { title: 'A step toward the longer plans', text: 'It is a middle path: a lower monthly cost than 3 months without the upfront cost of a 12 or 24-month plan.' },
    ],
    watchOut: [
      'The monthly cost is lower than the 3-month plan but higher than 12 and 24-month plans.',
      'The upfront price is higher than a 3-month plan, so make sure you will keep watching. The 7-day money-back guarantee applies to subscriptions.',
    ],
    scenario: `For 1 connection, the 6-month plan is $${p1(6)} for 6 paid months (about $${(prices[1][6] / 6).toFixed(2)} a month), and the extra free month brings your service to 7 months, or about $${(prices[1][6] / 7).toFixed(2)} a month across the whole period.`,
    faqs: [
      ['How much is the Prime IPTV 6-month plan?', `The 6-month plan costs $${p1(6)} for 1 connection, $${prices[2][6].toFixed(2)} for 2 connections, $${prices[3][6].toFixed(2)} for 3 connections and $${prices[4][6].toFixed(2)} for 4 connections, and includes +1 month free.`],
      ['What does +1 month free mean on the 6-month plan?', 'You pay for 6 months and receive 7 months of service. The extra month is added at no charge.'],
      ['Is the 6-month plan better than 3 months?', 'It costs less per month than the 3-month plan and includes a free month, so it is better value if you expect to keep watching for at least six months.'],
    ],
  },
  12: {
    title: '12 Month IPTV Subscription from $79.99 | Prime IPTV',
    description: 'Prime IPTV 12-month subscription from $79.99 with +1 month free: 25,000+ live channels, 120,000+ movies & series, 4K. Free trial. Order on WhatsApp.',
    h1: 'IPTV 12 Months Subscription',
    intro: `The 12-month plan is the most popular Prime IPTV choice: from $${p1(12)} for 1 connection, with +1 month free for 13 months of service, and 2, 3 and 4-connection options. It cuts your monthly cost sharply compared with short plans.`,
    fit: [
      { title: 'Year-round viewers', text: 'If you watch live TV, sports and movies all year, a year-long plan means one payment and one less renewal to remember.' },
      { title: 'Households that have settled on a setup', text: 'Once your device, player and number of connections are right, a 12-month plan makes sense.' },
      { title: 'Anyone comparing the cost per month', text: 'It is a big step down in monthly cost from the 3-month plan, without committing for two years.' },
    ],
    watchOut: [
      'The upfront cost is larger than shorter plans. Try the free trial and check your channels and devices first.',
      'The 24-month plan has an even lower monthly cost if you are ready for a longer commitment.',
    ],
    scenario: `For 1 connection, the 12-month plan is $${p1(12)} for 12 paid months, which is about $${(prices[1][12] / 12).toFixed(2)} a month, and the extra free month makes it 13 months of service. The same 1-connection viewer on the 3-month plan pays about $${(prices[1][3] / 3).toFixed(2)} a month.`,
    faqs: [
      ['How much is the Prime IPTV 12-month plan?', `The 12-month plan costs $${p1(12)} for 1 connection, $${prices[2][12].toFixed(2)} for 2 connections, $${prices[3][12].toFixed(2)} for 3 connections and $${prices[4][12].toFixed(2)} for 4 connections, and includes +1 month free.`],
      ['Why is the 12-month plan the most popular?', 'It balances a much lower monthly cost than short plans with a commitment of one year and a free bonus month.'],
      ['Is there a refund on the 12-month plan?', 'Yes. Subscriptions come with a 7-day money-back guarantee. The refund policy explains how to request a refund.'],
    ],
  },
  24: {
    title: '24 Month IPTV Subscription from $124.99 | Prime IPTV',
    description: 'Prime IPTV 24-month subscription from $124.99 with +2 months free: the best value offer. 25,000+ channels, 120,000+ movies & series. Order on WhatsApp.',
    h1: 'IPTV 24 Months Subscription',
    intro: `The 24-month plan is Prime IPTV’s best value offer: from $${p1(24)} for 1 connection with +2 months free, for 26 months of service, and 2, 3 and 4-connection options. It has the lowest cost per month of any plan.`,
    fit: [
      { title: 'Long-term viewers', text: 'If Prime IPTV will be your everyday TV for the next two years, this plan gives the lowest monthly cost.' },
      { title: 'Households that want to stop worrying about renewals', text: 'Two years of service plus two free months means almost no renewals to think about.' },
      { title: 'People who tested first and are confident', text: 'After the free trial and a few weeks of use, a 24-month plan locks in the best value.' },
    ],
    watchOut: [
      'The upfront payment is the largest. Use the 24-hour free trial first to check your channels, sports and devices.',
      'If you are unsure you will watch for two years, a 12-month plan may suit you better. See the comparison below.',
    ],
    scenario: `For 1 connection, the 24-month plan is $${p1(24)} for 24 paid months, which is about $${(prices[1][24] / 24).toFixed(2)} a month, and the +2 free months bring it to 26 months of service. The 3-month plan, by comparison, works out to about $${(prices[1][3] / 3).toFixed(2)} a month.`,
    faqs: [
      ['How much is the Prime IPTV 24-month plan?', `The 24-month plan costs $${p1(24)} for 1 connection, $${prices[2][24].toFixed(2)} for 2 connections, $${prices[3][24].toFixed(2)} for 3 connections and $${prices[4][24].toFixed(2)} for 4 connections, and includes +2 months free.`],
      ['What does +2 months free mean?', 'You pay for 24 months and receive 26 months of service. The two extra months are added at no charge.'],
      ['Is the 24-month plan the best value?', 'Yes. It has the lowest cost per month of the published plans, and the +2 free months improve it further.'],
    ],
  },
};

export const commonFaqs = (months: number): [string, string][] => [
  ['What is included in every Prime IPTV plan?', 'Every plan includes 25,000+ live channels (all Canadian and US channels and channels from other countries), 120,000+ movies and series, SD/HD/FHD/4K quality, EPG, sports, and all PPV channels in 4K and FHD, with 24/7 support.'],
];


export interface PlanExtra {
  deepDive: { title: string; paras: string[] };
  neighbor: string;
  moreFaqs: [string, string][];
}

export const planExtra: Record<number, PlanExtra> = {
  1: {
    deepDive: {
      title: 'Getting the most out of a 1-month plan',
      paras: [
        'A month passes quickly, so plan your first day. Install your player before you message us, so you can add your login and start testing the moment it arrives. Our device guides list exactly what each device needs, including the MAC-address process for MAG boxes.',
        'Use the first week to build your setup: mark the channels you watch most as favourites, check that the TV guide loads, and pick a quality that suits your connection. FHD is often steadier than 4K on a busy Wi-Fi network.',
        'Before the month ends, decide what you want next. If you have been watching regularly, a longer plan lowers the cost per month, and you can compare the 3, 6, 12 and 24-month prices on this page. If a month was not enough to judge, message support on WhatsApp. It is available 24/7.',
      ],
    },
    neighbor: 'The shortest plan with a published price is the 3-month plan. It costs less per month but asks for a longer commitment. If you are still deciding, the free 24-hour trial and a 1-month plan are the two lowest-commitment ways to start.',
    moreFaqs: [
      ['Can I use a 1-month plan on several devices?', 'You can set up a player on several devices, but a plan allows as many simultaneous streams as it has connections (1 to 4). Only one stream can play at a time on a 1-connection plan.'],
      ['What should I do before ordering a 1-month plan?', 'Install a compatible player and check your internet speed first, and use the free trial if you have not already. That way you spend the month watching, not setting up.'],
    ],
  },
  2: {
    deepDive: {
      title: 'Planning two months of viewing',
      paras: [
        'Two months suits a defined period. Write down what you want to watch in that window, such as a competition, a series you want to finish or the TV you need while you are away, and test those channels first.',
        'If you will use the plan on more than one screen, count the screens before you order. Plans cover 1 to 4 connections, and if two people watch at the same moment you need at least 2 connections.',
        'As the second month approaches its end, review how often you watched and on which devices. That tells you whether to renew for a short period again or to move to a longer plan with a lower monthly cost.',
      ],
    },
    neighbor: 'Compared with the 1-month plan, two months gives you more time to settle in. Compared with the published 3-month plan, it is a slightly shorter commitment, and the 3-month price is in the table so you can compare.',
    moreFaqs: [
      ['Is a 2-month plan good for a temporary stay?', 'It can be. Set it up on a device you have where you are staying, for example a Firestick or a Smart TV, using the device setup guides.'],
      ['How many screens can a 2-month plan use?', 'That depends on the connections you choose, from 1 to 4. A connection is one stream playing at a time.'],
    ],
  },
  3: {
    deepDive: {
      title: 'Using the 3-month plan well',
      paras: [
        'Treat the first two weeks as a settling-in period: choose your player, group your favourite channels, check the TV guide and test a live event at peak time. Our device guides and the free-trial checklist walk you through it.',
        'Three months is also a good test of a longer relationship. It shows which channels you watch consistently and whether your internet copes with evening viewing, which is exactly the information you need to choose a longer plan.',
        'The 3-month plan has no bonus months, and that is the main reason people move up to a 6, 12 or 24-month plan later. If you already know you will keep watching, you may prefer to start longer.',
      ],
    },
    neighbor: 'Compared with the 6-month plan, the 3-month plan asks for less upfront and a shorter commitment, but it costs more per month and has no free month. The 6-month plan adds +1 month free and lowers your monthly cost.',
    moreFaqs: [
      ['How does the 3-month plan compare with 6 months?', 'The 6-month plan costs less per month and includes +1 month free. The 3-month plan costs less upfront and commits you for a shorter time.'],
      ['Can I choose 2, 3 or 4 connections on the 3-month plan?', 'Yes. The 3-month plan is available with 1, 2, 3 and 4 connections, with a separate price for each, as shown in the table above.'],
    ],
  },
  6: {
    deepDive: {
      title: 'What seven months of service looks like',
      paras: [
        'With +1 month free you pay for six months and receive seven. That is long enough to cover a full season of regular viewing plus the weeks around it, without a year-long commitment.',
        'Because the plan is longer, spend the first month getting your setup right: pick the best player for your device, use Ethernet where you can, and test live sport at peak time. A smooth setup on day one pays off for months.',
        'Look at your renewal date as it approaches. If you have watched all the way through, a 12-month plan lowers your monthly cost further, and it is worth comparing before you renew.',
      ],
    },
    neighbor: 'Compared with the 3-month plan, the 6-month plan lowers the cost per month and adds a free month. Compared with the 12-month plan, it asks for less upfront but costs more per month.',
    moreFaqs: [
      ['Who should choose 6 months over 12 months?', 'Choose 6 months if you want a lower upfront payment and a shorter commitment, and you are happy with a slightly higher monthly cost.'],
      ['Does the 6-month plan work with 2, 3 and 4 connections?', 'Yes. It is available with 1, 2, 3 and 4 connections, with a separate price for each, as shown in the table above.'],
    ],
  },
  12: {
    deepDive: {
      title: 'Making a 12-month plan work all year',
      paras: [
        'A year includes every kind of viewing: changing seasons, major events and holidays. With the free bonus month you have 13 months of service, so keep the message with your login details somewhere safe.',
        'Over a long plan, devices change. If you buy a new TV or streaming stick, setup is the same login in a compatible player, and the device guides show each step. For MAG boxes, send us the MAC address and we activate it.',
        'Choose your number of connections with the whole year in mind. If you expect more people or screens to be watching at the same time, pick the number that fits, or contact us to talk through the options.',
      ],
    },
    neighbor: 'Compared with the 6-month plan, 12 months lowers the cost per month and keeps the +1 month free. Compared with the 24-month plan, it asks for half the commitment but costs more per month.',
    moreFaqs: [
      ['Who should choose 12 months over 24 months?', 'Choose 12 months if you want a big drop in monthly cost without committing for two years, or if you have not yet used Prime IPTV for long.'],
      ['Does a 12-month plan cover a full year of sports?', 'It covers 13 months of service including the free month, so it spans a full year of the sports calendar.'],
    ],
  },
  24: {
    deepDive: {
      title: 'Why the 24-month plan rewards patience',
      paras: [
        'The saving comes from time: you pay for 24 months and receive 26. Spread over the whole period, that is the lowest monthly cost of any Prime IPTV plan.',
        'Because the commitment is long, test thoroughly first. Use the 24-hour free trial, then use the 7-day money-back window after ordering to confirm everything works on each of your devices.',
        'Keep your records: save your login message and your order message on WhatsApp or email. If you ever need help, support is available 24/7, and having those details to hand speeds things up.',
      ],
    },
    neighbor: 'Compared with the 12-month plan, 24 months gives you a lower cost per month and two free months instead of one, but needs a larger upfront payment and a longer commitment.',
    moreFaqs: [
      ['Who should choose 24 months over 12 months?', 'Choose 24 months if Prime IPTV will be your everyday TV for the next two years and you want the lowest monthly cost and the most free months.'],
      ['Is the 24-month plan a large upfront payment?', 'It is the largest upfront payment, which is why we suggest trying the free trial first. The 7-day money-back guarantee applies to subscriptions.'],
    ],
  },
};
