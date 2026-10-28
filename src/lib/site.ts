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
    "Psychomotricienne diplômée d'État à Nantes, Manuela Edom reçoit adolescent.es et adultes, ainsi que les enfants sur demandes spécifiques, dans un cabinet pluridisciplinaire au 4 rue de la Mitrie. Douance (HPI, HQI/THQI), TSA, TDA-H, troubles dys.",

  practitioner: {
    firstName: "Manuela",
    lastName: "Edom",
    fullName: "Manuela Edom",
    title: "Psychomotricienne D.E.",
    since: 2016,
    siret: "819 908 419 000 57",
    rpps: "10006895139",
  },

  contact: {
    email: "medom@psychomotricite.com",
    phoneDisplay: "06 84 74 96 70",
    phoneHref: "+33684749670",
    phoneNote: "Appel ou SMS",
  },

  address: {
    name: "Cabinet pluridisciplinaire",
    street: "4 rue de la Mitrie",
    postalCode: "44000",
    city: "Nantes",
    region: "Pays de la Loire",
    country: "France",
    countryCode: "FR",
    geo: { latitude: 47.2271603, longitude: -1.5330165 },
  },

  hours: {
    label: "Consultations au cabinet",
    days: ["Lundi", "Mardi", "Mercredi", "Jeudi"],
    display: "du lundi au jeudi, sur rendez-vous",
    note: "Je vous reçois au cabinet du lundi au jeudi, sur rendez-vous.",
  },

  access: {
    summary: "Bus 11/12 · C1 · Tram 1",
    parking:
      "À proximité : parking du Super U Dalby : 2 h gratuites, 8 min à pied",
    transit: [
      { line: "Bus 11 et 12", stop: "Casterneau", walk: "1 min à pied" },
      { line: "C1", stop: "Chalâtres", walk: "10 min à pied" },
      { line: "Tramway ligne 1", stop: "Moutonnerie", walk: "20 min à pied" },
    ],
  },

  colocated:
    "une psychomotricienne, deux psychologues cliniciennes et une médecin généraliste",

  languages: {
    sessions: ["Français", "Anglais"],
    all: [
      { language: "Français", level: "langue maternelle" },
      { language: "Anglais", level: "B2" },
      { language: "Espagnol", level: "B1" },
      { language: "Arabe", level: "notions" },
      { language: "Roumain", level: "notions" },
    ],
    interpretation:
      "Si vous souhaitez faire les séances dans une autre langue, nous pouvons nous renseigner sur les possibilités d’interprétariat.",
  },

  pricing: {
    suivi: { amount: 47, label: "Séance de suivi" },
    bilan: {
      sessions: 4,
      unitAmount: 50,
      total: 200,
      label: "Bilan psychomoteur",
    },
    durationMinutes: 40,
    note: "Si vous rencontrez des difficultés financières, nous pouvons en parler.",
  },

  otherSite: {
    url: "https://fabuleuxmouvement.fr",
    label: "fabuleuxmouvement.fr",
    note: "mon autre site, pour les parents et les enfants",
  },

  credits: {
    author: "Alexis Fiolleau",
    repo: "https://github.com/Potowai/psychomotricite-nantes",
  },

  social: {
    googleBusiness: null as string | null,
  },
} as const;

export type NavItem = { href: string; label: string };

export const fullAddress = `${site.address.name}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.postalCode} ${site.address.city}`,
)}`;

export const telHref = `tel:${site.contact.phoneHref}`;
export const smsHref = `sms:${site.contact.phoneHref}`;
export const mailHref = `mailto:${site.contact.email}`;
