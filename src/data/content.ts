// Contenus structurés réutilisés sur plusieurs pages (issus du dossier praticienne).

export const publics = [
  {
    slug: 'nourrissons',
    icon: 'baby',
    title: 'Nourrissons & bébés',
    intro:
      'Une approche extrêmement douce et des séances courtes, adaptées à la sensibilité du tout-petit.',
    indications: [
      'Coliques du nourrisson',
      'Reflux gastro-œsophagien (RGO)',
      'Troubles du sommeil et pleurs inexpliqués',
      'Douleurs liées aux poussées dentaires',
      'Agitation',
    ],
  },
  {
    slug: 'enfants',
    icon: 'graduation-cap',
    title: 'Enfants & adolescents',
    intro:
      'Un accompagnement en douceur pour traverser les étapes de croissance et les périodes de stress.',
    indications: [
      'Pics de croissance',
      'Gestion des émotions et hyperactivité',
      'Troubles de la concentration',
      'Anxiété scolaire',
      'Préparation aux examens d’étude (brevet, baccalauréat)',
    ],
  },
  {
    slug: 'adultes',
    icon: 'leaf',
    title: 'Adultes, séniors & femmes enceintes',
    intro:
      'Retrouver l’équilibre face au stress du quotidien, aux douleurs chroniques et aux bouleversements de la vie.',
    indications: [
      'Stress professionnel, burn-out, charge mentale',
      'Troubles du sommeil',
      'Douleurs chroniques (arthrose, rhumatismes)',
      'Accompagnement de la grossesse, à partir de la 15ᵉ semaine d’aménorrhée',
      'Maintien de l’autonomie et de la mobilité',
      'Problèmes digestifs',
    ],
  },
  {
    slug: 'sportifs',
    icon: 'activity',
    title: 'Sportifs',
    intro:
      'Optimiser la préparation, accélérer la récupération et prévenir les blessures, en amateur comme en compétition.',
    indications: [
      'Préparation physique avant compétition',
      'Récupération musculaire post-effort',
      'Aide à l’élimination de l’acide lactique',
      'Soulagement des contractures',
      'Prévention des blessures',
    ],
  },
  {
    slug: 'handicap',
    icon: 'accessibility',
    title: 'Personnes en situation de handicap',
    intro:
      'Un accueil pensé pour un public souvent délaissé, avec une adaptation du cadre, du rythme et du contact.',
    indications: [
      'Adaptation de l’accès et du cadre physique',
      'Patience et respect du rythme de chacun',
      'Contact ajusté à la sensibilité neurologique',
      'Accompagnement bienveillant et sécurisant',
    ],
  },
] as const;

export const seance = [
  {
    n: 1,
    title: 'L’anamnèse',
    text: 'Un échange approfondi sur votre état de santé, vos antécédents, votre mode de vie et la raison de votre venue. Il permet de cibler précisément les zones à travailler.',
  },
  {
    n: 2,
    title: 'L’installation',
    text: 'Vous vous installez habillé·e, pieds nus, sur un fauteuil de relaxation « zéro gravité » qui aligne le cœur et les jambes pour une détente optimale.',
  },
  {
    n: 3,
    title: 'La prise de contact',
    text: 'Des mouvements de relaxation échauffent les tissus, détendent les chevilles et le diaphragme, et installent une relation de confiance par une approche attentive.',
  },
  {
    n: 4,
    title: 'Le travail réflexe',
    text: 'Cœur de la méthode Ingham : l’exploration précise des zones réflexes des deux pieds, avec des pressions adaptées pour relancer les fonctions naturelles du corps.',
  },
  {
    n: 5,
    title: 'Le réveil & l’échange',
    text: 'Des effleurages doux vous ramènent en douceur. Un temps de partage clôt la séance, avec le conseil de bien vous hydrater dans les 24 à 48 h qui suivent.',
  },
] as const;

export const faq = [
  {
    q: 'La réflexologie plantaire, est-ce douloureux ?',
    a: 'Non. Les pressions sont adaptées à votre sensibilité. Certaines zones peuvent être plus sensibles lorsqu’elles correspondent à une tension, mais la séance reste un moment de détente profonde.',
  },
  {
    q: 'Combien de temps dure une séance ?',
    a: 'Une consultation dure en moyenne entre 1h00 et 1h30, entretien préalable compris. La durée est adaptée selon le public (plus courte pour les nourrissons et jeunes enfants).',
  },
  {
    q: 'La réflexologie est-elle remboursée ?',
    a: 'La Sécurité sociale ne prend pas en charge la réflexologie. En revanche, <strong>17 mutuelles</strong> reconnaissent la pratique et proposent un remboursement, total ou partiel. Une facture vous est remise en fin de séance.',
  },
  {
    q: 'La réflexologie remplace-t-elle un traitement médical ?',
    a: 'Non. Il s’agit d’une discipline <strong>complémentaire</strong> de bien-être. Elle ne pose aucun diagnostic, ne prescrit aucun médicament et ne modifie jamais un traitement médical en cours.',
  },
  {
    q: 'Vous déplacez-vous à domicile ?',
    a: 'Oui. Les consultations ont lieu au cabinet de Bouaye ou à domicile, notamment pour les personnes à mobilité réduite, les jeunes mamans, les personnes âgées ou convalescentes.',
  },
  {
    q: 'Comment prendre rendez-vous ?',
    a: 'Les consultations se font uniquement sur rendez-vous, par téléphone au 06 09 87 39 67 ou via le module de réservation en ligne Resalib.',
  },
] as const;
