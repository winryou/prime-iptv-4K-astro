export interface DeviceFr {
  name: string;
  short: string;
  players?: string[];
  intro: string;
  steps: string[];
  note?: string;
  whatsappPrompt?: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  tips: string[];
  needs: string[];
  issues: [string, string][];
  sections?: { title: string; html: string }[];
  faqs?: [string, string][];
}

export const devicesFr: Record<string, DeviceFr> = {
  firestick: {
    name: 'Firestick / Fire TV',
    short: 'Installez IPTV Smarters Pro ou TiviMate avec l’application Downloader, puis ajoutez votre identifiant Prime IPTV.',
    intro: 'L’IPTV Firestick est l’une des façons les plus populaires de regarder. Les appareils Amazon Fire TV Stick et Fire TV sont l’une des façons les plus populaires de regarder Prime IPTV. IPTV Smarters Pro et TiviMate ne figurent pas dans la boutique Amazon Appstore; vous les installez donc avec l’application gratuite Downloader. Les étapes ci-dessous vous guident.',
    steps: [
      'Installez l’application gratuite <strong>Downloader</strong> : sur l’écran d’accueil de Fire TV, ouvrez <strong>Rechercher</strong>, cherchez <strong>Downloader</strong> et choisissez <strong>Obtenir</strong>.',
      'Autorisez Downloader à installer des applications : allez dans <strong>Paramètres → Mon Fire TV → Options pour les développeurs</strong> et activez <strong>Installer des applications inconnues</strong> (ou <strong>Applications de sources inconnues</strong>) <strong>pour Downloader</strong>. Si vous ne voyez pas les options pour les développeurs, ouvrez <strong>Paramètres → Mon Fire TV → À propos</strong> et sélectionnez sept fois le nom de votre appareil. Les noms des menus varient légèrement selon la version de Fire OS.',
      'Ouvrez Downloader et saisissez le <strong>lien de téléchargement officiel</strong> de votre lecteur (<strong>IPTV Smarters Pro</strong> ou <strong>TiviMate</strong>) depuis le site officiel de l’application, puis téléchargez et installez-le. Supprimez ensuite le fichier d’installation pour économiser de l’espace. N’installez des applications qu’à partir de la source officielle.',
      'Ouvrez le lecteur et choisissez <strong>Login with Xtream Codes API</strong> (ou <strong>Ajouter une liste de lecture → Xtream Codes</strong> dans TiviMate).',
      'Saisissez l’<strong>URL du serveur, le nom d’utilisateur et le mot de passe</strong> de votre courriel d’activation ou de votre message WhatsApp, puis appuyez sur <strong>Add User</strong> / <strong>Suivant</strong> et attendez quelques secondes pendant le chargement des chaînes et de la VOD.',
    ],
    seoTitle: 'IPTV sur Firestick : guide d’installation de Prime IPTV (2026)',
    seoDescription: 'Comment installer l’IPTV sur Firestick : installez IPTV Smarters Pro ou TiviMate avec Downloader, ajoutez votre identifiant Prime IPTV et regardez. Fonctionne sur Fire TV Stick 4K.',
    h1: 'Comment installer l’IPTV sur Firestick (Fire TV Stick)',
    tips: [
      'Un adaptateur Ethernet filaire offre la diffusion 4K la plus stable sur Fire TV.',
      'Si les chaînes ne se chargent pas, revérifiez l’URL du serveur : faute de frappe ou espace en trop.',
      'Si vous constatez de la mise en mémoire tampon, essayez un flux de qualité inférieure dans les réglages du lecteur.',
      'Si votre identifiant est refusé, communiquez avec le soutien par WhatsApp ou par courriel et nous vérifierons vos identifiants.',
    ],
    needs: [
      'Une Amazon Fire TV Stick ou un appareil Fire TV branché à votre téléviseur et à Internet.',
      'Vos identifiants Prime IPTV (URL du serveur, nom d’utilisateur et mot de passe) tirés de votre message WhatsApp ou courriel.',
      'L’application gratuite Downloader (depuis l’Amazon Appstore) et un lecteur : TiviMate ou IPTV Smarters Pro, installé depuis le site officiel du lecteur.',
      'Une connexion stable. Un adaptateur Ethernet est l’option la plus fiable pour le 4K.',
    ],
    issues: [
      ['Saisir une longue URL de serveur avec la télécommande est lent.', 'Utilisez l’application Fire TV sur votre téléphone comme clavier, ou copiez les renseignements de votre message et collez-les là où le lecteur le permet.'],
      ['Je ne trouve pas IPTV Smarters Pro ni TiviMate dans l’Amazon Appstore.', 'C’est normal, car aucune des deux applications n’y figure. Installez l’application Downloader depuis l’Appstore et servez-vous-en pour installer votre lecteur depuis son site officiel, comme dans les étapes ci-dessus.'],
      ['Downloader dit qu’il ne peut pas installer l’application.', 'Vérifiez que « Installer des applications inconnues » (ou « Applications de sources inconnues ») est activé pour Downloader dans les options pour les développeurs, et que le lien de téléchargement est bien celui du lecteur officiel.'],
      ['Les flux saccadent en Wi-Fi.', 'Utilisez Ethernet si possible. Sinon, utilisez la rallonge HDMI fournie avec votre clé, le cas échéant, pour qu’elle ne soit pas collée à l’arrière du téléviseur.'],
      ['L’appareil manque d’espace de stockage.', 'Désinstallez les applications que vous n’utilisez pas et videz le cache du lecteur dans les paramètres d’applications de Fire TV.'],
    ],
    sections: [
      { title: 'Quel lecteur IPTV utiliser sur Firestick?', html: '<p>Les deux lecteurs les plus utilisés sur Fire TV sont <strong>TiviMate</strong> et <strong>IPTV Smarters Pro</strong>. TiviMate est populaire pour la présentation de son guide et le regroupement des chaînes; IPTV Smarters Pro est rapide à configurer et a des sections claires pour la télé en direct, les films et les séries. Prime IPTV fonctionne avec <strong>tous les lecteurs qui acceptent les codes Xtream ou un lien M3U</strong>; vous pouvez donc utiliser l’un ou l’autre. Pour un pas-à-pas complet de l’option Smarters, voyez <a href="/fr/installer-iptv-smarters-pro-firestick/">comment installer IPTV Smarters Pro sur Firestick</a>, et pour comparer d’autres applications, lisez la <a href="/fr/blogue/best-iptv-players/">comparaison des lecteurs IPTV</a>.</p>' },
      { title: 'IPTV gratuit sur Firestick : essayez l’essai de 24 heures', html: '<p>Vous n’êtes pas certain que l’IPTV conviendra à votre Firestick et à votre connexion? Prime IPTV offre un <a href="/fr/essai-gratuit/">essai gratuit de 24 heures</a> sans carte de crédit, livré par WhatsApp ou par courriel. Installez d’abord votre lecteur, demandez l’essai et testez vos chaînes et un événement en direct aux heures de pointe avant de choisir un <a href="/fr/tarifs/">forfait</a>.</p>' },
      { title: 'Fire TV Stick 4K et IPTV 4K', html: '<p>Prime IPTV diffuse en SD, HD, FHD et 4K lorsque le contenu le permet, et toutes les chaînes PPV sont offertes en 4K et en FHD. Une Fire TV Stick 4K branchée à un téléviseur 4K avec une connexion stable peut lire des flux 4K; pour le meilleur résultat, utilisez Ethernet et voyez <a href="/fr/iptv-4k/">ce qu’il faut pour l’IPTV 4K</a>.</p>' },
    ],
    faqs: [
      ['Comment installer l’IPTV sur une Firestick?', 'Installez l’application gratuite Downloader depuis l’Amazon Appstore, utilisez-la pour installer un lecteur comme IPTV Smarters Pro ou TiviMate depuis le site officiel du lecteur, puis ajoutez votre identifiant Prime IPTV avec Xtream Codes. Les étapes ci-dessus vous guident.'],
      ['Quel est le meilleur lecteur IPTV pour Firestick?', 'TiviMate et IPTV Smarters Pro sont les lecteurs les plus utilisés sur Fire TV. Prime IPTV fonctionne avec tous les lecteurs qui acceptent les codes Xtream ou un lien M3U; vous pouvez donc choisir celui que vous préférez.'],
      ['Puis-je avoir de l’IPTV gratuit sur Firestick?', 'Prime IPTV offre un essai gratuit de 24 heures sans carte de crédit, livré par WhatsApp ou par courriel, pour que vous puissiez tester l’IPTV sur votre Firestick gratuitement avant de choisir un forfait.'],
      ['Pourquoi l’IPTV ne fonctionne-t-il pas sur ma Firestick?', 'Vérifiez que vos identifiants sont corrects et sans espaces en trop, redémarrez le lecteur et la Firestick, vérifiez votre vitesse Internet et essayez Ethernet. Notre guide sur la mise en mémoire tampon et la connexion contient la liste complète.'],
      ['L’IPTV fonctionne-t-il sur la Fire TV Stick 4K?', 'Oui. Prime IPTV diffuse en SD, HD, FHD et 4K lorsque le contenu le permet, et une Fire TV Stick 4K peut lire des flux 4K sur un téléviseur 4K avec une connexion stable.'],
    ],
  },
  'smart-tv': {
    name: 'Téléviseur intelligent',
    short: 'Utilisez IPTV Smarters Pro, IBO Player, Set IPTV, NET IPTV ou tout lecteur qui accepte Xtream Codes ou M3U.',
    intro: 'La plupart des téléviseurs intelligents récents peuvent faire fonctionner un lecteur IPTV directement depuis leur boutique d’applications. Le lecteur offert dépend de la marque et du système d’exploitation de votre téléviseur.',
    steps: [
      'Ouvrez la boutique d’applications de votre téléviseur (Samsung Smart Hub, LG Content Store, etc.).',
      'Cherchez un lecteur compatible, par exemple <strong>IPTV Smarters Pro</strong>, <strong>IBO Player</strong>, <strong>Set IPTV</strong> ou <strong>NET IPTV</strong>, et installez-le.',
      'Lancez l’application. Dans <strong>IPTV Smarters Pro</strong>, choisissez la connexion <strong>Xtream Codes</strong> ou <strong>URL M3U</strong> et saisissez votre <strong>URL de serveur, nom d’utilisateur et mot de passe</strong>.',
      'Pour les <strong>lecteurs à adresse MAC</strong> comme IBO Player, Set IPTV et NET IPTV, notez l’<strong>adresse MAC</strong> affichée dans l’application et envoyez-la-nous sur WhatsApp. Nous vous aiderons à ajouter votre liste de lecture.',
      'Confirmez et attendez le chargement de votre liste de chaînes et de votre vidéothèque.',
    ],
    note: 'Prime IPTV fonctionne avec tous les lecteurs qui acceptent les codes Xtream ou un lien M3U. Les lecteurs qui utilisent l’adresse MAC de votre téléviseur (IBO Player, Set IPTV, NET IPTV et semblables) chargent la liste de lecture selon cette adresse. Envoyez-nous l’adresse MAC sur WhatsApp et nous vous installerons.',
    whatsappPrompt: 'Bonjour Prime IPTV, j’utilise un lecteur sur téléviseur intelligent et mon adresse MAC est : ',
    seoTitle: 'IPTV sur téléviseur intelligent : guide d’installation',
    seoDescription: 'Comment installer Prime IPTV sur un téléviseur intelligent Samsung, LG ou autre : lecteurs compatibles, connexion Xtream Codes et activation par adresse MAC.',
    h1: 'Installer Prime IPTV sur un téléviseur intelligent',
    tips: [
      'Branchez le téléviseur en Ethernet si possible. Le Wi-Fi des téléviseurs intelligents est souvent le maillon faible pour le 4K.',
      'Si votre téléviseur n’a aucune application convenable, une Firestick ou un boîtier Android TV est une solution de rechange fiable.',
    ],
    needs: [
      'Un téléviseur intelligent Samsung, LG ou autre avec une boutique d’applications et une connexion Internet.',
      'Vos identifiants Prime IPTV, ou l’adresse MAC de votre téléviseur si l’application s’active par appareil.',
      'Un lecteur de la boutique de votre téléviseur, par exemple IPTV Smarters Pro, IBO Player, Set IPTV ou NET IPTV, ou tout lecteur qui accepte Xtream Codes ou un lien M3U. La disponibilité varie selon la marque, la région et l’année du modèle.',
      'Ethernet, ou un bon signal Wi-Fi de 5 GHz.',
    ],
    issues: [
      ['Le lecteur que je veux n’est pas dans la boutique de mon téléviseur.', 'La disponibilité des applications varie selon la marque et l’année du modèle. Essayez un autre lecteur offert, ou branchez une Firestick ou un boîtier Android TV au même téléviseur.'],
      ['L’application affiche un code ou une adresse MAC au lieu d’un formulaire de connexion.', 'Certaines applications s’activent par appareil. Envoyez le code ou l’adresse MAC affiché à l’écran à notre équipe de soutien et nous vous aiderons à terminer l’activation.'],
      ['Les chaînes se chargent lentement ou l’application est lente.', 'Les processeurs des téléviseurs intelligents sont souvent plus lents que ceux des boîtiers de diffusion. Redémarrez le téléviseur et fermez les autres applications. Si cela persiste, un appareil de diffusion dédié est généralement plus performant.'],
      ['La vidéo 4K saccade.', 'Vérifiez que le téléviseur, le port HDMI et le lecteur prennent tous en charge le 4K, et utilisez une connexion filaire.'],
    ],
  },
  'android-tv': {
    name: 'Android TV',
    short: 'Installez TiviMate ou IPTV Smarters Pro depuis Google Play sur les boîtiers Android TV.',
    intro: 'Android TV, Google TV et les décodeurs Android (NVIDIA Shield, Chromecast avec Google TV, Xiaomi, etc.) exécutent toute la gamme de lecteurs IPTV de Google Play.',
    steps: [
      'Ouvrez le <strong>Google Play Store</strong> sur votre Android TV ou votre boîtier.',
      'Cherchez et installez <strong>TiviMate</strong> ou <strong>IPTV Smarters Pro</strong>.',
      'Ouvrez l’application et touchez <strong>Ajouter une liste de lecture</strong> / <strong>Add New User</strong>.',
      'Choisissez <strong>Xtream Codes</strong> et saisissez votre <strong>URL de serveur, nom d’utilisateur et mot de passe</strong>.',
      'Touchez <strong>Suivant</strong> / <strong>Add User</strong> pour charger votre abonnement Prime IPTV.',
    ],
    seoTitle: 'IPTV sur Android TV : guide d’installation de Prime IPTV',
    seoDescription: 'Comment installer Prime IPTV sur Android TV et Google TV : TiviMate ou IPTV Smarters Pro depuis Google Play, connexion Xtream Codes en quelques minutes.',
    h1: 'Installer Prime IPTV sur Android TV',
    tips: [
      'TiviMate offre la présentation d’EPG et le regroupement de chaînes les plus propres sur Android TV.',
      'Activez l’option de mise à jour de l’EPG du lecteur pour que le guide reste à jour.',
    ],
    needs: [
      'Un appareil Android TV ou Google TV connecté à Internet, comme un décodeur, une NVIDIA Shield ou un Chromecast avec Google TV.',
      'Vos identifiants Prime IPTV reçus par WhatsApp ou par courriel.',
      'TiviMate ou IPTV Smarters Pro depuis Google Play.',
      'Ethernet est recommandé pour le 4K.',
    ],
    issues: [
      ['Le lecteur est absent de Google Play sur mon boîtier.', 'Vérifiez que le boîtier est certifié Google et entièrement à jour. Certains boîtiers Android non certifiés ont un accès limité au Play Store.'],
      ['Le guide des programmes (EPG) est vide.', 'Ajoutez ou actualisez l’EPG dans les réglages du lecteur et laissez quelques minutes pour le téléchargement.'],
      ['La lecture saccade après un moment.', 'Mettez à jour le lecteur, videz son cache et essayez d’activer ou de désactiver le décodage matériel dans les réglages.'],
      ['La connexion fonctionne, mais les catégories sont vides.', 'Ajoutez de nouveau l’identifiant, assurez-vous que l’URL du serveur ne contient pas d’espaces et redémarrez l’application.'],
    ],
  },
  'apple-tv': {
    name: 'Apple TV',
    short: 'Utilisez IPTV Smarters ou GSE Smart IPTV depuis l’App Store d’Apple TV.',
    intro: 'Apple TV prend en charge l’IPTV grâce aux lecteurs offerts dans l’App Store de tvOS. L’installation utilise les mêmes URL de serveur, nom d’utilisateur et mot de passe que vous recevez après l’activation.',
    steps: [
      'Ouvrez l’<strong>App Store</strong> sur votre Apple TV.',
      'Cherchez <strong>IPTV Smarters</strong> ou <strong>GSE Smart IPTV</strong> et téléchargez-le.',
      'Ouvrez l’application et allez à <strong>Remote Playlists → Add New</strong> (ou à l’écran de connexion Xtream Codes).',
      'Choisissez <strong>Xtream Codes</strong> et saisissez votre <strong>URL de serveur, nom d’utilisateur et mot de passe</strong>.',
      'Enregistrez la liste de lecture et attendez le chargement de la liste de chaînes.',
    ],
    seoTitle: 'IPTV sur Apple TV : guide d’installation de Prime IPTV',
    seoDescription: 'Comment installer Prime IPTV sur Apple TV : IPTV Smarters ou GSE Smart IPTV depuis l’App Store, connexion Xtream Codes pas à pas.',
    h1: 'Installer Prime IPTV sur Apple TV',
    tips: [
      'Saisir de longues URL est plus facile avec l’application Apple TV Remote de votre iPhone comme clavier.',
    ],
    needs: [
      'Une Apple TV HD ou Apple TV 4K avec une version récente de tvOS, connectée à Internet.',
      'Vos identifiants Prime IPTV reçus par WhatsApp ou par courriel.',
      'IPTV Smarters ou GSE Smart IPTV depuis l’App Store d’Apple TV. La disponibilité peut changer; vérifiez la fiche dans la boutique.',
      'Une Apple TV 4K et un téléviseur 4K si vous voulez une image 4K.',
    ],
    issues: [
      ['Saisir les identifiants avec la télécommande Siri est lent.', 'Quand Apple TV le propose, utilisez votre iPhone ou iPad comme clavier pour saisir les renseignements.'],
      ['Je ne trouve pas le lecteur dans l’App Store.', 'Cherchez le nom complet de l’application et vérifiez que votre version de tvOS est à jour et que l’application est offerte dans la région de votre App Store.'],
      ['Le flux se met en pause en Wi-Fi.', 'Utilisez Ethernet sur les modèles dotés d’un port Ethernet, ou rapprochez l’Apple TV de votre routeur.'],
      ['La liste des chaînes ne s’actualise pas.', 'Supprimez la liste de lecture, ajoutez de nouveau l’identifiant et redémarrez l’application.'],
    ],
  },
  roku: {
    name: 'Roku',
    short: 'Les options sur Roku sont limitées; la recopie d’écran ou un boîtier Fire TV ou Android TV est recommandé.',
    intro: 'Roku ne prend pas en charge la même gamme de lecteurs IPTV que Fire TV ou Android TV. Il existe deux façons pratiques de regarder Prime IPTV avec un Roku à la maison.',
    steps: [
      'Installez <strong>IPTV Smarters Pro</strong> (ou un autre lecteur Xtream Codes) sur votre téléphone ou tablette Android et connectez-vous avec votre <strong>URL de serveur, nom d’utilisateur et mot de passe</strong>.',
      'Sur votre Roku, activez la <strong>recopie d’écran</strong> sous <strong>Paramètres → Système → Recopie d’écran</strong>.',
      'Sur votre téléphone, lancez la diffusion ou la recopie d’écran et choisissez votre appareil Roku.',
      'Lancez une chaîne et elle s’affichera sur votre téléviseur grâce au Roku.',
    ],
    note: 'Pour la meilleure qualité d’image et une expérience complète à la télécommande, nous recommandons une Firestick ou un boîtier Android TV plutôt que de compter sur la recopie d’écran.',
    seoTitle: 'IPTV sur Roku : guide d’installation de Prime IPTV',
    seoDescription: 'Comment regarder Prime IPTV avec un Roku : recopie d’écran depuis un téléphone Android ou solution de rechange avec Fire TV ou Android TV.',
    h1: 'Regarder Prime IPTV sur Roku',
    tips: [
      'La qualité de la recopie dépend de votre Wi-Fi; gardez votre téléphone et le Roku sur le même réseau.',
    ],
    needs: [
      'Un lecteur Roku ou un téléviseur Roku connecté à Internet.',
      'Un téléphone ou une tablette Android, ou un PC Windows, pour exécuter un lecteur IPTV et recopier l’écran, ou un appareil Fire TV ou Android TV comme solution de rechange.',
      'Vos identifiants Prime IPTV reçus par WhatsApp ou par courriel.',
      'Le Roku et l’appareil de recopie sur le même réseau Wi-Fi.',
    ],
    issues: [
      ['Aucun lecteur IPTV n’est offert sur mon Roku.', 'Le choix de lecteurs IPTV de Roku est limité. Utilisez la recopie d’écran depuis un appareil compatible, ou ajoutez un appareil Fire TV ou Android TV au même téléviseur.'],
      ['La recopie est saccadée.', 'La recopie dépend de votre Wi-Fi. Gardez les deux appareils près du routeur et sur le même réseau.'],
      ['Je ne trouve pas l’option de recopie d’écran.', 'La prise en charge de la recopie varie selon le modèle de Roku et la version du logiciel. Vérifiez Paramètres → Système sur votre Roku.'],
      ['L’audio et la vidéo sont désynchronisés.', 'Redémarrez la recopie et le lecteur. Une connexion filaire pour l’appareil de recopie, si possible, peut aider.'],
    ],
  },
  mobile: {
    name: 'Téléphone intelligent',
    short: 'Regardez sur iPhone et Android avec IPTV Smarters Pro.',
    intro: 'Emportez Prime IPTV partout. IPTV Smarters Pro est offert pour iPhone et Android et gère la télé en direct, la VOD et l’EPG dans une présentation adaptée aux téléphones.',
    steps: [
      'Téléchargez <strong>IPTV Smarters Pro</strong> depuis l’App Store (iPhone) ou Google Play (Android).',
      'Ouvrez l’application et touchez <strong>Add New User</strong>.',
      'Choisissez <strong>Login with Xtream Codes API</strong>.',
      'Saisissez votre <strong>URL de serveur, nom d’utilisateur et mot de passe</strong> et touchez <strong>Add User</strong>.',
    ],
    seoTitle: 'IPTV sur iPhone et Android : guide d’installation de Prime IPTV',
    seoDescription: 'Comment regarder Prime IPTV sur iPhone et Android avec IPTV Smarters Pro : installation et connexion Xtream Codes en quelques minutes.',
    h1: 'Installer Prime IPTV sur iPhone et Android',
    tips: [
      'Les flux 4K consomment beaucoup de données; utilisez le Wi-Fi quand vous le pouvez.',
      'Tournez votre téléphone en mode paysage pour regarder en plein écran.',
    ],
    needs: [
      'Un iPhone ou un téléphone Android avec un système d’exploitation récent.',
      'Vos identifiants Prime IPTV reçus par WhatsApp ou par courriel.',
      'IPTV Smarters Pro (ou un autre lecteur compatible) depuis l’App Store ou Google Play.',
      'Le Wi-Fi, ou un forfait de données mobiles qui supporte la vidéo.',
    ],
    issues: [
      ['L’utilisation de données mobiles est élevée.', 'La vidéo consomme beaucoup de données. Utilisez le Wi-Fi quand vous le pouvez et choisissez une qualité inférieure sur les données mobiles.'],
      ['La vidéo s’arrête quand je quitte l’application.', 'Les téléphones peuvent mettre les applications en pause en arrière-plan. Gardez le lecteur ouvert, ou utilisez son option d’image dans l’image s’il en a une.'],
      ['La pile se vide rapidement.', 'Réduisez la luminosité de l’écran et la qualité du flux, ou utilisez le mode économie d’énergie de votre téléphone.'],
      ['La connexion échoue.', 'Copiez et collez les renseignements. Les claviers de téléphone peuvent mettre la première lettre en majuscule ou ajouter une espace à la fin.'],
    ],
  },
  tablet: {
    name: 'Tablette',
    short: 'Installation sur iPad et tablette Android avec IPTV Smarters Pro ou GSE Smart IPTV.',
    intro: 'Les iPad et les tablettes Android offrent un écran plus grand qu’un téléphone tout en restant portables. L’installation utilise la même connexion Xtream Codes.',
    steps: [
      'Ouvrez l’App Store (iPad) ou Google Play (tablette Android).',
      'Installez <strong>IPTV Smarters Pro</strong> ou <strong>GSE Smart IPTV</strong>.',
      'Ouvrez l’application et choisissez <strong>Add New User</strong> / <strong>Remote Playlists → Add New</strong>.',
      'Choisissez <strong>Xtream Codes</strong> et saisissez votre <strong>URL de serveur, nom d’utilisateur et mot de passe</strong>.',
      'Enregistrez et attendez le chargement de vos chaînes.',
    ],
    seoTitle: 'IPTV sur tablette : guide d’installation de Prime IPTV',
    seoDescription: 'Comment installer Prime IPTV sur iPad et tablette Android avec IPTV Smarters Pro ou GSE Smart IPTV.',
    h1: 'Installer Prime IPTV sur une tablette',
    tips: [
      'Utilisez un support ou un étui pour regarder confortablement de longs programmes.',
    ],
    needs: [
      'Un iPad ou une tablette Android avec un système d’exploitation récent.',
      'Vos identifiants Prime IPTV reçus par WhatsApp ou par courriel.',
      'IPTV Smarters Pro ou GSE Smart IPTV depuis l’App Store ou Google Play.',
      'Le Wi-Fi pour la diffusion la plus fiable.',
    ],
    issues: [
      ['Le lecteur affiche une présentation étirée de téléphone.', 'Certains lecteurs sont conçus pour les téléphones. Passez en mode paysage, ou essayez un autre lecteur de notre comparaison.'],
      ['Les flux se mettent en mémoire tampon quand la tablette est loin du routeur.', 'Les tablettes dépendent du Wi-Fi. Rapprochez-vous du routeur ou utilisez le réseau de 5 GHz.'],
      ['L’application se ferme quand je passe à une autre.', 'Gardez le lecteur au premier plan, ou utilisez l’image dans l’image lorsque le lecteur la prend en charge.'],
      ['La connexion échoue.', 'Copiez et collez les renseignements et vérifiez qu’il n’y a pas de majuscule au début ou d’espace à la fin.'],
    ],
  },
  computer: {
    name: 'Ordinateur (Windows / Mac)',
    short: 'Utilisez VLC, IPTV Smarters Pro pour ordinateur ou un autre lecteur IPTV de bureau.',
    intro: 'Sur un PC Windows ou un Mac, vous pouvez utiliser un lecteur IPTV de bureau ou un lecteur multimédia général comme VLC pour ouvrir votre liste de lecture Prime IPTV.',
    steps: [
      'Téléchargez un lecteur IPTV de bureau comme <strong>IPTV Smarters Pro</strong> (Windows/Mac) ou installez <strong>VLC Media Player</strong>.',
      'Dans un lecteur IPTV : choisissez <strong>Add User</strong> → <strong>Login with Xtream Codes API</strong> et saisissez votre <strong>URL de serveur, nom d’utilisateur et mot de passe</strong>.',
      'Dans VLC : ouvrez <strong>Média → Ouvrir un flux réseau</strong> et collez l’<strong>URL de la liste de lecture M3U</strong> fournie avec votre activation.',
      'Attendez le chargement de la liste des chaînes, puis choisissez une chaîne pour commencer à regarder.',
    ],
    seoTitle: 'IPTV sur ordinateur Windows et Mac : guide de Prime IPTV',
    seoDescription: 'Comment regarder Prime IPTV sur Windows et Mac avec VLC ou un lecteur IPTV de bureau : connexion Xtream Codes ou liste de lecture M3U.',
    h1: 'Regarder Prime IPTV sur ordinateur (Windows et Mac)',
    tips: [
      'Demandez un lien M3U au soutien si vous voulez utiliser VLC ou un autre lecteur à liste de lecture.',
    ],
    needs: [
      'Un PC Windows ou un Mac connecté à Internet.',
      'VLC Media Player (gratuit) ou un lecteur IPTV de bureau.',
      'Votre lien de liste de lecture M3U pour VLC (demandez-le au soutien si vous n’avez reçu que des identifiants Xtream Codes), ou la connexion Xtream pour un lecteur IPTV de bureau.',
      'Une connexion filaire si possible.',
    ],
    issues: [
      ['VLC affiche une longue liste sans guide des programmes.', 'VLC lit les flux, mais n’est pas conçu autour d’un guide ou de catégories. Utilisez un lecteur IPTV de bureau si vous voulez l’EPG et une vidéothèque.'],
      ['La liste de lecture ne se charge pas.', 'Copiez de nouveau le lien en entier et assurez-vous qu’il n’y a pas d’espaces en trop ni de caractères manquants.'],
      ['La lecture saccade.', 'Fermez les applications lourdes et les onglets du navigateur, utilisez Ethernet et mettez à jour VLC ou votre lecteur.'],
      ['Il n’y a pas de son ou pas d’image.', 'Vérifiez le périphérique de sortie et essayez une autre sortie vidéo ou un autre décodeur dans les réglages du lecteur.'],
    ],
  },
  mag: {
    name: 'Boîtier MAG',
    short: 'Envoyez-nous votre adresse MAC sur WhatsApp; nous activons votre boîtier et vous envoyons vos liens de portail.',
    intro: 'Les décodeurs MAG s’activent par l’adresse MAC du boîtier. Vous nous écrivez sur WhatsApp, nous envoyez l’adresse MAC de votre boîtier MAG, et nous activons votre abonnement et vous envoyons vos liens de portail.',
    steps: [
      'Trouvez l’<strong>adresse MAC</strong> sur l’étiquette à l’arrière ou sous votre boîtier MAG (ou dans ses informations système).',
      'Écrivez-nous sur <strong>WhatsApp</strong> et envoyez-nous l’<strong>adresse MAC de votre boîtier MAG</strong>.',
      'Nous <strong>activons votre abonnement</strong> et vous envoyons vos <strong>liens de portail</strong>.',
      'Saisissez le lien de portail dans les réglages de portail de votre boîtier, enregistrez et <strong>redémarrez le boîtier</strong>. Votre offre Prime IPTV se charge au démarrage.',
    ],
    note: 'Votre adresse MAC est la façon dont nous activons votre boîtier; envoyez-la donc exactement comme elle apparaît sur l’étiquette.',
    whatsappPrompt: 'Bonjour Prime IPTV, je voudrais activer mon boîtier MAG. Mon adresse MAC est : ',
    seoTitle: 'IPTV sur boîtier MAG : guide d’activation de Prime IPTV',
    seoDescription: 'Comment activer Prime IPTV sur un boîtier MAG : envoyez votre adresse MAC sur WhatsApp et recevez vos liens de portail.',
    h1: 'Activer Prime IPTV sur un boîtier MAG',
    tips: [
      'Gardez le boîtier relié au routeur par Ethernet pour une diffusion plus fiable.',
    ],
    needs: [
      'Un décodeur MAG branché à votre téléviseur et à votre routeur.',
      'L’adresse MAC imprimée sur le boîtier, nécessaire à l’activation.',
      'Les liens de portail que nous vous envoyons après que vous nous avez écrit votre adresse MAC sur WhatsApp.',
      'Ethernet vers le routeur est recommandé.',
    ],
    issues: [
      ['Le portail ne se charge pas.', 'Confirmez que vous nous avez envoyé la bonne adresse MAC et que le lien de portail a été saisi exactement tel que nous l’avons envoyé, puis redémarrez le boîtier.'],
      ['Je ne sais pas quelle adresse MAC utiliser.', 'Utilisez l’adresse inscrite sur l’étiquette du boîtier ou dans ses informations système. Une différence empêche l’activation.'],
      ['Il n’y a aucune chaîne après le redémarrage.', 'Vérifiez que le boîtier a accès à Internet et que le portail est enregistré dans les réglages de portail, puis redémarrez de nouveau.'],
      ['L’image semble anormale.', 'Vérifiez le câble HDMI et le mode vidéo dans les réglages du boîtier.'],
    ],
  },
};
