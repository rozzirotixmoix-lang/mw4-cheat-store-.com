import type { ForumPost } from './types';

const toneByCategory: Record<string, ForumPost['categoryTone']> = {
  'MW4 Discussion': 'purple',
  'Gameplay Questions': 'blue',
  'Product Questions': 'purple',
  'Setup & Support': 'green',
  'Game Updates': 'orange',
  'Features & Customization': 'blue',
  'Account & PC Questions': 'green',
  'PC Performance & Support': 'orange',
};

function post(input: Omit<ForumPost, 'categoryTone'>): ForumPost {
  return { ...input, categoryTone: toneByCategory[input.category] ?? 'purple' };
}

export const frForumPosts: ForumPost[] = [
  post({
    slug: 'modern-warfare-4-cheats-working-after-launch',
    category: 'MW4 Discussion',
    title: 'Des triches Modern Warfare 4 confirmées fonctionnelles après le lancement ?',
    excerpt:
      'Les mises à jour de la semaine de lancement rendent difficile de juger anciennes captures et affirmations. Voici des vérifications utiles avant de faire confiance à une déclaration de compatibilité.',
    author: 'QueueGoblin',
    age: '',
    published: '2026-10-26',
    commentsCount: 5,
    upvotes: 41,
    body: [
      'Quelqu\'un sait comment vérifier si une fiche outil MW4 est vraiment à jour ? Le jeu vient de sortir et presque chaque page affiche une capture avec un gros label "working". Ça ne dit pas quand c\'a été testé ni sur quelle version.',
      'Je ne demande à personne de promettre quoi que ce soit. Je veux juste savoir ce que vous vérifiez avant de faire confiance à une page de statut au lieu de perdre une soirée sur quelque chose d\'obsolète.',
    ],
    comments: [
      {
        author: 'packetloss',
        age: '',
        score: 0,
        body: 'Date de la dernière mise à jour, version du jeu prise en charge et un vrai changelog seraient mes trois premiers contrôles. Une capture statique peut venir d\'une build totalement différente.',
      },
      {
        author: 'lowammo',
        age: '',
        score: 0,
        body: 'Aussi, "undetected" n\'est pas la même chose que "fonctionne". Beaucoup mélangent les deux comme s\'ils étaient interchangeables.',
      },
      {
        author: 'QueueGoblin',
        age: '',
        score: 0,
        body: 'Exactement. Qu\'un outil s\'ouvre correctement ne prouve pas non plus la partie importante.',
      },
      {
        author: 'SundayGrind',
        age: '',
        score: 0,
        body: 'Je chercherais un [statut actuel et problèmes connus](/cheats/) et un [contact support](/support/) avant de payer. Si la fiche ne dit pas ce qu\'elle prend en charge, je ne ferai pas le travail d\'enquêteur.',
      },
      {
        author: 'packetloss',
        age: '',
        score: 0,
        body: 'Et vérifiez séparément les [notes de patch de lancement Modern Warfare 4](https://www.callofduty.com/patchnotes/2026/10/call-of-duty-modern-warfare-4-launch-patch-notes). Un patch peut corriger des bugs sans parler d\'outils tiers. N\'y lisez pas trop.',
      },
    ],
  }),
  post({
    slug: 'mw4-esp-vs-minimap',
    category: 'Gameplay Questions',
    title: 'ESP vs minimap normale dans MW4 : quelle est la vraie différence ?',
    excerpt:
      'Discussion en langage simple sur la terminologie ESP, l\'information en jeu et pourquoi ne pas confondre overlays tiers et fonctions HUD intégrées.',
    author: 'minimapEnjoyer',
    age: '',
    published: '2026-08-14',
    commentsCount: 5,
    upvotes: 28,
    body: [
      'Je vois ESP et wallhack utilisés comme la même chose. L\'ESP est-il en gros la minimap avec plus d\'infos, ou le terme veut-il dire autre chose ? Je sais que les mots sont lâches dans les clips ; j\'essaie de séparer le HUD normal du jeu de ce que les outils tiers annoncent.',
    ],
    comments: [
      {
        author: 'oldschoolFPS',
        age: '',
        score: 0,
        body: 'En gros, ESP signifie souvent un overlay qui expose des infos sur joueurs ou objets au-delà de la vue normale. Wallhack renvoie souvent à voir des infos à travers la géométrie. Les termes se chevauchent, mais ne sont pas des synonymes parfaits.',
      },
      {
        author: 'minimapEnjoyer',
        age: '',
        score: 0,
        body: 'Compris. Le point rouge ou ping normal n\'est donc pas automatiquement "ESP" parce qu\'il donne une info ?',
      },
      {
        author: 'oldschoolFPS',
        age: '',
        score: 0,
        body: 'Oui. Prenez le HUD du jeu et ses descriptions officielles comme référence. Les overlays tiers sont une catégorie à part et peuvent violer les règles.',
      },
      {
        author: 'scopeGremlin',
        age: '',
        score: 0,
        body: 'Le vocabulaire gaming est chaotique depuis toujours. Chaque miniature appelle tout wallhack maintenant.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'À noter : une liste de fonctions ne prouve pas qu\'un outil fonctionne comme annoncé ou convient au compte. Ce sont des questions distinctes.',
      },
    ],
  }),
  post({
    slug: 'compare-mw4-cheat-listings',
    category: 'Product Questions',
    title: 'Comment comparer des fiches triche MW4 sans faire confiance aux bannières "undetected" ?',
    excerpt:
      'Comparez documentation, notes de compatibilité, accès support, conditions de facturation et historique des mises à jour plutôt qu\'un seul badge marketing.',
    author: 'tabbedOut',
    age: '',
    published: '2026-09-19',
    commentsCount: 5,
    upvotes: 33,
    body: [
      'J\'essaie de comparer des fiches et le plus gros signal d\'alerte est le texte géant "undetected" sans détails. Que regardez-vous vraiment ? Je préfère lire une doc ennuyeuse qu\'une bannière flashy, mais je ne sais pas quoi mettre d\'autre sur la checklist.',
    ],
    comments: [
      {
        author: 'termsAndConditions',
        age: '',
        score: 0,
        body: 'Historique des mises à jour, remboursements, durée d\'abonnement, OS et version de jeu pris en charge, et une vraie voie support. Comparez les [détails complets fonctions et compatibilité](/cheats/) avant de faire confiance à un badge. Je vérifie aussi s\'ils expliquent les limites, pas seulement les avantages.',
      },
      {
        author: 'tabbedOut',
        age: '',
        score: 0,
        body: 'Traitez-vous une invitation Discord comme du support ? Certaines pages n\'ont presque rien d\'autre.',
      },
      {
        author: 'termsAndConditions',
        age: '',
        score: 0,
        body: 'Pas à elle seule. Un lien chat indique où un chat pourrait exister, pas la rapidité de réponse ni ce que le support inclut.',
      },
      {
        author: 'oneMoreRound',
        age: '',
        score: 0,
        body: 'Le prix compte aussi, mais comparez la même durée. Un mois pas cher n\'est pas un prix à vie. Lisez aussi ce que "lifetime" signifie dans la [FAQ](/faq/).',
      },
      {
        author: 'packetloss',
        age: '',
        score: 0,
        body: 'Point important : aucun vendeur ne peut honnêtement garantir zéro risque en écrivant "undetected". L\'enforcement peut changer et le texte marketing n\'est pas une vérification indépendante.',
      },
    ],
  }),
  post({
    slug: 'before-buying-modern-warfare-4-tool',
    category: 'Product Questions',
    title: 'Avant d\'acheter un outil Modern Warfare 4, que vérifier en premier ?',
    excerpt:
      'Checklist pratique avant achat pour vérifier le périmètre et les conditions avant de dépenser sur un outil gaming tiers.',
    author: 'heldForReview',
    age: '',
    published: '2026-10-06',
    commentsCount: 5,
    upvotes: 36,
    body: [
      'Quelle est votre liste incontournable avant d\'acheter un outil MW4 tiers ? Pas de pitch commercial, juste ce qui évite d\'acheter quelque chose incompatible avec votre setup ou de découvrir des conditions différentes de ce que vous pensiez.',
    ],
    comments: [
      {
        author: 'ctrlAltDefeat',
        age: '',
        score: 0,
        body: 'Plateforme d\'abord. Support PC et console ne sont pas interchangeables, et "Call of Duty supporté" est trop vague. Cherchez titre et version exacts.',
      },
      {
        author: 'heldForReview',
        age: '',
        score: 0,
        body: 'Oui, la page que je regarde n\'est pas claire sur les détails de version.',
      },
      {
        author: 'ctrlAltDefeat',
        age: '',
        score: 0,
        body: 'Alors demandez au [support](/support/) avant d\'acheter. Si la réponse est vague, c\'est aussi une réponse.',
      },
      {
        author: 'menuDiver',
        age: '',
        score: 0,
        body: 'Vérifiez aussi le renouvellement auto, la durée de licence, ce qui se passe si le produit est temporairement indisponible, et comment contacter le support. Ennuyeux, mais ça coûte de l\'argent.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'J\'ajouterais le risque compte. Même une page vendeur détaillée ne garantit pas d\'éviter l\'enforcement. Lisez les règles officielles et décidez si ce risque est acceptable avant d\'installer quoi que ce soit.',
      },
    ],
  }),
  post({
    slug: 'mw4-third-party-tool-not-launching',
    category: 'Setup & Support',
    title: 'Un utilitaire MW4 tiers ne démarre pas. Que vérifier sans désactiver la sécurité Windows ?',
    excerpt:
      'Commencez par version et documentation, puis collectez des détails d\'erreur. Évitez les "correctifs" risqués qui désactivent la sécurité ou modifient l\'anti-triche.',
    author: 'rebootEnjoyer',
    age: '',
    published: '2026-07-31',
    commentsCount: 5,
    upvotes: 22,
    body: [
      'Question support générale : un utilitaire MW4 tiers ne s\'ouvre pas et ne donne presque aucune erreur utile. Quel ordre de vérifications est raisonnable ? Je ne cherche pas un contournement avec Defender éteint ou des services anti-triche modifiés. Ça semble une bonne façon d\'empirer un problème normal.',
    ],
    comments: [
      {
        author: 'logsPls',
        age: '',
        score: 0,
        body: 'Notez l\'erreur exacte et vérifiez les exigences OS et version de jeu documentées. "Ne marche pas" est dur à diagnostiquer ; le message réel compte.',
      },
      {
        author: 'rebootEnjoyer',
        age: '',
        score: 0,
        body: 'Ça se ferme presque tout de suite au lancement. Aucun message.',
      },
      {
        author: 'logsPls',
        age: '',
        score: 0,
        body: 'Alors vérifiez les instructions officielles du produit et le [listing de statut](/cheats/), et confirmez que l\'installateur vient de la source légitime. Ne prenez pas des DLL au hasard ou des "loaders fixés" sur un hébergeur.',
      },
      {
        author: 'quietPC',
        age: '',
        score: 0,
        body: 'Regardez aussi l\'Observateur d\'événements Windows si vous êtes à l\'aise, et notez l\'heure de fermeture. Ça peut donner une erreur au support. Ne publiez pas de logs personnels sans les vérifier.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'Si ça exige de désactiver des fonctions de sécurité ou de toucher à la protection du jeu, j\'arrêterais là. Au minimum un risque sécurité, et pas quelque chose à recommander aveuglément.',
      },
    ],
  }),
  post({
    slug: 'mw4-october-25-update-tool-compatibility',
    category: 'Game Updates',
    title: 'Le patch MW4 du 25 octobre a-t-il changé la compatibilité des outils tiers ?',
    excerpt:
      'Les notes du 25 octobre décrivent des correctifs jeu, mais n\'établissent pas qu\'un outil tiers est compatible ou indétecté.',
    author: 'PatchGoblin',
    age: '',
    published: '2026-10-27',
    commentsCount: 5,
    upvotes: 39,
    body: [
      'J\'ai vu les [notes de patch de lancement du 25 octobre](https://www.callofduty.com/patchnotes/2026/10/call-of-duty-modern-warfare-4-launch-patch-notes) et maintenant des pages affichent des labels vagues "updated". Les notes officielles disent-elles quelque chose sur le support d\'outils tiers, ou les gens relient juste les dates ?',
    ],
    comments: [
      {
        author: 'changelogReader',
        age: '',
        score: 0,
        body: 'Les notes officielles listent correctifs et ajustements jeu. Ce n\'est pas une déclaration qu\'un outil externe fonctionne. Je n\'inférerais pas la compatibilité depuis la date du patch seule.',
      },
      {
        author: 'PatchGoblin',
        age: '',
        score: 0,
        body: 'C\'est ce que je pensais. "Mis à jour aujourd\'hui" peut vouloir dire qu\'ils ont changé une page web.',
      },
      {
        author: 'smallPrintEnjoyer',
        age: '',
        score: 0,
        body: 'Exactement. Cherchez un numéro de version précis et une explication claire de ce qui a été testé. S\'ils manquent, le statut reste non confirmé pour le lecteur.',
      },
      {
        author: 'pingSpikes',
        age: '',
        score: 0,
        body: 'Et lisez les notes officielles pour les vrais changements jeu. La page [statut produit récent](/cheats/) d\'un vendeur est une autre source avec un autre intérêt.',
      },
      {
        author: 'changelogReader',
        age: '',
        score: 0,
        body: 'Même un test de compatibilité revendiqué ne prouve pas l\'absence de risque compte. Ce sont des choses séparées.',
      },
    ],
  }),
  post({
    slug: 'mw4-skin-changer-cosmetic-visibility',
    category: 'Features & Customization',
    title: 'Les skin changers rendent-ils les cosmétiques visibles pour tous ou seulement sur votre écran ?',
    excerpt:
      'Discussion cosmétique centrée sur l\'affichage local vs ce que voient les autres, avec rappel de ne pas supposer le support d\'un jeu non listé explicitement sur la page produit.',
    author: 'camoCollector',
    age: '',
    published: '2026-09-08',
    commentsCount: 5,
    upvotes: 26,
    body: [
      'Question générale sur les skin changers : si un cosmétique apparaît sur votre écran, est-ce que tout le monde en match le voit aussi ? Ou peut-ce être client-side seulement ? Je ne suppose pas que chaque outil fonctionne pareil ; j\'essaie de comprendre ce qu\'une fiche devrait expliquer avant un achat.',
    ],
    comments: [
      {
        author: 'localOnlyMaybe',
        age: '',
        score: 0,
        body: 'Ça dépend du jeu et de l\'implémentation. Un changement visuel local ne prouve pas que le serveur ou les autres joueurs voient la même chose.',
      },
      {
        author: 'camoCollector',
        age: '',
        score: 0,
        body: 'Donc une capture ne tranche pas, en gros.',
      },
      {
        author: 'localOnlyMaybe',
        age: '',
        score: 0,
        body: 'Oui. Elle montre ce qui était à l\'écran à ce moment. Elle n\'établit pas automatiquement la visibilité multijoueur ni les titres pris en charge.',
      },
      {
        author: 'patchNotesDad',
        age: '',
        score: 0,
        body: 'Je chercherais le jeu exact sur la page [détails skin changer](/skin-changer/) et une explication claire des limites. Si ça dit "all games" sans vraie liste, demandez au support avant de dépenser.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'Et manipuler des cosmétiques en ligne peut quand même violer les règles. "Skins seulement" n\'est pas une exemption universelle.',
      },
    ],
  }),
  post({
    slug: 'skin-changer-hvci-core-isolation-tpm-secure-boot',
    category: 'Setup & Support',
    title: 'HVCI, Core Isolation, TPM et Secure Boot sont listés comme exigences. Dois-je les changer ?',
    excerpt:
      'Si un produit liste des exigences sécurité Windows, vérifiez-les dans sa doc officielle et ne désactivez pas les protections pour forcer la compatibilité.',
    author: 'settingsMenuMaze',
    age: '',
    published: '2026-08-27',
    commentsCount: 5,
    upvotes: 24,
    body: [
      'La page [skin changer](/skin-changer/) liste HVCI, Core Isolation, TPM et Secure Boot. Je sais que c\'est lié à Windows et sécurité, mais je ne veux pas toucher BIOS ou réglages sécurité à l\'aveugle parce qu\'un outil le dit. La bonne approche est de vérifier les exigences et demander au support si mon PC ne les remplit pas ?',
    ],
    comments: [
      {
        author: 'biosIsNotAPlayground',
        age: '',
        score: 0,
        body: 'Oui. Vérifiez d\'abord l\'exigence exacte dans la documentation officielle. Ne changez pas le firmware sauf si vous comprenez ce que vous modifiez et pourquoi.',
      },
      {
        author: 'settingsMenuMaze',
        age: '',
        score: 0,
        body: 'C\'est ce que j\'avaais besoin d\'entendre. Les instructions en ligne vont dans tous les sens.',
      },
      {
        author: 'supportTicket42',
        age: '',
        score: 0,
        body: 'Les exigences listées sont une déclaration de compatibilité, pas une raison d\'éteindre la sécurité. Si l\'outil entre en conflit avec des protections déjà actives, demandez au fournisseur ce qui est supporté au lieu de suivre un post forum au hasard.',
      },
      {
        author: 'windowedMode',
        age: '',
        score: 0,
        body: 'Séparez aussi "mon PC remplit l\'exigence" de "le produit supporte ce jeu". Deux contrôles différents.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'Et si le seul correctif suggéré est de désactiver une fonction sécurité, je ne le traiterais pas comme une étape de setup routine.',
      },
    ],
  }),
  post({
    slug: 'hwid-spoofer-what-it-changes',
    category: 'Account & PC Questions',
    title: 'Que change vraiment un HWID spoofer, et enlève-t-il un ban compte ?',
    excerpt:
      'Un HWID spoofer est souvent décrit comme changeant des identifiants appareil, mais ne doit pas être confondu avec annuler une sanction compte ou garantir un nouvel accès.',
    author: 'hardwareCurious',
    age: '',
    published: '2026-10-12',
    commentsCount: 5,
    upvotes: 31,
    body: [
      'Quelqu\'un peut expliquer le spoofing HWID en langage normal ? Les fiches parlent de changer des identifiants matériel et de "ban recovery", mais on dirait que des gens mélangent restriction appareil et ban compte. Est-ce la même chose ?',
    ],
    comments: [
      {
        author: 'plainEnglishPC',
        age: '',
        score: 0,
        body: 'Non, pas automatiquement la même chose. HWID renvoie souvent à des identifiants matériel ou appareil. Une sanction compte est une action d\'enforcement séparée, et changer un identifiant n\'annule pas intrinsèquement la décision compte.',
      },
      {
        author: 'hardwareCurious',
        age: '',
        score: 0,
        body: 'Donc "te déban" est une affirmation trop large sauf s\'ils précisent quel type de restriction ?',
      },
      {
        author: 'plainEnglishPC',
        age: '',
        score: 0,
        body: 'Je la traiterais comme une affirmation à vérifier, et commencerais par les voies officielles appeal/support pour une vraie sanction compte. Ne supposez pas qu\'un outil appareil annule une action compte.',
      },
      {
        author: 'termsAndConditions',
        age: '',
        score: 0,
        body: 'Vérifiez aussi quels jeux et anti-cheat la page [HWID Spoofer](/hwid-spoofer/) supporte explicitement. Une liste pour d\'autres titres ne prouve pas le support MW4.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'Tenter d\'éviter l\'enforcement du jeu peut mener à plus de problèmes. Les voies officielles d\'appel sont sensées si vous pensez qu\'une sanction est une erreur.',
      },
    ],
  }),
  post({
    slug: 'ugc-tool-account-recovery-or-mw4-cheat',
    category: 'Product Questions',
    title: 'Qu\'est-ce que "UGC" sur cette page produit : outil gameplay MW4 ou espace d\'appel compte ?',
    excerpt:
      'Quand une fiche décrit récupération compte et fonctions gameplay, demandez un périmètre clair plutôt que supposer un produit compatible MW4.',
    author: 'whatEvenIsUGC',
    age: '',
    published: '2026-07-29',
    commentsCount: 5,
    upvotes: 19,
    body: [
      'Le terme UGC sur une fiche me confond. La description parle de récupération compte et workflows d\'appel, mais la même page a du langage outil gameplay. Est-ce censé être une triche Modern Warfare 4 ou autre chose ? Je ne veux pas deviner depuis le nom produit.',
    ],
    comments: [
      {
        author: 'readTheFinePrint',
        age: '',
        score: 0,
        body: 'Je demanderais au fournisseur une liste claire de ce que le produit fait et quels jeux il supporte. La description récupération compte de la page [UGC](/ugc/) seule n\'établit pas la compatibilité MW4.',
      },
      {
        author: 'whatEvenIsUGC',
        age: '',
        score: 0,
        body: 'Oui, c\'est ce qui m\'a déstabilisé. Le nom n\'explique pas du tout le cas d\'usage.',
      },
      {
        author: 'readTheFinePrint',
        age: '',
        score: 0,
        body: 'Alors ne le traitez pas comme outil gameplay MW4 tant que la page produit ou le support ne le confirme pas directement. Exigences et compatibilité sont des champs séparés.',
      },
      {
        author: 'menuDiver',
        age: '',
        score: 0,
        body: 'Une page produit claire devrait dire son but en une phrase, puis lister fonctions, produits supportés, exigences et limites. Si vous devez décoder, la page a besoin de travail.',
      },
      {
        author: 'accountHelpFirst',
        age: '',
        score: 0,
        body: 'Pour une vraie restriction compte, utilisez le processus d\'appel officiel du jeu. Les outils d\'automatisation ne garantissent pas qu\'un appel réussira.',
      },
    ],
  }),
  post({
    slug: 'mw4-aim-assist-vs-aimbot',
    category: 'Gameplay Questions',
    title: 'Aim assist vs aimbot dans MW4 : pourquoi utilise-t-on les termes comme interchangeables ?',
    excerpt:
      'L\'aim assist est une fonction d\'entrée conçue par le jeu ; un aimbot est une catégorie d\'outil tiers qui automatise la visée. Les termes ne sont pas interchangeables.',
    author: 'stickDriftEnjoyer',
    age: '',
    published: '2026-09-29',
    commentsCount: 5,
    upvotes: 30,
    body: [
      'Peut-on arrêter d\'appeler aimbot chaque bon clip manette ? Je connais le sens théorique des mots, mais on les lance dès que quelqu\'un gagne un gunfight. Quelle est la distinction nette, et par où un joueur normal devrait commencer s\'il veut juste une visée moins horrible ?',
    ],
    comments: [
      {
        author: 'settingsNerd',
        age: '',
        score: 0,
        body: 'L\'aim assist est intégré au jeu pour aider l\'entrée manette à être plus cohérente. Un aimbot est un outil d\'automatisation tiers destiné à viser pour le joueur. Ce n\'est pas la même chose.',
      },
      {
        author: 'stickDriftEnjoyer',
        age: '',
        score: 0,
        body: 'Merci. Parfois je regarde un clip et les commentaires montent déjà un procès.',
      },
      {
        author: 'settingsNerd',
        age: '',
        score: 0,
        body: 'Pour un réglage normal, utilisez les réglages du jeu, zone d\'entraînement si dispo, et un changement à la fois. Ne copiez pas une liste "best settings" au hasard sans tester sur votre setup.',
      },
      {
        author: 'keyboardEnjoyer',
        age: '',
        score: 0,
        body: 'Et un killcam n\'est pas une preuve parfaite à lui seul. Ça peut paraître bizarre à cause de latence, perspective, ou parce que le clip commence au milieu du fight.',
      },
      {
        author: 'fairplayfirst',
        age: '',
        score: 0,
        body: 'Si vous comparez votre visée à un [outil tiers](/blog/are-modern-warfare-4-cheats-safe/), rappelez-vous que l\'automatisation peut violer les règles. Vous n\'en avez pas besoin pour commencer avec sensibilité et pratique recul.',
      },
    ],
  }),
  post({
    slug: 'mw4-third-party-cheat-ban-risk',
    category: 'Account & PC Questions',
    title: 'Des triches MW4 tiers peuvent-elles flaguer un compte même si le vendeur dit "safe" ?',
    excerpt:
      'Aucune bannière vendeur tiers ne peut garantir qu\'un compte ne sera jamais flagué. Lisez les règles officielles et comprenez le risque avant d\'installer quoi que ce soit.',
    author: 'lastMatchMaybe',
    age: '',
    published: '2026-10-24',
    commentsCount: 5,
    upvotes: 44,
    body: [
      'Question honnête : si un vendeur appelle un outil MW4 "safe" ou "undetected", combien de confiance ça devrait donner ? Je vois des formulations absolues, mais les anti-cheat se mettent à jour et les termes peuvent être vagues. Je ne cherche pas de bypass, juste comprendre le risque avant une mauvaise décision.',
    ],
    comments: [
      {
        author: 'policyReader',
        age: '',
        score: 0,
        body: 'Je donnerais très peu de poids à la bannière. C\'est une affirmation vendeur, pas une garantie de l\'éditeur et pas une preuve que votre compte ne pourra pas être sanctionné plus tard.',
      },
      {
        author: 'lastMatchMaybe',
        age: '',
        score: 0,
        body: 'C\'est ce que je pensais. "Pas encore de reports" et "ne peut pas être détecté" ne sont pas la même phrase.',
      },
      {
        author: 'policyReader',
        age: '',
        score: 0,
        body: 'Exactement. Même un produit qui démarre normalement peut violer les règles. Lisez la politique officielle et les [limites indiquées sur la page produit](/cheats/), et assumez le risque plutôt que traiter un label marketing comme assurance.',
      },
      {
        author: 'saltyLobby',
        age: '',
        score: 0,
        body: 'Si une page garantit littéralement zéro ban pour toujours, je ferme l\'onglet. Rien en ligne ne marche comme ça.',
      },
      {
        author: 'accountHelpFirst',
        age: '',
        score: 0,
        body: 'Si vous vous inquiétez d\'une sanction existante, utilisez support ou appels officiels. Évitez outils ou vendeurs qui promettent d\'effacer chaque type de ban.',
      },
    ],
  }),
  post({
    slug: 'monthly-vs-lifetime-cheat-license',
    category: 'Product Questions',
    title: 'Licences mensuelles vs à vie : que comparer avant de choisir ?',
    excerpt:
      'Comparez les conditions de licence et ce qui se passe si support ou compatibilité change ; ne supposez pas que "lifetime" signifie garanti pour toujours dans toutes les conditions.',
    author: 'invoicePending',
    age: '',
    published: '2026-08-03',
    commentsCount: 5,
    upvotes: 27,
    body: [
      'Quand un outil propose accès mensuel et à vie, comment décidez-vous ? Je sais que ça dépend de la personne, mais je veux surtout savoir quelles conditions en petits caractères les gens vérifient. "Lifetime" semble simple jusqu\'à ce qu\'on demande de qui est la vie et ce qui se passe après une mise à jour.',
    ],
    comments: [
      {
        author: 'oneMonthAtATime',
        age: '',
        score: 0,
        body: 'Comparez d\'abord la durée réelle. Mensuel devrait dire quand ça renouvelle ou expire. Lifetime devrait expliquer ce que ça couvre et si support/mises à jour sont inclus.',
      },
      {
        author: 'invoicePending',
        age: '',
        score: 0,
        body: 'Paieriez-vous lifetime d\'avance pour un produit sorti récemment ?',
      },
      {
        author: 'oneMonthAtATime',
        age: '',
        score: 0,
        body: 'Personnellement je serais prudent. Une licence plus longue n\'enlève ni l\'incertitude compatibilité ni le risque compte. Je ne dis pas non plus que mensuel est automatiquement bon ; les termes comptent plus que le label.',
      },
      {
        author: 'spreadsheetWarrior',
        age: '',
        score: 0,
        body: 'Calculez le seuil de rentabilité, puis demandez si vous choisiriez encore si les mises à jour s\'arrêtent ou si votre setup n\'est plus supporté. Si la réponse est non, intégrez-le au moins à la décision.',
      },
      {
        author: 'quietPC',
        age: '',
        score: 0,
        body: 'Et gardez une copie des conditions sous lesquelles vous avez acheté. C\'est plus facile de résoudre une confusion de facturation avec le texte exact.',
      },
    ],
  }),
  post({
    slug: 'mw4-overlay-stutter-troubleshooting',
    category: 'PC Performance & Support',
    title: 'MW4 saccade après installation d\'un overlay. Comment cibler la cause ?',
    excerpt:
      'Isolez le problème méthodiquement : notez les réglages, testez un changement à la fois, vérifiez mises à jour jeu et pilotes, retirez overlays non fiables si ça persiste.',
    author: 'frametimeFan',
    age: '',
    published: '2026-10-18',
    commentsCount: 5,
    upvotes: 29,
    body: [
      'Mon frame pacing s\'est nettement dégradé après avoir ajouté un overlay à mon setup PC. Je n\'accuse pas encore MW4 car j\'ai changé plusieurs choses en même temps. Quelle est la façon propre d\'isoler au lieu de modifier au hasard chaque réglage graphique et oublier ce que j\'ai fait ?',
    ],
    comments: [
      {
        author: 'graphPaperGPU',
        age: '',
        score: 0,
        body: 'Notez d\'abord les réglages actuels. Puis testez avec l\'overlay retiré ou désactivé via désinstallation/sortie normale, redémarrez le jeu, comparez la même map ou charge. Changez une variable à la fois.',
      },
      {
        author: 'frametimeFan',
        age: '',
        score: 0,
        body: 'J\'ai clairement changé trois choses à la fois, donc c\'est ma faute.',
      },
      {
        author: 'graphPaperGPU',
        age: '',
        score: 0,
        body: 'On l\'a tous fait. Vérifiez aussi l\'[aide performance Modern Warfare 4](https://support.activision.com/uk/en/modern-warfare-4) et la version pilote GPU. Surveillez le frametime, pas seulement le FPS moyen.',
      },
      {
        author: 'safeModePlease',
        age: '',
        score: 0,
        body: 'Si l\'overlay venait d\'un téléchargement inconnu ou demande des pilotes inconnus, retirez-le et scannez le système. Quelques frames ne valent pas de faire confiance à un exécutable mystère.',
      },
      {
        author: 'queueGoblin',
        age: '',
        score: 0,
        body: 'Assurez-vous aussi de ne pas comparer une zone d\'entraînement calme à un match multijoueur chaotique. Mêmes conditions de test, sinon les chiffres ne veulent plus rien dire.',
      },
    ],
  }),
];
