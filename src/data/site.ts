// -----------------------------------------------------------------------------
// Source unique de vérité : coordonnées, offre, SEO.
// Tout le site lit ces valeurs → un seul endroit à mettre à jour.
// -----------------------------------------------------------------------------

export const site = {
  name: 'Stéphanie Garcia',
  role: 'Réflexologue plantaire',
  tagline: 'Réflexologue plantaire à Bouaye',
  domain: 'https://stephaniegarcia.fr',

  // Coordonnées
  phone: '06 09 87 39 67',
  phoneHref: 'tel:+33609873967',
  email: 'contact@stephaniegarcia.fr',
  emailHref: 'mailto:contact@stephaniegarcia.fr',

  address: {
    street: '1 rue Beauséjour',
    postalCode: '44830',
    city: 'Bouaye',
    region: 'Pays de la Loire',
    country: 'France',
    // Coordonnées géocodées du 1 rue Beauséjour, 44830 Bouaye
    lat: 47.1613,
    lng: -1.6813,
  },

  // Prise de rendez-vous — page Resalib de la praticienne
  resalibUrl: 'https://www.resalib.fr/praticien/122766-stephanie-garcia-reflexologue-bouaye',

  // Analytics Umami — à renseigner (id + URL du script) pour activer le suivi
  umami: {
    websiteId: '', // ex. "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    scriptUrl: 'https://cloud.umami.is/script.js',
  },

  tarifs: {
    min: 40,
    max: 60,
    mutuelles: 17,
    dureeMin: 60,
    dureeMax: 90,
  },
} as const;

// Réseau / annuaires (liens externes de confiance, utiles au SEO et à sameAs)
export const listings = [
  { label: 'Resalib', url: site.resalibUrl },
];

// Navigation principale
export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'La réflexologie', href: '/la-reflexologie/' },
  { label: 'Pour qui ?', href: '/pour-qui/' },
  { label: 'La séance', href: '/la-seance/' },
  { label: 'Tarifs', href: '/tarifs/' },
  { label: 'À propos', href: '/a-propos/' },
  { label: 'Contact', href: '/contact/' },
] as const;
