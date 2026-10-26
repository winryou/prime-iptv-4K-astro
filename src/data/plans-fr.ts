import { prices } from './pricing';

const f = (n: number) => `${n.toFixed(2).replace('.', ',')} $`;
const p = (c: number, m: number) => f(prices[c][m]);
const pm = (c: number, m: number, paid = m) => f(prices[c][m] / paid);

export interface PlanFr {
  title: string;
  description: string;
  h1: string;
  intro: string;
  fit: { title: string; text: string }[];
  watchOut: string[];
  scenario: string;
  deepDive: { title: string; paras: string[] };
  neighbor: string;
  faqs: [string, string][];
}

export const planFr: Record<number, PlanFr> = {
  1: {
    title: 'Abonnement IPTV 1 mois | Prime IPTV',
    description: 'Commandez un abonnement Prime IPTV de 1 mois : plus de 25 000 chaînes en direct, plus de 120 000 films et séries, 4K. Essai gratuit de 24 heures sans carte. Commande sur WhatsApp.',
    h1: 'Abonnement IPTV de 1 mois',
    intro: 'Un forfait de 1 mois est la façon la plus courte d’utiliser Prime IPTV : toute l’offre de plus de 25 000 chaînes en direct et de plus de 120 000 films et séries, sans engagement long. Écrivez-nous sur WhatsApp pour connaître le prix du forfait de 1 mois aujourd’hui, ou commencez d’abord l’essai gratuit de 24 heures.',
    fit: [
      { title: 'Vous avez aimé l’essai gratuit et voulez plus de temps', text: 'Si l’essai de 24 heures vous a convaincu, mais que vous voulez un peu plus de temps sur votre appareil avant de choisir un forfait plus long, un mois est une suite peu engageante.' },
      { title: 'Visionnement saisonnier ou de courte durée', text: 'Suivre une saison sportive, regarder un événement ou avoir besoin de télé pour un court séjour sont de bonnes raisons de garder l’engagement court.' },
      { title: 'Prise en main d’un nouvel appareil', text: 'Si vous venez d’installer une Firestick, un téléviseur intelligent ou un boîtier MAG, un mois vous permet de vous familiariser avec le lecteur, le guide et vos chaînes.' },
    ],
    watchOut: [
      'Les forfaits courts signifient plus de renouvellements. Les forfaits plus longs (3 à 24 mois) réduisent le coût par mois; comparez donc les prix plus bas sur cette page.',
      'Les mois gratuits s’appliquent aux forfaits de 6, 12 et 24 mois, et non aux forfaits courts.',
    ],
    scenario: 'Imaginez que vous voulez suivre une saison sportive sur un seul téléviseur. Vous demandez l’essai de 24 heures, vérifiez vos chaînes et un match en direct, puis prenez un forfait de 1 mois pendant que vous décidez si un forfait plus long est logique.',
    deepDive: { title: 'Tirer le meilleur d’un forfait de 1 mois', paras: [
      'Un mois passe vite; planifiez donc votre premier jour. Installez votre lecteur avant de nous écrire pour pouvoir ajouter votre identifiant et commencer à tester dès qu’il arrive. Nos guides par appareil indiquent exactement ce que chaque appareil exige, y compris la marche à suivre pour l’adresse MAC des boîtiers MAG.',
      'Utilisez la première semaine pour bâtir votre configuration : marquez en favoris les chaînes que vous regardez le plus, vérifiez que le guide se charge et choisissez une qualité adaptée à votre connexion. La FHD est souvent plus stable que le 4K sur un réseau Wi-Fi occupé.',
      'Avant la fin du mois, décidez de la suite. Si vous avez regardé régulièrement, un forfait plus long réduit le coût par mois, et vous pouvez comparer les prix de 3, 6, 12 et 24 mois sur cette page. Si un mois ne suffisait pas pour juger, écrivez au soutien sur WhatsApp. Il est offert 24/7.',
    ] },
    neighbor: 'Le forfait le plus court dont le prix est publié est celui de 3 mois. Il coûte moins par mois, mais demande un engagement plus long. Si vous hésitez encore, l’essai gratuit de 24 heures et un forfait de 1 mois sont les deux façons les moins engageantes de commencer.',
    faqs: [
      ['Combien coûte un abonnement IPTV de 1 mois?', 'Écrivez-nous sur WhatsApp pour connaître le prix actuel du forfait de 1 mois et nous vous enverrons les détails de paiement. Les forfaits de 3, 6, 12 et 24 mois ont des prix publiés sur ce site.'],
      ['Un forfait de 1 mois est-il préférable à l’essai gratuit?', 'L’essai gratuit dure 24 heures et ne demande pas de carte de crédit. Un forfait de 1 mois vous donne un mois complet de visionnement, ce qui aide si vous voulez regarder régulièrement avant de choisir un forfait plus long.'],
      ['Quelle durée coûte le moins par mois?', 'Les forfaits plus longs coûtent moins par mois. Parmi les forfaits publiés, ceux de 24 mois ont le coût mensuel le plus bas, suivis de ceux de 12 et de 6 mois.'],
      ['Puis-je utiliser un forfait de 1 mois sur plusieurs appareils?', 'Vous pouvez configurer un lecteur sur plusieurs appareils, mais un forfait permet autant de flux simultanés qu’il a de connexions (1 à 4). Un seul flux peut jouer à la fois avec un forfait à 1 connexion.'],
      ['Que faire avant de commander un forfait de 1 mois?', 'Installez d’abord un lecteur compatible et vérifiez votre vitesse Internet, et utilisez l’essai gratuit si ce n’est pas déjà fait. Ainsi, vous passez le mois à regarder plutôt qu’à installer.'],
    ],
  },
  2: {
    title: 'Abonnement IPTV 2 mois | Prime IPTV',
    description: 'Commandez un abonnement Prime IPTV de 2 mois : plus de 25 000 chaînes en direct, plus de 120 000 films et séries, 4K et sports. Essai gratuit de 24 heures. Commande sur WhatsApp.',
    h1: 'Abonnement IPTV de 2 mois',
    intro: 'Un forfait de 2 mois vous donne deux mois complets de Prime IPTV, avec plus de 25 000 chaînes en direct, plus de 120 000 films et séries, du sport et du PPV, sans devoir vous engager pour six mois ou plus. Écrivez-nous sur WhatsApp pour connaître le prix du forfait de 2 mois aujourd’hui, ou essayez d’abord l’essai gratuit de 24 heures.',
    fit: [
      { title: 'Une courte saison ou quelques mois d’événements', text: 'Deux mois couvrent une partie d’une saison ou une série d’événements sans payer pour un forfait long.' },
      { title: 'Foyers saisonniers et séjours temporaires', text: 'Si vous séjournez quelque part pendant deux mois, un forfait de 2 mois correspond au temps dont vous avez besoin.' },
      { title: 'Un cran au-dessus d’un seul mois', text: 'Si un mois semble trop court, mais qu’un trimestre semble trop long, deux mois se situent entre les deux.' },
    ],
    watchOut: [
      'Les forfaits plus longs réduisent le coût par mois. Si vous comptez continuer à regarder, comparez les prix de 3, 6, 12 et 24 mois ci-dessous.',
      'Les mois gratuits s’appliquent aux forfaits de 6, 12 et 24 mois, et non aux forfaits courts.',
    ],
    scenario: 'Supposons que vous voyagez ou séjournez quelque part pendant deux mois et voulez votre offre habituelle sur le téléviseur de l’endroit. Un forfait de 2 mois correspond à cette période, et vous pouvez l’installer sur l’appareil que vous avez déjà avec nos guides pas à pas.',
    deepDive: { title: 'Planifier deux mois de visionnement', paras: [
      'Deux mois conviennent à une période définie. Notez ce que vous voulez regarder pendant cette période, comme une compétition, une série à terminer ou la télé dont vous avez besoin pendant votre absence, et testez d’abord ces chaînes.',
      'Si vous utiliserez le forfait sur plus d’un écran, comptez les écrans avant de commander. Les forfaits couvrent de 1 à 4 connexions, et si deux personnes regardent en même temps, il vous faut au moins 2 connexions.',
      'À l’approche de la fin du deuxième mois, faites le bilan de la fréquence à laquelle vous avez regardé et sur quels appareils. Cela vous dira s’il faut renouveler pour une courte période ou passer à un forfait plus long au coût mensuel plus bas.',
    ] },
    neighbor: 'Comparé au forfait de 1 mois, deux mois vous laissent plus de temps pour vous installer. Comparé au forfait de 3 mois publié, c’est un engagement légèrement plus court, et le prix de 3 mois figure dans le tableau pour que vous puissiez comparer.',
    faqs: [
      ['Combien coûte un abonnement IPTV de 2 mois?', 'Écrivez-nous sur WhatsApp pour connaître le prix actuel du forfait de 2 mois et nous vous enverrons les détails de paiement. Les forfaits de 3, 6, 12 et 24 mois ont des prix publiés sur ce site.'],
      ['Dois-je choisir 2 mois ou 3 mois?', 'Choisissez la durée qui correspond au temps pendant lequel vous comptez regarder. Le forfait de 3 mois est le plus court des forfaits publiés et son prix figure ci-dessous, pour que vous puissiez comparer.'],
      ['Puis-je essayer Prime IPTV avant de commander un forfait de 2 mois?', 'Oui. Demandez l’essai gratuit de 24 heures (sans carte de crédit) et testez vos chaînes et un événement en direct sur votre propre appareil d’abord.'],
      ['Un forfait de 2 mois convient-il à un séjour temporaire?', 'Il peut convenir. Installez-le sur un appareil que vous avez à l’endroit où vous séjournez, par exemple une Firestick ou un téléviseur intelligent, avec les guides d’installation.'],
      ['Combien d’écrans un forfait de 2 mois peut-il utiliser?', 'Cela dépend des connexions que vous choisissez, de 1 à 4. Une connexion correspond à un flux en cours de lecture.'],
    ],
  },
  3: {
    title: `Abonnement IPTV 3 mois dès ${p(1, 3)} | Prime IPTV`,
    description: `Abonnement Prime IPTV de 3 mois dès ${p(1, 3)} : plus de 25 000 chaînes en direct, plus de 120 000 films et séries, 4K, 1 à 4 connexions. Essai gratuit. Commande sur WhatsApp.`,
    h1: 'Abonnement IPTV de 3 mois',
    intro: `Le forfait de 3 mois est le plus court des forfaits Prime IPTV publiés et une façon populaire de commencer : dès ${p(1, 3)} pour 1 connexion, avec des options de 2, 3 et 4 connexions. Vous obtenez plus de 25 000 chaînes en direct, plus de 120 000 films et séries, l’EPG, le sport et le PPV de la SD au 4K.`,
    fit: [
      { title: 'Nouveaux abonnés à l’IPTV', text: 'Trois mois suffisent pour vous installer, apprendre votre lecteur et voir comment l’IPTV s’intègre à votre façon de regarder, sans engagement long.' },
      { title: 'Une saison ou un trimestre de visionnement', text: 'Il couvre une bonne partie d’une saison sportive ou quelques mois de séries et de films.' },
      { title: 'Foyers qui testent plusieurs connexions', text: 'Vous pouvez essayer 2, 3 ou 4 connexions pendant un trimestre et voir combien d’écrans vous utilisez vraiment.' },
    ],
    watchOut: [
      'Le forfait de 3 mois a le coût par mois le plus élevé des forfaits publiés. Si vous êtes certain de continuer à regarder, les forfaits de 6, 12 et 24 mois coûtent moins par mois.',
      'Les mois gratuits commencent avec les forfaits de 6 mois; le forfait de 3 mois n’en a donc aucun.',
    ],
    scenario: `Un parcours courant consiste à demander l’essai de 24 heures, à installer votre lecteur, puis à commander un forfait de 3 mois. Si vous restez, vous pouvez passer à un forfait de 6, 12 ou 24 mois pour un coût mensuel plus bas. Pour 1 connexion, 12 mois reviennent à environ ${pm(1, 12)} par mois, contre environ ${pm(1, 3)} avec le forfait de 3 mois.`,
    deepDive: { title: 'Bien utiliser le forfait de 3 mois', paras: [
      'Traitez les deux premières semaines comme une période d’adaptation : choisissez votre lecteur, regroupez vos chaînes favorites, vérifiez le guide et testez un événement en direct aux heures de pointe. Nos guides par appareil et la liste de vérification de l’essai gratuit vous accompagnent.',
      'Trois mois sont aussi un bon test d’une relation plus longue. Ils montrent quelles chaînes vous regardez régulièrement et si votre Internet supporte le visionnement du soir, exactement ce qu’il faut savoir pour choisir un forfait plus long.',
      'Le forfait de 3 mois n’a pas de mois gratuit, et c’est la principale raison pour laquelle on passe plus tard à un forfait de 6, 12 ou 24 mois. Si vous savez déjà que vous continuerez à regarder, vous préférerez peut-être commencer plus long.',
    ] },
    neighbor: 'Comparé au forfait de 6 mois, celui de 3 mois demande moins au départ et un engagement plus court, mais il coûte plus par mois et n’a aucun mois gratuit. Le forfait de 6 mois ajoute +1 mois gratuit et réduit votre coût mensuel.',
    faqs: [
      ['Combien coûte le forfait Prime IPTV de 3 mois?', `Le forfait de 3 mois coûte ${p(1, 3)} pour 1 connexion, ${p(2, 3)} pour 2 connexions, ${p(3, 3)} pour 3 connexions et ${p(4, 3)} pour 4 connexions.`],
      ['Le forfait de 3 mois comprend-il des mois gratuits?', 'Non. L’offre de +1 mois gratuit s’applique aux forfaits de 6 et 12 mois, et celle de +2 mois gratuits aux forfaits de 24 mois.'],
      ['Le forfait de 3 mois est-il un bon premier forfait?', 'Oui, c’est le plus court des forfaits publiés et un premier choix courant. Commencez par l’essai gratuit pour vérifier vos chaînes et votre appareil avant de commander.'],
      ['Comment le forfait de 3 mois se compare-t-il à celui de 6 mois?', 'Le forfait de 6 mois coûte moins par mois et comprend +1 mois gratuit. Celui de 3 mois coûte moins au départ et vous engage moins longtemps.'],
      ['Puis-je choisir 2, 3 ou 4 connexions avec le forfait de 3 mois?', 'Oui. Le forfait de 3 mois est offert avec 1, 2, 3 et 4 connexions, avec un prix distinct pour chacune, comme le montre le tableau ci-dessus.'],
    ],
  },
  6: {
    title: `Abonnement IPTV 6 mois dès ${p(1, 6)} | Prime IPTV`,
    description: `Abonnement Prime IPTV de 6 mois dès ${p(1, 6)} avec +1 mois gratuit : plus de 25 000 chaînes en direct, plus de 120 000 films et séries, 4K. Essai gratuit. Commande sur WhatsApp.`,
    h1: 'Abonnement IPTV de 6 mois',
    intro: `Le forfait de 6 mois comprend +1 mois gratuit; vous obtenez donc 7 mois de Prime IPTV : dès ${p(1, 6)} pour 1 connexion, avec des options de 2, 3 et 4 connexions. Il réduit votre coût mensuel par rapport au forfait de 3 mois tout en gardant un engagement modéré.`,
    fit: [
      { title: 'Spectateurs qui savent qu’ils continueront', text: 'Si l’essai et vos premières semaines se sont bien passés, six mois vous évitent de renouveler chaque trimestre.' },
      { title: 'Une saison complète et un peu plus', text: 'Sept mois de service couvrent une longue période d’une saison sportive, plus l’avant-saison ou l’intersaison.' },
      { title: 'Un pas vers les forfaits plus longs', text: 'C’est une voie intermédiaire : un coût mensuel plus bas qu’à 3 mois sans le coût initial d’un forfait de 12 ou 24 mois.' },
    ],
    watchOut: [
      'Le coût mensuel est plus bas que celui du forfait de 3 mois, mais plus élevé que ceux des forfaits de 12 et 24 mois.',
      'Le prix initial est plus élevé que celui d’un forfait de 3 mois; assurez-vous donc de continuer à regarder. La garantie de remboursement de 7 jours s’applique aux abonnements.',
    ],
    scenario: `Pour 1 connexion, le forfait de 6 mois coûte ${p(1, 6)} pour 6 mois payés (environ ${pm(1, 6)} par mois), et le mois gratuit supplémentaire porte votre service à 7 mois, soit environ ${pm(1, 6, 7)} par mois sur toute la période.`,
    deepDive: { title: 'À quoi ressemblent sept mois de service', paras: [
      'Avec +1 mois gratuit, vous payez six mois et en recevez sept. C’est assez long pour couvrir une saison complète de visionnement régulier et les semaines qui l’entourent, sans engagement d’un an.',
      'Comme le forfait est plus long, consacrez le premier mois à bien régler votre installation : choisissez le meilleur lecteur pour votre appareil, utilisez Ethernet si possible et testez le sport en direct aux heures de pointe. Une bonne installation dès le premier jour rapporte pendant des mois.',
      'Surveillez votre date de renouvellement à l’approche. Si vous avez regardé tout du long, un forfait de 12 mois réduit encore votre coût mensuel; il vaut la peine de comparer avant de renouveler.',
    ] },
    neighbor: 'Comparé au forfait de 3 mois, celui de 6 mois réduit le coût par mois et ajoute un mois gratuit. Comparé à celui de 12 mois, il demande moins au départ mais coûte plus par mois.',
    faqs: [
      ['Combien coûte le forfait Prime IPTV de 6 mois?', `Le forfait de 6 mois coûte ${p(1, 6)} pour 1 connexion, ${p(2, 6)} pour 2 connexions, ${p(3, 6)} pour 3 connexions et ${p(4, 6)} pour 4 connexions, et comprend +1 mois gratuit.`],
      ['Que signifie +1 mois gratuit sur le forfait de 6 mois?', 'Vous payez 6 mois et recevez 7 mois de service. Le mois supplémentaire est ajouté sans frais.'],
      ['Le forfait de 6 mois est-il meilleur que celui de 3 mois?', 'Il coûte moins par mois que le forfait de 3 mois et comprend un mois gratuit; il offre donc une meilleure valeur si vous comptez regarder pendant au moins six mois.'],
      ['Qui devrait choisir 6 mois plutôt que 12 mois?', 'Choisissez 6 mois si vous voulez un paiement initial plus bas et un engagement plus court, et si un coût mensuel légèrement plus élevé vous convient.'],
      ['Le forfait de 6 mois fonctionne-t-il avec 2, 3 et 4 connexions?', 'Oui. Il est offert avec 1, 2, 3 et 4 connexions, avec un prix distinct pour chacune, comme le montre le tableau ci-dessus.'],
    ],
  },
  12: {
    title: `Abonnement IPTV 12 mois dès ${p(1, 12)} | Prime IPTV`,
    description: `Abonnement Prime IPTV de 12 mois dès ${p(1, 12)} avec +1 mois gratuit : plus de 25 000 chaînes en direct, plus de 120 000 films et séries, 4K. Essai gratuit. Commande sur WhatsApp.`,
    h1: 'Abonnement IPTV de 12 mois',
    intro: `Le forfait de 12 mois est le choix le plus populaire de Prime IPTV : dès ${p(1, 12)} pour 1 connexion, avec +1 mois gratuit pour 13 mois de service, et des options de 2, 3 et 4 connexions. Il réduit fortement votre coût mensuel par rapport aux forfaits courts.`,
    fit: [
      { title: 'Spectateurs toute l’année', text: 'Si vous regardez la télé en direct, le sport et des films toute l’année, un forfait d’un an signifie un seul paiement et un renouvellement de moins à retenir.' },
      { title: 'Foyers qui ont arrêté leur configuration', text: 'Une fois que votre appareil, votre lecteur et votre nombre de connexions sont les bons, un forfait de 12 mois est logique.' },
      { title: 'Quiconque compare le coût par mois', text: 'C’est une forte baisse du coût mensuel par rapport au forfait de 3 mois, sans s’engager pour deux ans.' },
    ],
    watchOut: [
      'Le coût initial est plus élevé que celui des forfaits plus courts. Essayez d’abord l’essai gratuit et vérifiez vos chaînes et vos appareils.',
      'Le forfait de 24 mois a un coût mensuel encore plus bas si vous êtes prêt à un engagement plus long.',
    ],
    scenario: `Pour 1 connexion, le forfait de 12 mois coûte ${p(1, 12)} pour 12 mois payés, soit environ ${pm(1, 12)} par mois, et le mois gratuit supplémentaire porte le service à 13 mois. Le même spectateur à 1 connexion paie environ ${pm(1, 3)} par mois avec le forfait de 3 mois.`,
    deepDive: { title: 'Faire fonctionner un forfait de 12 mois toute l’année', paras: [
      'Une année comprend tous les types de visionnement : changements de saison, grands événements et fêtes. Avec le mois gratuit, vous avez 13 mois de service; conservez donc en lieu sûr le message contenant vos identifiants.',
      'Sur un forfait long, les appareils changent. Si vous achetez un nouveau téléviseur ou une nouvelle clé de diffusion, l’installation consiste à entrer le même identifiant dans un lecteur compatible, et les guides par appareil montrent chaque étape. Pour les boîtiers MAG, envoyez-nous l’adresse MAC et nous l’activons.',
      'Choisissez votre nombre de connexions en pensant à toute l’année. Si vous prévoyez que plus de personnes ou d’écrans regarderont en même temps, choisissez le nombre qui convient, ou écrivez-nous pour discuter des options.',
    ] },
    neighbor: 'Comparé au forfait de 6 mois, 12 mois réduit le coût par mois et conserve le +1 mois gratuit. Comparé au forfait de 24 mois, il demande la moitié de l’engagement, mais coûte plus par mois.',
    faqs: [
      ['Combien coûte le forfait Prime IPTV de 12 mois?', `Le forfait de 12 mois coûte ${p(1, 12)} pour 1 connexion, ${p(2, 12)} pour 2 connexions, ${p(3, 12)} pour 3 connexions et ${p(4, 12)} pour 4 connexions, et comprend +1 mois gratuit.`],
      ['Pourquoi le forfait de 12 mois est-il le plus populaire?', 'Il équilibre un coût mensuel beaucoup plus bas que les forfaits courts avec un engagement d’un an et un mois gratuit.'],
      ['Y a-t-il un remboursement sur le forfait de 12 mois?', 'Oui. Les abonnements sont couverts par une garantie de remboursement de 7 jours. La politique de remboursement explique comment en faire la demande.'],
      ['Qui devrait choisir 12 mois plutôt que 24 mois?', 'Choisissez 12 mois si vous voulez une grande baisse du coût mensuel sans vous engager pour deux ans, ou si vous n’utilisez pas encore Prime IPTV depuis longtemps.'],
      ['Un forfait de 12 mois couvre-t-il une année complète de sport?', 'Il couvre 13 mois de service, mois gratuit compris; il s’étend donc sur une année complète du calendrier sportif.'],
    ],
  },
  24: {
    title: `Abonnement IPTV 24 mois dès ${p(1, 24)} | Prime IPTV`,
    description: `Abonnement Prime IPTV de 24 mois dès ${p(1, 24)} avec +2 mois gratuits : la meilleure valeur. Plus de 25 000 chaînes, plus de 120 000 films et séries. Commande sur WhatsApp.`,
    h1: 'Abonnement IPTV de 24 mois',
    intro: `Le forfait de 24 mois est la meilleure valeur de Prime IPTV : dès ${p(1, 24)} pour 1 connexion avec +2 mois gratuits, pour 26 mois de service, et des options de 2, 3 et 4 connexions. C’est le coût par mois le plus bas de tous les forfaits.`,
    fit: [
      { title: 'Spectateurs à long terme', text: 'Si Prime IPTV sera votre télé de tous les jours pour les deux prochaines années, ce forfait offre le coût mensuel le plus bas.' },
      { title: 'Foyers qui ne veulent plus se soucier des renouvellements', text: 'Deux ans de service plus deux mois gratuits signifient presque aucun renouvellement à penser.' },
      { title: 'Ceux qui ont d’abord testé et sont confiants', text: 'Après l’essai gratuit et quelques semaines d’utilisation, un forfait de 24 mois garantit la meilleure valeur.' },
    ],
    watchOut: [
      'Le paiement initial est le plus élevé. Utilisez d’abord l’essai gratuit de 24 heures pour vérifier vos chaînes, vos sports et vos appareils.',
      'Si vous n’êtes pas certain de regarder pendant deux ans, un forfait de 12 mois pourrait mieux vous convenir. Voyez la comparaison ci-dessous.',
    ],
    scenario: `Pour 1 connexion, le forfait de 24 mois coûte ${p(1, 24)} pour 24 mois payés, soit environ ${pm(1, 24)} par mois, et les +2 mois gratuits portent le service à 26 mois. Le forfait de 3 mois, en comparaison, revient à environ ${pm(1, 3)} par mois.`,
    deepDive: { title: 'Pourquoi le forfait de 24 mois récompense la patience', paras: [
      'L’économie vient du temps : vous payez 24 mois et en recevez 26. Répartie sur toute la période, c’est le coût mensuel le plus bas de tous les forfaits Prime IPTV.',
      'Comme l’engagement est long, testez à fond d’abord. Utilisez l’essai gratuit de 24 heures, puis la fenêtre de remboursement de 7 jours après la commande pour confirmer que tout fonctionne sur chacun de vos appareils.',
      'Conservez vos dossiers : gardez votre message d’identifiants et votre message de commande sur WhatsApp ou par courriel. Si vous avez besoin d’aide, le soutien est offert 24/7, et avoir ces renseignements sous la main accélère les choses.',
    ] },
    neighbor: 'Comparé au forfait de 12 mois, 24 mois offrent un coût par mois plus bas et deux mois gratuits plutôt qu’un, mais exigent un paiement initial plus élevé et un engagement plus long.',
    faqs: [
      ['Combien coûte le forfait Prime IPTV de 24 mois?', `Le forfait de 24 mois coûte ${p(1, 24)} pour 1 connexion, ${p(2, 24)} pour 2 connexions, ${p(3, 24)} pour 3 connexions et ${p(4, 24)} pour 4 connexions, et comprend +2 mois gratuits.`],
      ['Que signifient +2 mois gratuits?', 'Vous payez 24 mois et recevez 26 mois de service. Les deux mois supplémentaires sont ajoutés sans frais.'],
      ['Le forfait de 24 mois est-il la meilleure valeur?', 'Oui. Il a le coût par mois le plus bas des forfaits publiés, et les +2 mois gratuits l’améliorent encore.'],
      ['Qui devrait choisir 24 mois plutôt que 12 mois?', 'Choisissez 24 mois si Prime IPTV sera votre télé de tous les jours pour les deux prochaines années et que vous voulez le coût mensuel le plus bas et le plus de mois gratuits.'],
      ['Le forfait de 24 mois représente-t-il un gros paiement initial?', 'C’est le paiement initial le plus élevé; c’est pourquoi nous suggérons d’essayer d’abord l’essai gratuit. La garantie de remboursement de 7 jours s’applique aux abonnements.'],
    ],
  },
};
