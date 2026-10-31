export interface PostFr {
  title: string;
  description: string;
  excerpt: string;
  minutes: number;
  related: { href: string; text: string }[];
}

export const postsFr: Record<string, PostFr> = {
  'what-is-iptv': {
    title: 'Télévision IP (IPTV) : qu’est-ce que c’est et comment ça marche?',
    description: 'Ce qu’est l’IPTV, comment il fonctionne, ce qu’il faut pour regarder et les termes que vous verrez (EPG, VOD, PPV, M3U, Xtream Codes), expliqués pour les spectateurs au Canada.',
    excerpt: 'Comment fonctionne l’IPTV, ce qu’il faut pour commencer, les termes à connaître et en quoi il diffère du câble.',
    minutes: 6,
    related: [
      { href: '/fr/blogue/iptv-service-vs-iptv-player-app/', text: 'Service IPTV ou lecteur IPTV : quelle différence?' },
      { href: '/fr/blogue/iptv-vs-cable/', text: 'IPTV ou câble : ce que vous échangez' },
      { href: '/fr/installation/', text: 'Installer Prime IPTV sur votre appareil' },
          { href: '/fr/blogue/is-iptv-legal-in-canada/', text: 'L’IPTV est-il légal au Canada?' },
      { href: '/fr/blogue/how-to-watch-tv-without-cable-canada/', text: 'Regarder la télé sans câble au Canada' },
    ],
  },
  'iptv-service-vs-iptv-player-app': {
    title: 'Service IPTV ou lecteur IPTV : quelle différence?',
    description: 'Un service IPTV fournit les chaînes et votre identifiant; un lecteur ne fait que les afficher. Comprenez la différence et la place de Prime IPTV.',
    excerpt: 'Pourquoi un lecteur IPTV n’affiche rien seul, ce que donne un abonnement et comment éviter de les confondre.',
    minutes: 5,
    related: [
      { href: '/fr/blogue/best-iptv-players/', text: 'Meilleures applications IPTV : Firestick, Android TV, Smart TV' },
      { href: '/fr/installation/', text: 'Guides d’installation par appareil' },
      { href: '/fr/a-propos/', text: 'À propos de Prime IPTV' },
          { href: '/fr/blogue/iptv-box-canada/', text: 'Boîtier IPTV au Canada : en faut-il un?' },
    ],
  },
  'best-iptv-players': {
    title: 'Les meilleurs lecteurs IPTV : Firestick, Android TV, Smart TV',
    description: 'Comparez IPTV Smarters Pro, TiviMate, GSE Smart IPTV et Smart IPTV : les appareils qui leur conviennent, la méthode de connexion et quoi chercher.',
    excerpt: 'Une comparaison pratique des lecteurs IPTV les plus utilisés et de celui qui convient à votre appareil.',
    minutes: 6,
    related: [
      { href: '/fr/installation/firestick/', text: 'Installer Prime IPTV sur Firestick' },
      { href: '/fr/installation/android-tv/', text: 'Installer Prime IPTV sur Android TV' },
      { href: '/fr/installation/smart-tv/', text: 'Installer Prime IPTV sur un téléviseur intelligent' },
      { href: '/fr/installation/apple-tv/', text: 'Installer Prime IPTV sur Apple TV' },
          { href: '/fr/blogue/iptv-box-canada/', text: 'Faut-il un boîtier IPTV au Canada?' },
          { href: '/fr/blogue/iptv-m3u-vs-xtream-codes/', text: 'M3U ou Xtream Codes : quel identifiant choisir' },
    ],
  },
  'how-many-iptv-connections-do-i-need': {
    title: 'Combien de connexions IPTV? Guide des forfaits 1 à 4',
    description: 'Déterminez si 1, 2, 3 ou 4 connexions IPTV conviennent à votre foyer, avec les prix de Prime IPTV pour chaque durée et un choisisseur rapide.',
    excerpt: 'Ce qu’est une connexion, comment compter les écrans de votre maison et un choisisseur qui montre les forfaits Prime IPTV correspondants.',
    minutes: 5,
    related: [
      { href: '/fr/tarifs/', text: 'Tarifs et forfaits Prime IPTV' },
      { href: '/fr/essai-gratuit/', text: 'Commencer l’essai gratuit de 24 heures' },
      { href: '/fr/faq/', text: 'Questions fréquentes' },
          { href: '/fr/blogue/iptv-cost-canada/', text: 'Coût de l’IPTV au Canada' },
    ],
  },
  'iptv-free-trial-checklist': {
    title: 'Tester un essai gratuit IPTV : liste de vérification 24 h',
    description: 'Tirez le meilleur d’un essai gratuit IPTV de 24 heures : quoi tester sur votre appareil et votre réseau, quoi demander et comment décider avant de payer.',
    excerpt: 'Un plan de test pratique pour tout essai IPTV : chaînes, sport aux heures de pointe, EPG, VOD, soutien et conditions de remboursement.',
    minutes: 6,
    related: [
      { href: '/fr/essai-gratuit/', text: 'Demander l’essai gratuit de 24 heures de Prime IPTV' },
      { href: '/fr/blogue/iptv-buffering-troubleshooting/', text: 'L’IPTV ne fonctionne pas? Mise en mémoire tampon et connexion' },
      { href: '/fr/remboursement/', text: 'Politique de remboursement de Prime IPTV' },
          { href: '/fr/blogue/is-iptv-safe-canada/', text: 'L’IPTV est-il sûr au Canada?' },
    ],
  },
  'iptv-buffering-troubleshooting': {
    title: 'Mise en mémoire tampon et connexion IPTV : solutions pas à pas',
    description: 'Réglez la mise en mémoire tampon, les images figées, les échecs de connexion et les données de guide manquantes avec une liste simple pour tout appareil et tout lecteur.',
    excerpt: 'Une liste pas à pas pour la mise en mémoire tampon, les images figées, les erreurs de connexion et les problèmes d’EPG.',
    minutes: 7,
    related: [
      { href: '/fr/installation/', text: 'Guides d’installation par appareil' },
      { href: '/fr/blogue/best-iptv-players/', text: 'Les meilleurs lecteurs IPTV' },
      { href: '/fr/faq/', text: 'Questions fréquentes' },
          { href: '/fr/blogue/iptv-epg-explained/', text: 'L’EPG de l’IPTV expliqué' },
    ],
  },
  'iptv-vs-cable': {
    title: 'IPTV ou câble : ce que vous échangez vraiment',
    description: 'IPTV et câble comparés sur les chaînes, le contenu sur demande, les appareils, les contrats et la fiabilité, et ce que vous gagnez et abandonnez.',
    excerpt: 'Une comparaison franche de l’IPTV et du câble : chaînes, contenu sur demande, appareils, contrats et ce à quoi vous renoncez.',
    minutes: 6,
    related: [
      { href: '/fr/tarifs/', text: 'Tarifs et forfaits Prime IPTV' },
      { href: '/fr/blogue/what-is-iptv/', text: 'Qu’est-ce que l’IPTV?' },
      { href: '/fr/essai-gratuit/', text: 'Essayez Prime IPTV gratuitement pendant 24 heures' },
          { href: '/fr/blogue/iptv-vs-cable-canada/', text: 'IPTV ou câble au Canada' },
      { href: '/fr/blogue/iptv-cost-canada/', text: 'Coût de l’IPTV au Canada' },
    ],
  },
  'is-iptv-legal-in-canada': {
    title: 'IPTV légal ou illégal au Québec? Ce qu’il faut savoir',
    description: 'IPTV légal ou illégal au Québec et au Canada? Un guide en langage clair sur les forfaits télé à bas prix, les licences et comment vous protéger. Pas un avis juridique.',
    excerpt: 'Ce qu’est la technologie, ce qui décide de la légalité au Canada et les questions à poser à tout fournisseur.',
    minutes: 6,
    related: [
      { href: '/fr/blogue/is-iptv-safe-canada/', text: 'L’IPTV est-il sûr au Canada?' },
      { href: '/fr/conditions/', text: 'Conditions d’utilisation de Prime IPTV' },
      { href: '/fr/faq/', text: 'Questions fréquentes' },
    ],
  },
  'is-iptv-safe-canada': {
    title: 'L’IPTV est-il sûr au Canada? Paiements et arnaques',
    description: 'Comment juger si un service IPTV est sûr au Canada : protection des paiements, vie privée, remboursements, essais et signaux d’alarme à éviter.',
    excerpt: 'Une liste pratique pour repérer les arnaques et protéger votre argent et vos données quand vous vous abonnez à l’IPTV.',
    minutes: 6,
    related: [
      { href: '/fr/blogue/iptv-free-trial-checklist/', text: 'Liste de vérification de l’essai de 24 heures' },
      { href: '/fr/remboursement/', text: 'Politique de remboursement' },
      { href: '/fr/contact/', text: 'Joindre Prime IPTV' },
    ],
  },
  'iptv-cost-canada': {
    title: 'Coût de l’IPTV au Canada : ce que vous payez',
    description: 'Combien coûte l’IPTV au Canada? Le détail du coût mensuel selon la durée et le nombre de connexions, et comment le comparer à une facture de câble.',
    excerpt: 'Comment transformer les prix des forfaits en coût mensuel, et quoi inclure pour comparer l’IPTV au câble.',
    minutes: 6,
    related: [
      { href: '/fr/tarifs/', text: 'Tarifs Prime IPTV' },
      { href: '/fr/blogue/iptv-vs-cable-canada/', text: 'IPTV ou câble au Canada' },
      { href: '/fr/blogue/how-many-iptv-connections-do-i-need/', text: 'De combien de connexions avez-vous besoin?' },
    ],
  },
  'iptv-vs-cable-canada': {
    title: 'IPTV ou câble au Canada : lequel choisir?',
    description: 'IPTV et câble au Canada comparés sur le coût, les chaînes, les contrats, les appareils et la fiabilité, avec des conseils pour décider.',
    excerpt: 'Un regard axé sur le Canada sur le passage d’un forfait de câble à l’IPTV, et ce qu’il faut vérifier d’abord.',
    minutes: 6,
    related: [
      { href: '/fr/blogue/iptv-vs-cable/', text: 'IPTV ou câble : la comparaison générale' },
      { href: '/fr/blogue/iptv-cost-canada/', text: 'Coût de l’IPTV au Canada' },
      { href: '/fr/essai-gratuit/', text: 'Essayez Prime IPTV gratuitement' },
    ],
  },
  'how-to-watch-tv-without-cable-canada': {
    title: 'Comment regarder la télé sans câble au Canada',
    description: 'Comment regarder la télé en direct, le sport et les films sans abonnement au câble au Canada : appareils, applications, vitesses Internet et marche à suivre simple.',
    excerpt: 'Les appareils, les applications et l’Internet dont vous avez besoin pour couper le câble, et la place de l’IPTV.',
    minutes: 6,
    related: [
      { href: '/fr/installation/', text: 'Guides d’installation par appareil' },
      { href: '/fr/blogue/what-is-iptv/', text: 'Qu’est-ce que l’IPTV?' },
      { href: '/fr/blogue/best-iptv-players/', text: 'Les meilleurs lecteurs IPTV' },
    ],
  },
  'iptv-epg-explained': {
    title: 'L’EPG de l’IPTV expliqué : le guide des programmes',
    description: 'Ce qu’est un EPG, comment fonctionne le guide des programmes IPTV, pourquoi il affiche parfois de mauvaises émissions et comment le réparer.',
    excerpt: 'Ce qu’est le guide de votre lecteur IPTV, d’où viennent ses données et comment réparer un guide vide ou erroné.',
    minutes: 5,
    related: [
      { href: '/fr/blogue/iptv-buffering-troubleshooting/', text: 'Mise en mémoire tampon et connexion IPTV' },
      { href: '/fr/blogue/best-iptv-players/', text: 'Les meilleurs lecteurs IPTV' },
      { href: '/fr/faq/', text: 'FAQ' },
    ],
  },
  'iptv-box-canada': {
    title: 'TV box et box IPTV au Québec : en faut-il un?',
    description: 'Faut-il un boîtier IPTV au Canada? Comparez téléviseurs intelligents, Firestick, boîtiers Android, Apple TV et MAG, et voyez ce qui vous convient.',
    excerpt: 'Quel appareil utiliser pour l’IPTV au Canada, et quand un boîtier dédié vaut la peine.',
    minutes: 5,
    related: [
      { href: '/fr/installation/', text: 'Guides d’installation par appareil' },
      { href: '/fr/installation/mag/', text: 'Installation du boîtier MAG' },
      { href: '/fr/blogue/best-iptv-players/', text: 'Les meilleurs lecteurs IPTV' },
    ],
  },
  'iptv-m3u-vs-xtream-codes': {
    title: 'M3U ou Xtream Codes : quel identifiant IPTV choisir?',
    description: 'Liste de lecture M3U ou connexion Xtream Codes pour l’IPTV : ce que c’est, les différences, les lecteurs compatibles et le meilleur choix selon votre appareil.',
    excerpt: 'Ce qu’est une liste de lecture M3U et une connexion Xtream Codes, comment elles diffèrent et laquelle utiliser sur votre appareil.',
    minutes: 5,
    related: [
      { href: '/fr/blogue/best-iptv-players/', text: 'Meilleures applications IPTV' },
      { href: '/fr/installation/', text: 'Guides d’installation par appareil' },
      { href: '/fr/blogue/iptv-buffering-troubleshooting/', text: 'L’IPTV ne fonctionne pas? Solutions' },
    ],
  },
  'prime-iptv-trial-test': {
    title: 'Test de Prime IPTV : ce que nous avons mesuré en 24 heures',
    description: 'Notre propre essai de 24 heures de Prime IPTV : 98 chaînes, 67 chaînes sportives, environ 60 Mb/s aux heures de pointe, assistance, applications, et ce qui n’a pas fonctionné.',
    excerpt: 'Ce que nous avons observé lors de notre propre essai de 24 heures de Prime IPTV : chaînes, sports, applications, assistance, et les problèmes de guide et de rattrapage.',
    minutes: 6,
    related: [
      { href: '/fr/prime-iptv/', text: 'Prime IPTV (IPTV Prime) : ce que c’est et ce que vous obtenez' },
      { href: '/fr/blogue/prime-iptv-apps-tested/', text: 'Les applications testées avec Prime IPTV' },
      { href: '/fr/blogue/iptv-free-trial-checklist/', text: 'Comment tester un essai gratuit d’IPTV : liste de 24 heures' },
      { href: '/fr/blogue/iptv-epg-explained/', text: 'Le guide des programmes IPTV (EPG) expliqué' },
    ],
  },
  'prime-iptv-apps-tested': {
    title: 'Applications testées avec Prime IPTV : TiviMate, IBO Player',
    description: 'Les lecteurs utilisés pendant notre propre essai de Prime IPTV : l’application fournie, TiviMate et IBO Player sur téléviseur, et une application sur iPhone.',
    excerpt: 'Quelles applications nous avons essayées avec Prime IPTV, ce qui s’est passé et comment choisir un lecteur pour votre appareil.',
    minutes: 5,
    related: [
      { href: '/fr/blogue/prime-iptv-trial-test/', text: 'Notre test complet de 24 heures de Prime IPTV' },
      { href: '/fr/blogue/best-iptv-players/', text: 'Meilleures applications IPTV' },
      { href: '/fr/installation/', text: 'Installer Prime IPTV sur votre appareil' },
      { href: '/fr/blogue/iptv-m3u-vs-xtream-codes/', text: 'M3U ou Xtream Codes : quelle connexion utiliser?' },
    ],
  },
};
