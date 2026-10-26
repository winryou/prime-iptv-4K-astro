export interface CityFr {
  frTitle?: string;
  frH1?: string;
  frMeta?: string;
  tagline: string;
  intro: string;
  lifestyle: string;
  communities: string;
  sports: string;
  internet: string;
  faqs: [string, string][];
  extra?: { title: string; text: string }[];
}

/** French copy per city slug. Names, areas and nearby cities come from cities.ts. */
export const citiesFr: Record<string, CityFr> = {
  toronto: {
    tagline: 'Télé en direct, sports et chaînes internationales pour la région du Grand Toronto',
    intro: 'Toronto est l’une des villes les plus multilingues au monde, et c’est là qu’un abonnement IPTV prend tout son sens. Prime IPTV offre aux foyers du Grand Toronto des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et une grande vidéothèque, le tout sur la connexion Internet qu’ils paient déjà.',
    lifestyle: 'Une bonne partie de Toronto vit en copropriété ou en appartement, où il n’y a pas de place pour un décodeur dans chaque pièce et où le bail n’est pas toujours long. L’IPTV fonctionne sur un téléviseur intelligent, une Firestick ou un téléphone, déménage avec vous et n’exige aucun contrat. Les longs trajets en TTC et en train GO se remplissent aussi facilement, car le même identifiant fonctionne sur un téléphone ou une tablette.',
    communities: 'Bien des foyers du Grand Toronto veulent de la télé de plus d’un pays. Prime IPTV comprend des chaînes d’autres pays en plus des chaînes canadiennes et américaines, de sorte qu’un seul abonnement peut servir toute la famille, des grands-parents qui veulent des émissions de chez eux aux enfants qui veulent des dessins animés. Demandez l’essai gratuit et vérifiez les langues et les chaînes dont votre foyer a besoin avant de payer.',
    sports: 'Toronto est une ville de hockey, de basketball, de baseball et de soccer, et les partisans suivent souvent des équipes de plusieurs ligues à la fois. Prime IPTV comprend du sport canadien, américain et international, ainsi que des chaînes PPV en 4K et en FHD. Servez-vous de l’essai pour vérifier les matchs et la qualité d’image un soir qui compte pour vous.',
    internet: 'Dans les grands immeubles en copropriété, le Wi-Fi peut être saturé en soirée. Si votre téléviseur ou votre Firestick le permet, utilisez une connexion Ethernet filaire, ou placez le routeur dans la même pièce. Visez environ 10 Mb/s par écran HD et 25 Mb/s ou plus par écran 4K.',
    faqs: [
      ['Prime IPTV fonctionne-t-il à Mississauga, Brampton et dans le reste du Grand Toronto?', 'Oui. L’IPTV passe par Internet, donc il fonctionne partout dans la région avec une connexion stable, y compris à Mississauga, Brampton, Vaughan, Markham et Oakville.'],
      ['L’IPTV fonctionnera-t-il sur le Wi-Fi de mon condo?', 'En général, oui, mais un Wi-Fi partagé peut ralentir en soirée. Une connexion filaire ou un routeur dans la même pièce que le téléviseur règle la plupart des problèmes de mise en mémoire tampon. Testez aux heures de pointe pendant votre essai gratuit.'],
      ['Toute ma famille peut-elle regarder en même temps?', 'Les forfaits couvrent de 1 à 4 connexions. Une connexion correspond à un flux en cours de lecture; comptez donc le plus grand nombre d’écrans qui pourraient jouer en même temps.'],
    ],
  },
  montreal: {
    frTitle: 'IPTV Montréal : TV IP et abonnement Prime IPTV',
    frH1: 'TV IP Montréal : Prime IPTV pour les spectateurs de Montréal',
    frMeta: 'TV IP à Montréal : abonnement Prime IPTV avec plus de 25 000 chaînes, sports et PPV. Essai gratuit de 24 heures, sans carte de crédit.',
    tagline: 'L’IPTV pour les foyers montréalais, en français comme en anglais',
    intro: 'Vous cherchez de la TV IP à Montréal? Les foyers montréalais passent du français à l’anglais toute la journée, et plusieurs veulent aussi des chaînes d’autres pays. La télévision IP (IPTV) permet de tout regarder par Internet, sans décodeur de câble. Prime IPTV offre aux Montréalais des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et des films et séries sur demande dans un seul abonnement, sans contrat de câble.',
    lifestyle: 'Montréal compte beaucoup de locataires et une célèbre journée du déménagement chaque mois de juillet; un abonnement qui vous suit est donc un vrai avantage. Prime IPTV n’exige aucune visite d’installateur ni décodeur au mur : ajoutez votre identifiant dans une application de lecture sur votre nouveau téléviseur intelligent ou votre Firestick, et vous regardez de nouveau.',
    communities: 'Les foyers regardent souvent la télé en plus d’une langue. Prime IPTV offre des chaînes d’autres pays en plus des chaînes canadiennes et américaines. Nous ne publions pas de liste de chaînes; écrivez-nous sur WhatsApp ou utilisez l’essai de 24 heures pour confirmer les chaînes en français et dans d’autres langues que vous souhaitez.',
    sports: 'Le hockey est un mode de vie à Montréal, et le soccer et les fins de semaine de Formule 1 ont aussi leurs adeptes. Prime IPTV comprend du sport canadien, américain et international et des chaînes PPV en 4K et en FHD. Vérifiez pendant l’essai gratuit les matchs qui vous intéressent.',
    internet: 'La plus grande partie du Grand Montréal bénéficie d’un bon accès à large bande, mais les immeubles plus anciens peuvent avoir un Wi-Fi faible dans les pièces éloignées. Une connexion filaire, ou un point Wi-Fi maillé près du téléviseur, rend la diffusion plus stable. Prévoyez environ 10 Mb/s par écran HD et 25 Mb/s ou plus pour le 4K.',
    faqs: [
      ['Prime IPTV est-il offert en français?', 'Notre site est surtout en anglais, avec cette version française pour l’essentiel. Écrivez-nous sur WhatsApp en français ou en anglais et nous vous dirons ce qui est offert avant l’achat. L’essai gratuit vous permet de vérifier les chaînes vous-même.'],
      ['Prime IPTV fonctionne-t-il à Laval, à Longueuil et dans l’Ouest-de-l’Île?', 'Oui. Il fonctionne sur toute connexion Internet stable, donc partout dans le Grand Montréal.'],
      ['Qu’est-ce que la télévision IP (TV IP) à Montréal?', 'La télévision IP, ou IPTV, livre les chaînes par Internet plutôt que par un décodeur de câble. À Montréal, il suffit d’une connexion stable, d’un appareil et d’une application de lecture compatible; Prime IPTV fournit l’abonnement et l’identifiant.'],
      ['Faut-il signer un contrat?', 'Non. Il n’y a aucun contrat et l’annulation est possible. Une garantie de remboursement de 7 jours s’applique aussi.'],
    ],
  },
  vancouver: {
    tagline: 'L’IPTV pour Vancouver et le Lower Mainland',
    intro: 'Des condos de Yaletown aux maisons familiales de Surrey, les foyers du Grand Vancouver veulent une plus grande sélection sans une plus grosse facture de câble. Prime IPTV offre aux Vancouvérois des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et une grande vidéothèque sur leur propre connexion Internet.',
    lifestyle: 'Beaucoup de foyers vancouvérois sont locataires ou vivent dans des immeubles en copropriété où installer une antenne parabolique ou tirer un nouveau câble n’est pas simple. L’IPTV n’exige ni l’un ni l’autre. Vous utilisez un appareil que vous possédez déjà, et vous gardez votre abonnement si vous déménagez dans le Lower Mainland.',
    communities: 'Le Grand Vancouver abrite de grandes communautés du monde entier, et bien des spectateurs veulent des émissions de leur pays d’origine en plus de la télé canadienne et américaine. Prime IPTV comprend des chaînes d’autres pays. Demandez l’essai gratuit et confirmez celles dont votre foyer a besoin avant de vous abonner.',
    sports: 'Les heures de début en début de soirée pour les matchs de la côte Est et des États-Unis sont un défi courant dans le fuseau horaire du Pacifique. Avec un guide des programmes et un accès 24 heures sur 24, vous choisissez vos matchs à votre rythme. Prime IPTV comprend du sport canadien, américain et international et du PPV en 4K et en FHD.',
    internet: 'Le Grand Vancouver offre une bonne large bande presque partout, mais vérifiez la vitesse en banlieue éloignée et dans les immeubles plus anciens. Environ 10 Mb/s par écran HD et 25 Mb/s ou plus par écran 4K constituent un bon repère. Utilisez Ethernet quand vous le pouvez.',
    faqs: [
      ['Prime IPTV fonctionne-t-il dans tout le Lower Mainland?', 'Oui. Surrey, Burnaby, Richmond, Langley et le reste du Grand Vancouver fonctionnent, pourvu que vous ayez une connexion Internet stable.'],
      ['Les matchs sont-ils à des heures peu pratiques à cause du fuseau horaire?', 'Les événements en direct passent à l’heure de leur diffusion, ce qui peut être tôt sur la côte du Pacifique. Le guide des programmes de votre lecteur montre ce qui est à l’horaire, et certains lecteurs offrent le rattrapage, selon l’application.'],
      ['Puis-je utiliser Prime IPTV sur mon téléphone hors de la maison?', 'Oui. Le même identifiant fonctionne sur les applications compatibles pour téléphone et tablette, dans la limite de connexions de votre forfait.'],
    ],
  },
  calgary: {
    tagline: 'L’IPTV pour les foyers de Calgary et la saison du Stampede',
    intro: 'Calgary est une ville de sport à la population jeune et en croissance, et bien des foyers cherchent une solution de rechange aux forfaits de câble coûteux. Prime IPTV offre aux Calgariens des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et des films et séries sur demande.',
    lifestyle: 'Calgary compte de nombreux quartiers récents dont les maisons sont organisées autour d’une grande salle de télé au sous-sol et d’un salon à l’étage. Avec des forfaits allant jusqu’à 4 connexions, un seul abonnement Prime IPTV peut servir le téléviseur principal, le sous-sol, une chambre et un téléphone.',
    communities: 'Calgary accueille des nouveaux arrivants du monde entier, et plusieurs veulent la télé de chez eux en plus des émissions canadiennes et américaines. Prime IPTV comprend des chaînes d’autres pays. Utilisez l’essai gratuit pour confirmer celles dont vous avez besoin.',
    sports: 'Le hockey, le football et la saison des rodéos ont tous leurs partisans ici, et les Albertains suivent aussi de près les ligues américaines. Prime IPTV comprend du sport canadien, américain et international et des chaînes PPV en 4K et en FHD. Testez pendant l’essai les matchs qui vous intéressent.',
    internet: 'La plupart des quartiers de Calgary ont une bonne large bande. Dans les lotissements ruraux et les petites villes autour, vérifiez d’abord votre vitesse, car les connexions rurales varient. Il faut environ 10 Mb/s par écran HD et 25 Mb/s ou plus pour le 4K.',
    faqs: [
      ['Prime IPTV fonctionne-t-il à Airdrie, à Cochrane et à Okotoks?', 'Oui, partout où vous avez une connexion Internet stable. Vérifiez votre vitesse d’abord si vous habitez sur un grand terrain rural.'],
      ['Sur combien d’écrans puis-je regarder?', 'Les forfaits couvrent de 1 à 4 connexions, soit jusqu’à quatre flux en même temps.'],
      ['Y a-t-il un essai gratuit?', 'Oui. L’essai gratuit de 24 heures ne demande pas de carte de crédit et est envoyé par WhatsApp ou par courriel.'],
    ],
  },
  edmonton: {
    tagline: 'L’IPTV pour Edmonton et le nord de l’Alberta',
    intro: 'Les foyers d’Edmonton regardent beaucoup la télé pendant les longs hivers, et bien des gens veulent un grand choix sans payer un gros forfait de câble. Prime IPTV offre aux Edmontoniens des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et une vaste vidéothèque.',
    lifestyle: 'Quand il fait moins 30 dehors, une immense vidéothèque sur demande et un guide rempli de chaînes en direct, c’est précieux. Prime IPTV fonctionne sur le téléviseur intelligent ou la clé de diffusion que vous possédez déjà, sans installateur et sans contrat.',
    communities: 'Edmonton compte des communautés bien établies de nombreux pays, et les familles veulent souvent des émissions dans plus d’une langue. Prime IPTV comprend des chaînes d’autres pays. Demandez l’essai gratuit et vérifiez les chaînes dont votre foyer a besoin.',
    sports: 'Le hockey règne à Edmonton, et bien des partisans suivent aussi le football, le basketball et le soccer. Prime IPTV comprend du sport canadien, américain et international et du PPV en 4K et en FHD. Utilisez l’essai pour tester les matchs qui vous intéressent.',
    internet: 'Edmonton et ses banlieues ont une bonne large bande. Dans les petites villes, vérifiez la vitesse avant de vous abonner. Prévoyez environ 10 Mb/s par écran HD et 25 Mb/s ou plus pour le 4K.',
    faqs: [
      ['Prime IPTV fonctionne-t-il à St. Albert et à Sherwood Park?', 'Oui. Tout endroit où vous avez une connexion Internet stable fonctionne, y compris St. Albert, Sherwood Park, Spruce Grove et Leduc.'],
      ['Puis-je annuler si je ne suis pas satisfait?', 'Il n’y a aucun contrat et l’annulation est possible. Une garantie de remboursement de 7 jours s’applique, et la politique de remboursement explique comment la demander.'],
      ['Quels appareils fonctionnent?', 'Les téléviseurs intelligents, Fire TV et Firestick, Android TV, Apple TV, Roku, téléphones, tablettes, ordinateurs et boîtiers MAG, avec une application de lecture compatible.'],
    ],
  },
  ottawa: {
    tagline: 'L’IPTV pour Ottawa, Gatineau et la région de la capitale nationale',
    intro: 'Ottawa est une ville bilingue qui compte beaucoup de fonctionnaires, d’étudiants et de foyers qui passent du français à l’anglais. Prime IPTV offre aux spectateurs d’Ottawa et de Gatineau des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et des films et séries sur demande.',
    lifestyle: 'Les étudiants, les diplomates et les employés du gouvernement déménagent souvent avec peu de préavis. L’IPTV n’a aucun équipement à retourner ni installateur à réserver, ce qui convient bien aux logements loués et aux affectations temporaires. Vous pouvez aussi l’utiliser sur un portable ou un téléphone.',
    communities: 'Ottawa a une grande communauté diplomatique et de nouveaux arrivants, ainsi que de nombreux foyers bilingues. Prime IPTV comprend des chaînes d’autres pays en plus des chaînes canadiennes et américaines. Nous ne publions pas de liste de chaînes; confirmez pendant l’essai gratuit les chaînes en français et dans d’autres langues que vous voulez.',
    sports: 'Le hockey et le football de la LCF sont populaires dans la capitale, et plusieurs suivent aussi les ligues américaines. Prime IPTV comprend du sport canadien, américain et international et des chaînes PPV en 4K et en FHD.',
    internet: 'La plus grande partie d’Ottawa a une bonne large bande. Dans les maisons anciennes du centre, le Wi-Fi peut être faible dans les pièces éloignées; une connexion filaire ou un Wi-Fi maillé aide. Prévoyez environ 10 Mb/s par écran HD et 25 Mb/s ou plus pour le 4K.',
    faqs: [
      ['Prime IPTV fonctionne-t-il à Gatineau?', 'Oui. Il fonctionne dans toute la région de la capitale nationale, des deux côtés de la rivière, sur toute connexion Internet stable.'],
      ['Est-ce bien pour les étudiants?', 'Beaucoup d’étudiants l’aiment parce qu’il n’y a ni contrat ni équipement. Vous pouvez annuler, et la garantie de remboursement de 7 jours s’applique.'],
      ['Puis-je regarder sur mon portable?', 'Oui, avec un lecteur compatible sur votre ordinateur.'],
    ],
  },
  quebec: {
    tagline: 'L’IPTV partout au Québec, de la ville de Québec à la Côte-Nord, en français et en anglais',
    intro: 'Les foyers québécois sont en grande majorité francophones, et plusieurs veulent aussi des chaînes anglaises, américaines et internationales sous le même toit. Prime IPTV offre aux spectateurs de la ville de Québec, de Lévis, de Gatineau, de Sherbrooke, de Trois-Rivières, du Saguenay, de la Côte-Nord et du reste de la province des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et une grande vidéothèque, sans contrat. Que vous cherchiez un abonnement IPTV au Québec, un essai gratuit ou un forfait pas cher, tout se fait sur WhatsApp, en français.',
    lifestyle: 'Le Québec compte beaucoup de vieux bâtiments en pierre où tirer un nouveau câble ou installer une antenne est difficile, et de nombreuses régions où les forfaits de câble sont chers et les choix limités. L’IPTV n’exige qu’une connexion Internet stable et un appareil que vous possédez déjà. Les soirées d’hiver sont longues, et une grande vidéothèque sur demande aide.',
    communities: 'Bien des foyers veulent regarder des chaînes en français et en anglais sous le même toit. Prime IPTV comprend des chaînes d’autres pays en plus des chaînes canadiennes et américaines. Nous ne publions pas de liste de chaînes; confirmez les chaînes en français que vous voulez pendant l’essai gratuit ou en nous écrivant en français sur WhatsApp.',
    sports: 'Le hockey est le principal intérêt, et plusieurs suivent aussi le soccer, le sport automobile et les ligues américaines. Prime IPTV comprend du sport canadien, américain et international et des chaînes PPV en 4K et en FHD.',
    internet: 'Vérifiez votre vitesse avant de vous abonner si vous habitez hors d’un grand centre, car les connexions en région et sur la Côte-Nord varient. Il faut environ 10 Mb/s par écran HD et 25 Mb/s ou plus pour le 4K. Une connexion filaire est la plus fiable pour le téléviseur principal.',
    faqs: [
      ['Y a-t-il une version française du service?', 'Oui. Ce site a une version française à /fr/, et vous pouvez nous écrire en français sur WhatsApp. Dites-nous quelles chaînes en français vous voulez avant d’acheter, et utilisez l’essai gratuit pour les vérifier vous-même.'],
      ['L’IPTV fonctionne-t-il sur la Côte-Nord et dans les autres régions du Québec?', 'Oui, partout où vous avez une connexion Internet stable. Faites d’abord un test de vitesse si vous êtes hors d’un grand centre.'],
      ['Quelle différence entre un abonnement IPTV et une TV box?', 'Une TV box est un appareil; l’abonnement IPTV est le service qui fournit les chaînes. Vous pouvez regarder Prime IPTV sur un téléviseur intelligent, une Firestick, un boîtier Android ou un téléphone, sans boîtier spécial.'],
      ['Combien coûte un abonnement IPTV au Québec?', 'Les forfaits commencent à 34,99 $ CAD pour 3 mois. Vous choisissez de 1 à 4 connexions et 3, 6, 12 ou 24 mois, sans contrat.'],
      ['Comment puis-je payer?', 'Appuyez sur « Acheter maintenant » sur un forfait et WhatsApp s’ouvre avec le forfait déjà dans le message. Nous vous envoyons les détails de paiement là-bas.'],
    ],
    extra: [
      { title: 'Meilleur IPTV au Québec : comment choisir', text: 'Le meilleur IPTV pour un foyer québécois est un service que vous pouvez tester d’abord, avec des prix clairs, une politique de remboursement et un soutien qui répond en français. Prime IPTV offre un essai gratuit de 24 heures sans carte de crédit, des prix publiés, une garantie de remboursement de 7 jours et un soutien WhatsApp en français et en anglais.' },
      { title: 'IPTV québécois : TV IP, abonnement premium et chaînes en français', text: 'Un IPTV québécois, c’est d’abord un service qui comprend le français et vos habitudes : TV IP par Internet, abonnement sans contrat et soutien en français. Prime IPTV offre un abonnement IPTV premium pour le Québec avec chaînes canadiennes, américaines et d’autres pays, sport et PPV. Dites-nous sur WhatsApp ce que vous cherchez; nous répondons avant l’achat.' },
      { title: 'IPTV essai gratuit au Québec', text: 'Demandez l’essai gratuit sur WhatsApp en français ou en anglais, indiquez-nous votre appareil, et nous vous envoyons votre identifiant d’essai. Utilisez les 24 heures pour vérifier vos chaînes, un match en direct et la qualité d’image sur votre propre connexion.' },
      { title: 'IPTV pas cher au Québec : forfaits dès 34,99 $ CAD', text: 'Les forfaits commencent à 34,99 $ CAD pour 3 mois, soit environ 11,66 $ par mois. Le forfait de 24 mois revient à environ 5,21 $ par mois, avec 2 mois gratuits en prime. Il n’y a aucun contrat. Ce sont les prix pour 1 connexion; les forfaits de 2, 3 et 4 connexions coûtent plus cher, et la page des tarifs les montre tous. Un abonnement IPTV au Québec, c’est aussi la possibilité de regarder à la Côte-Nord ou en région, partout où votre Internet est stable (voir la page IPTV Côte-Nord).' },
    ],
  },
  winnipeg: {
    tagline: 'L’IPTV pour Winnipeg et le Manitoba',
    intro: 'Les hivers de Winnipeg sont longs, et une bonne télé compte. Prime IPTV offre aux spectateurs de Winnipeg et du Manitoba des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et une grande vidéothèque, sans contrat de câble.',
    lifestyle: 'Les maisons de Winnipeg ont souvent un salon qui sert de salle de télé principale, plus un écran au sous-sol ou dans une chambre. Avec de 1 à 4 connexions par forfait, un seul abonnement peut tous les servir. Aucune visite d’installateur n’est nécessaire.',
    communities: 'Winnipeg abrite des communautés bien établies du monde entier, et bien des familles aiment avoir des émissions de plus d’un pays. Prime IPTV comprend des chaînes d’autres pays. Utilisez l’essai gratuit pour vérifier celles dont votre foyer a besoin.',
    sports: 'Le hockey et le football de la LCF sont les grands attraits, et plusieurs Winnipegois suivent aussi les ligues américaines. Prime IPTV comprend du sport canadien, américain et international et des chaînes PPV en 4K et en FHD.',
    internet: 'La plus grande partie de Winnipeg a une bonne large bande. À l’extérieur de la ville, les vitesses varient; vérifiez donc la vôtre. Il faut environ 10 Mb/s par écran HD et 25 Mb/s ou plus pour le 4K.',
    faqs: [
      ['Prime IPTV fonctionne-t-il dans les régions rurales du Manitoba?', 'Il fonctionne partout où vous avez une connexion Internet stable. Les vitesses rurales varient; faites d’abord un test de vitesse et utilisez l’essai gratuit.'],
      ['Puis-je l’utiliser sur plus d’un téléviseur?', 'Oui, jusqu’au nombre de connexions de votre forfait, soit de 1 à 4.'],
      ['Combien de temps prend l’activation?', 'Normalement, quelques minutes après le paiement. Votre identifiant arrive par courriel ou par WhatsApp.'],
    ],
  },
  hamilton: {
    tagline: 'L’IPTV pour Hamilton, Burlington et le Golden Horseshoe',
    intro: 'Hamilton et ses voisines comptent des familles établies de longue date, des étudiants et des nouveaux arrivants venus du Grand Toronto, et plusieurs cherchent une meilleure offre que le câble. Prime IPTV offre aux spectateurs de Hamilton des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et des films et séries sur demande.',
    lifestyle: 'Bien des foyers de Hamilton ont quitté Toronto pour avoir plus d’espace, et ils veulent souvent garder le grand choix sans la grosse facture. Prime IPTV fonctionne de la même façon sur Internet à Hamilton qu’en ville, et vous pouvez l’utiliser sur tous les écrans d’une grande maison.',
    communities: 'Hamilton compte des communautés établies de longue date du monde entier. Prime IPTV comprend des chaînes d’autres pays en plus des chaînes canadiennes et américaines. Utilisez l’essai gratuit pour confirmer les chaînes que votre foyer veut.',
    sports: 'Le football et le hockey sont populaires ici, et plusieurs partisans suivent aussi les équipes de Toronto et des États-Unis. Prime IPTV comprend du sport canadien, américain et international et des chaînes PPV en 4K et en FHD.',
    internet: 'La plus grande partie de Hamilton a une bonne large bande. Les grandes maisons peuvent avoir besoin d’un système Wi-Fi maillé ou d’une connexion filaire pour atteindre le téléviseur le plus éloigné. Prévoyez environ 10 Mb/s par écran HD et 25 Mb/s ou plus pour le 4K.',
    faqs: [
      ['Prime IPTV fonctionne-t-il à Burlington et à Ancaster?', 'Oui. Tout endroit où vous avez une connexion Internet stable fonctionne, dans Hamilton et le Golden Horseshoe.'],
      ['Est-ce moins cher que le câble?', 'Les prix sont publiés sur la page des tarifs, avec des forfaits à partir de 34,99 $ pour 3 mois. Comparez avec votre facture actuelle et utilisez d’abord l’essai gratuit.'],
      ['Dois-je acheter de l’équipement?', 'Aucun boîtier spécial. La plupart des gens utilisent un téléviseur intelligent, une Firestick ou un téléphone avec une application de lecture compatible.'],
    ],
  },
  halifax: {
    tagline: 'L’IPTV pour Halifax et le Canada atlantique',
    intro: 'Halifax est une ville universitaire et une plaque tournante du Canada atlantique, avec beaucoup d’étudiants, de familles de militaires et de foyers qui veulent plus de choix qu’un forfait de câble de base. Prime IPTV offre aux spectateurs d’Halifax et de l’Atlantique des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et une grande vidéothèque.',
    lifestyle: 'Les étudiants et les familles qui déménagent pour les études ou une affectation apprécient que l’IPTV n’ait ni équipement à retourner ni contrat à rompre. Il fonctionne aussi dans tout le Canada atlantique, donc il vous suit d’Halifax à Moncton ou à St. John’s.',
    communities: 'Le Canada atlantique compte des communautés établies de longue date et un nombre croissant de nouveaux arrivants. Prime IPTV comprend des chaînes d’autres pays en plus des chaînes canadiennes et américaines. Utilisez l’essai gratuit pour confirmer celles que vous voulez.',
    sports: 'Le hockey est le principal attrait, avec un fort intérêt pour les ligues américaines et le soccer international. Prime IPTV comprend du sport canadien, américain et international et des chaînes PPV en 4K et en FHD. Vérifiez les matchs précis pendant l’essai.',
    internet: 'Halifax et Dartmouth ont une bonne large bande. Dans les petites localités de l’Atlantique, les vitesses varient; faites d’abord un test de vitesse. Il faut environ 10 Mb/s par écran HD et 25 Mb/s ou plus pour le 4K.',
    faqs: [
      ['Prime IPTV fonctionne-t-il dans tout le Canada atlantique?', 'Oui. Il fonctionne partout en Nouvelle-Écosse, au Nouveau-Brunswick, à l’Île-du-Prince-Édouard et à Terre-Neuve-et-Labrador avec une connexion Internet stable.'],
      ['Est-ce bien pour les étudiants?', 'Beaucoup d’étudiants l’apprécient pour l’absence de contrat et d’équipement. L’annulation est possible et la garantie de remboursement de 7 jours s’applique.'],
      ['Et si mon Internet est lent?', 'Essayez d’abord une connexion filaire. Consultez le guide des vitesses pour connaître celles dont vous avez besoin et testez pendant votre essai gratuit.'],
    ],
  },
  brampton: {
    tagline: 'L’IPTV pour les foyers de Brampton, avec des chaînes du monde entier',
    intro: 'Brampton est l’une des villes les plus diversifiées et à la croissance la plus rapide du Canada, avec de grands foyers multigénérationnels qui veulent de la télé de plus d’un pays. Prime IPTV offre aux spectateurs de Brampton des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et une grande vidéothèque sur leur propre connexion Internet, sans contrat.',
    lifestyle: 'Bien des maisons de Brampton réunissent plusieurs générations et font fonctionner plus d’un téléviseur à la fois : salon, sous-sol et chambres. Avec des forfaits jusqu’à 4 connexions, un seul abonnement peut tous les servir, sans décodeur à louer pour chaque téléviseur ni visite d’installateur.',
    communities: 'Brampton compte de grandes communautés d’Asie du Sud et de nombreuses autres régions du monde, et les familles veulent souvent des chaînes dans plusieurs langues. Prime IPTV comprend des chaînes d’autres pays. Nous ne publions pas de liste de chaînes; demandez l’essai gratuit ou écrivez-nous sur WhatsApp pour confirmer les langues et les chaînes dont votre foyer a besoin avant de payer.',
    sports: 'Le hockey, le basketball et le soccer sont populaires ici, et le cricket compte pour bien des foyers. Prime IPTV comprend du sport canadien, américain et international et des chaînes PPV en 4K et en FHD. Dites-nous les matchs que vous suivez et testez-les pendant l’essai.',
    internet: 'La plus grande partie de Brampton a une bonne large bande, mais un grand foyer qui diffuse sur plusieurs écrans à la fois a besoin de marge. Additionnez environ 10 Mb/s par écran HD et 25 Mb/s ou plus par écran 4K, et utilisez une connexion filaire pour le téléviseur principal.',
    faqs: [
      ['Prime IPTV fonctionne-t-il à Bramalea, à Springdale et dans le reste de Brampton?', 'Oui. Il fonctionne partout à Brampton et dans la région de Peel avec une connexion Internet stable.'],
      ['Toute la famille peut-elle regarder en même temps?', 'Les forfaits couvrent de 1 à 4 connexions. Une connexion correspond à un flux en cours de lecture; comptez donc le plus grand nombre d’écrans qui pourraient jouer en même temps.'],
      ['Puis-je vérifier d’abord s’il y a des chaînes dans ma langue?', 'Oui. Utilisez l’essai gratuit de 24 heures, ou écrivez-nous sur WhatsApp avant d’acheter en nous indiquant les langues et les chaînes que vous voulez.'],
    ],
  },
  mississauga: {
    tagline: 'L’IPTV pour les condos, maisons en rangée et maisons familiales de Mississauga',
    intro: 'Mississauga combine des tours de condos autour du centre-ville et des quartiers familiaux dans toute la région de Peel, et les foyers de toutes tailles veulent une meilleure offre qu’un forfait de câble. Prime IPTV offre aux spectateurs de Mississauga des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et des films et séries sur demande.',
    lifestyle: 'Bien des résidents de Mississauga font la navette vers Toronto et passent beaucoup de temps dans les trains et les autobus GO. Le même identifiant Prime IPTV fonctionne sur un téléphone ou une tablette; regarder pendant le trajet est donc facile, et à la maison, il fonctionne sur le téléviseur intelligent ou la Firestick que vous possédez déjà, sans rien à retourner si vous déménagez.',
    communities: 'Mississauga abrite des communautés du monde entier, et bien des foyers veulent la télé de leur pays d’origine en plus des chaînes canadiennes et américaines. Prime IPTV comprend des chaînes d’autres pays. Utilisez l’essai gratuit pour confirmer celles que votre foyer veut.',
    sports: 'Les équipes de Toronto sont le principal attrait, avec un fort intérêt pour le soccer, le basketball et le sport international. Prime IPTV comprend du sport canadien, américain et international et des chaînes PPV en 4K et en FHD.',
    internet: 'Dans les tours de condos, le Wi-Fi peut être saturé en soirée. Une connexion filaire ou un routeur dans la même pièce que le téléviseur règle la plupart des problèmes de mise en mémoire tampon. Prévoyez environ 10 Mb/s par écran HD et 25 Mb/s ou plus pour le 4K.',
    faqs: [
      ['Prime IPTV fonctionne-t-il à Port Credit, à Streetsville et à Erin Mills?', 'Oui. Il fonctionne partout à Mississauga avec une connexion Internet stable.'],
      ['Puis-je regarder dans le train GO?', 'Oui, sur une application compatible pour téléphone ou tablette, dans la limite de connexions de votre forfait et de vos données mobiles.'],
      ['Y a-t-il un contrat?', 'Non. Il n’y a aucun contrat et l’annulation est possible. Une garantie de remboursement de 7 jours s’applique.'],
    ],
  },
  ontario: {
    tagline: 'L’IPTV partout en Ontario, du Grand Toronto au Nord',
    intro: 'L’Ontario est la plus grande province du Canada, avec de grandes villes, des banlieues en croissance, des villes universitaires et de petites communautés dans le Nord. Prime IPTV offre aux spectateurs de l’Ontario des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et une grande vidéothèque, sur la connexion Internet qu’ils ont déjà et sans contrat.',
    lifestyle: 'Des condos de Toronto au pays des chalets, les foyers ontariens ont des installations très différentes. L’IPTV fonctionne de la même façon partout : il faut une connexion Internet stable, un appareil que vous possédez déjà et une application de lecture compatible. Aucune visite d’installateur n’est nécessaire, ce qui est pratique pour les chalets et les logements loués.',
    communities: 'L’Ontario abrite des communautés du monde entier, et bien des foyers veulent des émissions de plus d’un pays. Prime IPTV comprend des chaînes d’autres pays en plus des chaînes canadiennes et américaines. Utilisez l’essai gratuit pour confirmer celles que vous voulez.',
    sports: 'Les partisans ontariens suivent le hockey, le basketball, le baseball, le football et le soccer, souvent dans plusieurs ligues à la fois. Prime IPTV comprend du sport canadien, américain et international et des chaînes PPV en 4K et en FHD.',
    internet: 'La large bande est solide en ville, mais les chalets et les communautés du Nord peuvent avoir des connexions plus lentes ou moins stables. Faites un test de vitesse là où vous regarderez. Il faut environ 10 Mb/s par écran HD et 25 Mb/s ou plus pour le 4K.',
    faqs: [
      ['Prime IPTV fonctionne-t-il partout en Ontario?', 'Oui, partout dans la province avec une connexion Internet stable, y compris dans les chalets si vous y avez un Internet fiable.'],
      ['Y a-t-il des guides par ville pour l’Ontario?', 'Oui. Voyez nos pages pour Toronto, Ottawa, Hamilton, Brampton et Mississauga.'],
      ['Combien ça coûte?', 'Les forfaits commencent à 34,99 $ CAD pour 3 mois. Choisissez de 1 à 4 connexions et 3, 6, 12 ou 24 mois.'],
    ],
  },
  surrey: {
    tagline: 'L’IPTV pour Surrey, Langley et la vallée du Fraser',
    intro: 'Surrey est l’une des villes à la croissance la plus rapide de la Colombie-Britannique, avec beaucoup de jeunes familles et de grands foyers multigénérationnels. Prime IPTV offre aux spectateurs de Surrey des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et une grande vidéothèque, sans grosse facture de câble.',
    lifestyle: 'Les maisons de Surrey ont souvent un salon principal, un logement au sous-sol et plusieurs chambres, et chacun veut son propre écran. Avec des forfaits jusqu’à 4 connexions, un seul abonnement peut tous les servir, et vous gardez votre identifiant si vous déménagez dans le Lower Mainland.',
    communities: 'Surrey compte de grandes communautés d’Asie du Sud et du monde entier, et bien des foyers veulent des émissions dans plus d’une langue. Prime IPTV comprend des chaînes d’autres pays. Utilisez l’essai gratuit pour confirmer les langues et les chaînes dont votre foyer a besoin.',
    sports: 'Le hockey, le soccer et le cricket ont tous de fortes communautés de partisans ici, et les heures de début dans le fuseau horaire du Pacifique peuvent être tôt pour les matchs de la côte Est. Prime IPTV comprend du sport canadien, américain et international et du PPV en 4K et en FHD.',
    internet: 'Surrey a une bonne large bande dans la plupart des secteurs, mais vérifiez la vitesse dans les nouveaux quartiers et les secteurs éloignés. Environ 10 Mb/s par écran HD et 25 Mb/s ou plus par écran 4K sont un bon repère.',
    faqs: [
      ['Prime IPTV fonctionne-t-il à Newton, à Fleetwood et à Cloverdale?', 'Oui. Il fonctionne partout à Surrey et dans la vallée du Fraser avec une connexion Internet stable.'],
      ['Y a-t-il un essai gratuit?', 'Oui. L’essai gratuit de 24 heures ne demande pas de carte de crédit et est envoyé par WhatsApp ou par courriel.'],
      ['Combien d’écrans puis-je utiliser?', 'Les forfaits couvrent de 1 à 4 connexions, soit jusqu’à quatre flux en même temps.'],
    ],
  },
  'cote-nord': {
    tagline: 'L’IPTV pour la Côte-Nord : Baie-Comeau, Sept-Îles, Port-Cartier et toute la région',
    intro: 'Sur la Côte-Nord, les distances sont grandes, les choix de télé sont limités et les forfaits de câble coûtent cher pour ce qu’ils offrent. L’IPTV passe par Internet : si vous avez une connexion stable à Baie-Comeau, à Sept-Îles, à Port-Cartier, à Forestville ou à Havre-Saint-Pierre, vous pouvez regarder des chaînes canadiennes et américaines, des chaînes d’autres pays, du sport, du PPV et une grande vidéothèque, sans contrat et sans visite d’installateur. Prime IPTV offre un abonnement IPTV pour la Côte-Nord avec soutien en français sur WhatsApp.',
    lifestyle: 'Entre les chantiers, les quarts de travail, les chalets et les longs hivers, bien des gens de la Côte-Nord regardent la télé à des heures variables. Un guide des programmes complet et une vidéothèque sur demande aident à regarder quand vous êtes disponible, sur le téléviseur du salon, un téléphone ou une tablette.',
    communities: 'Les foyers nord-côtiers sont surtout francophones, mais plusieurs veulent aussi des chaînes anglaises, américaines et d’autres pays. Prime IPTV comprend des chaînes canadiennes et américaines et des chaînes d’autres pays. Nous ne publions pas de liste de chaînes : demandez l’essai gratuit en français sur WhatsApp et vérifiez vous-même les chaînes que vous voulez.',
    sports: 'Le hockey passionne la région, et plusieurs suivent aussi le soccer, la Formule 1 et les ligues américaines. Prime IPTV comprend du sport canadien, américain et international et des chaînes PPV en 4K et en FHD. Testez vos matchs pendant l’essai gratuit.',
    internet: 'La qualité d’Internet varie beaucoup d’une localité à l’autre sur la Côte-Nord, et c’est le facteur le plus important pour l’IPTV. Faites un test de vitesse à l’endroit où vous regarderez : il faut environ 10 Mb/s par écran HD et 25 Mb/s ou plus pour le 4K. Si votre connexion est limitée, choisissez la qualité HD ou FHD plutôt que le 4K et évitez de faire fonctionner plusieurs écrans en même temps.',
    faqs: [
      ['L’IPTV fonctionne-t-il à Baie-Comeau, à Sept-Îles et à Port-Cartier?', 'Oui, partout où vous avez une connexion Internet stable. Faites d’abord un test de vitesse à la maison et profitez de l’essai gratuit de 24 heures pour vérifier la qualité de la lecture.'],
      ['Quelle vitesse Internet faut-il sur la Côte-Nord?', 'Environ 10 Mb/s par écran en HD et 25 Mb/s ou plus pour le 4K. Si votre connexion est plus lente, la HD ou la FHD sur un seul écran fonctionne mieux.'],
      ['Puis-je essayer l’IPTV gratuitement sur la Côte-Nord?', 'Oui. Écrivez-nous en français sur WhatsApp et nous vous envoyons un essai gratuit de 24 heures, sans carte de crédit.'],
      ['Combien coûte un abonnement IPTV?', 'Les forfaits commencent à 34,99 $ CAD pour 3 mois, sans contrat (prix pour 1 connexion; la page des tarifs montre les forfaits de 2, 3 et 4 connexions).'],
    ],
    extra: [
      { title: 'IPTV Côte-Nord : abonnement sans contrat et soutien en français', text: 'Un abonnement IPTV sur la Côte-Nord, c’est la télé par Internet sans décodeur de câble à louer ni contrat à signer. Vous achetez le forfait qui vous convient, de 3 à 24 mois, nous vous envoyons votre identifiant par WhatsApp ou par courriel, et vous l’ajoutez à une application de lecture compatible. Une garantie de remboursement de 7 jours s’applique.' },
    ],
  },
};
