/**
 * Source unique de vérité pour les informations de marque, NAP et navigation.
 * Toute donnée réutilisée (footer, JSON-LD, métadonnées, formulaires) part d'ici.
 */

export const site = {
  url: "https://psychomotriciennenantes.fr",
  name: "Manuela Edom",
  role: "Psychomotricienne D.E.",
  shortName: "Manuela Edom",
  tagline: "Psychomotricienne à Nantes",
  description:
    "Psychomotricienne diplômée d'État à Nantes, Manuela Edom reçoit adolescent.es et adultes dans un cabinet paramédical au 2 rue d'Allonville. Douance, HQI/THQI, TSA, TDA-H, troubles dys.",

  practitioner: {
    firstName: "Manuela",
    lastName: "Edom",
    fullName: "Manuela Edom",
    title: "Psychomotricienne D.E.",
    since: 2016,
  },

  contact: {
    email: "medom@psychomotricite.com",
    phoneDisplay: "06 84 74 96 70",
    phoneHref: "+33684749670",
    phoneNote: "Appel ou SMS",
  },

  address: {
    name: "Cabinet paramédical",
    street: "2 rue d'Allonville",
    postalCode: "44000",
    city: "Nantes",
    region: "Pays de la Loire",
    country: "France",
    countryCode: "FR",
    geo: { latitude: 47.2250678, longitude: -1.5309646 },
  },

  hours: {
    label: "Consultations au cabinet",
    days: ["Lundi", "Samedi"],
    note: "Je vous reçois au cabinet les lundis et samedis.",
  },

  access: {
    desk: "Rez-de-chaussée",
    pmr: "Accès PMR",
    parking: "Parking gratuit — 2 h",
    transit: [
      { line: "Tramway ligne 1", stop: "Moutonnerie" },
      { line: "Bus 11 et 12", stop: "Dalby ou Casterneau" },
    ],
  },

  colocated: [
    "psychologue",
    "orthophoniste",
    "réflexologue",
    "neuropsychologue",
    "ostéopathe",
    "diététicienne",
  ],

  languages: {
    sessions: ["Français", "Anglais"],
    all: [
      { language: "Français", level: "langue maternelle" },
      { language: "Anglais", level: "B2" },
      { language: "Espagnol", level: "B1" },
      { language: "Arabe", level: "notions" },
    ],
  },

  pricing: {
    suivi: { amount: 47, label: "Séance de suivi" },
    bilan: { amount: 50, label: "Séance de bilan" },
    durationMinutes: 40,
    note: "Si vous rencontrez des difficultés financières, nous pouvons en parler.",
  },

  otherSite: {
    url: "https://fabuleuxmouvement.fr",
    label: "fabuleuxmouvement.fr",
    note: "mon autre site, pour les parents et les enfants",
  },

  social: {
    googleBusiness: null as string | null,
  },
} as const;

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/psychomotricite", label: "La psychomotricité" },
  { href: "/qui-suis-je", label: "Qui suis-je ?" },
  { href: "/seances-et-tarifs", label: "Séances & tarifs" },
  { href: "/blog", label: "Ressources" },
  { href: "/contact", label: "Contact" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Le cabinet",
    items: [
      { href: "/psychomotricite", label: "La psychomotricité" },
      { href: "/qui-suis-je", label: "Qui suis-je ?" },
      { href: "/seances-et-tarifs", label: "Séances & tarifs" },
      { href: "/contact", label: "Contact & accès" },
    ],
  },
  {
    title: "Ressources",
    items: [
      { href: "/blog", label: "Articles" },
      { href: "/faq", label: "Questions fréquentes" },
    ],
  },
];

export const fullAddress = `${site.address.name}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.postalCode} ${site.address.city}`,
)}`;

export const telHref = `tel:${site.contact.phoneHref}`;
export const smsHref = `sms:${site.contact.phoneHref}`;
export const mailHref = `mailto:${site.contact.email}`;
