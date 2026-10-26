/**
 * Source unique des langues, des adresses et de la navigation.
 *
 * Le français reste à la racine (`/`, `/contact`…), l'anglais vit sous `/en`,
 * l'espagnol sous `/es`, le roumain sous `/ro`, l'arabe sous `/ar`.
 * Aucune URL française ne change : le référencement local reste intact.
 */

export const locales = ["fr", "en", "es", "ro", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const localeLabel: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  es: "Español",
  ro: "Română",
  ar: "العربية",
};

export const localeShort: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  es: "ES",
  ro: "RO",
  ar: "AR",
};

export const htmlLang: Record<Locale, string> = {
  fr: "fr",
  en: "en",
  es: "es",
  ro: "ro",
  ar: "ar",
};

/** Sens d'écriture, pour l'attribut `dir` et les styles logiques. */
export const direction: Record<Locale, "ltr" | "rtl"> = {
  fr: "ltr",
  en: "ltr",
  es: "ltr",
  ro: "ltr",
  ar: "rtl",
};

export const ogLocale: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_GB",
  es: "es_ES",
  ro: "ro_RO",
  ar: "ar_AR",
};

/** Valeur de `hreflang` pour chaque langue. */
export const hreflang: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en",
  es: "es",
  ro: "ro",
  ar: "ar",
};

type Paths = Record<Locale, string>;

/** Pages fixes, avec leur adresse dans chaque langue. */
export const pages = {
  home: { fr: "/", en: "/en", es: "/es", ro: "/ro", ar: "/ar" },
  psychomotricite: {
    fr: "/psychomotricite",
    en: "/en/psychomotor-therapy",
    es: "/es/psicomotricidad",
    ro: "/ro/psihomotricitate",
    ar: "/ar/psychomotor-therapy",
  },
  about: {
    fr: "/qui-suis-je",
    en: "/en/about",
    es: "/es/sobre-mi",
    ro: "/ro/despre-mine",
    ar: "/ar/about",
  },
  sessions: {
    fr: "/seances-et-tarifs",
    en: "/en/sessions-and-fees",
    es: "/es/sesiones-y-tarifas",
    ro: "/ro/consultatii-si-tarife",
    ar: "/ar/sessions-and-fees",
  },
  contact: {
    fr: "/contact",
    en: "/en/contact",
    es: "/es/contacto",
    ro: "/ro/contact",
    ar: "/ar/contact",
  },
  faq: {
    fr: "/faq",
    en: "/en/faq",
    es: "/es/preguntas-frecuentes",
    ro: "/ro/intrebari-frecvente",
    ar: "/ar/faq",
  },
  resources: {
    fr: "/blog",
    en: "/en/resources",
    es: "/es/recursos",
    ro: "/ro/resurse",
    ar: "/ar/resources",
  },
  legal: {
    fr: "/mentions-legales",
    en: "/en/legal-notice",
    es: "/es/aviso-legal",
    ro: "/ro/note-legale",
    ar: "/ar/legal-notice",
  },
  privacy: {
    fr: "/politique-de-confidentialite",
    en: "/en/privacy",
    es: "/es/privacidad",
    ro: "/ro/confidentialitate",
    ar: "/ar/privacy",
  },
} satisfies Record<string, Paths>;

/** Fiches motifs, indexées par leur adresse française. */
export const motifPaths = {
  "douance-hqi-thqi": {
    fr: "/psychomotricite/douance-hqi-thqi",
    en: "/en/psychomotor-therapy/giftedness-hqi-thqi",
    es: "/es/psicomotricidad/altas-capacidades-hqi-thqi",
    ro: "/ro/psihomotricitate/supradotare-hpi-hqi-thqi",
    ar: "/ar/psychomotor-therapy/giftedness-hqi-thqi",
  },
  tdah: {
    fr: "/psychomotricite/tdah",
    en: "/en/psychomotor-therapy/adhd",
    es: "/es/psicomotricidad/tdah",
    ro: "/ro/psihomotricitate/tdah",
    ar: "/ar/psychomotor-therapy/adhd",
  },
  "anxiete-burn-out": {
    fr: "/psychomotricite/anxiete-burn-out",
    en: "/en/psychomotor-therapy/anxiety-and-burnout",
    es: "/es/psicomotricidad/ansiedad-y-burnout",
    ro: "/ro/psihomotricitate/anxietate-si-burnout",
    ar: "/ar/psychomotor-therapy/anxiety-and-burnout",
  },
  "troubles-dys": {
    fr: "/psychomotricite/troubles-dys",
    en: "/en/psychomotor-therapy/specific-learning-difficulties",
    es: "/es/psicomotricidad/dificultades-especificas-del-aprendizaje",
    ro: "/ro/psihomotricitate/tulburari-specifice-de-invatare",
    ar: "/ar/psychomotor-therapy/specific-learning-difficulties",
  },
  "personne-agee": {
    fr: "/psychomotricite/personne-agee",
    en: "/en/psychomotor-therapy/older-adults",
    es: "/es/psicomotricidad/personas-mayores",
    ro: "/ro/psihomotricitate/persoane-varstnice",
    ar: "/ar/psychomotor-therapy/older-adults",
  },
} satisfies Record<string, Paths>;

/** Articles, indexés par leur adresse française. */
export const articlePaths = {
  "douance-hqi-thqi-et-psychomotricite": {
    fr: "/blog/douance-hqi-thqi-et-psychomotricite",
    en: "/en/resources/giftedness-hqi-thqi-and-psychomotor-therapy",
    es: "/es/recursos/altas-capacidades-y-psicomotricidad",
    ro: "/ro/resurse/supradotare-si-psihomotricitate",
    ar: "/ar/resources/giftedness-and-psychomotor-therapy",
  },
  "anxiete-burn-out-pourquoi-passer-par-le-corps": {
    fr: "/blog/anxiete-burn-out-pourquoi-passer-par-le-corps",
    en: "/en/resources/anxiety-and-burnout-why-work-through-the-body",
    es: "/es/recursos/ansiedad-y-burnout-por-que-pasar-por-el-cuerpo",
    ro: "/ro/resurse/anxietate-si-burnout-de-ce-prin-corp",
    ar: "/ar/resources/anxiety-and-burnout-why-through-the-body",
  },
  "le-bilan-psychomoteur": {
    fr: "/blog/le-bilan-psychomoteur",
    en: "/en/resources/the-psychomotor-assessment",
    es: "/es/recursos/el-balance-psicomotor",
    ro: "/ro/resurse/bilantul-psihomotor",
    ar: "/ar/resources/the-psychomotor-assessment",
  },
  "psychomotricite-adulte-nantes": {
    fr: "/blog/psychomotricite-adulte-nantes",
    en: "/en/resources/psychomotor-therapy-for-adults-in-nantes",
    es: "/es/recursos/psicomotricidad-para-adultos-en-nantes",
    ro: "/ro/resurse/psihomotricitate-pentru-adulti-in-nantes",
    ar: "/ar/resources/psychomotor-therapy-for-adults-in-nantes",
  },
} satisfies Record<string, Paths>;

export type MotifKey = keyof typeof motifPaths;
export type ArticleKey = keyof typeof articlePaths;

/**
 * Langues dont **toutes** les pages existent. Les autres versions arrivent
 * page par page : tant qu'une traduction manque, on mène à l'accueil de
 * cette langue plutôt qu'à une adresse qui répond 404.
 *
 * Les trois versions sont complètes : le sélecteur de langue mène donc
 * toujours à la page équivalente.
 */
export const completeLocales: Locale[] = ["fr", "en", "es", "ro", "ar"];

/** Toutes les paires connues, dans l'ordre du site. */
const allPaths: Paths[] = [
  ...Object.values(pages),
  ...Object.values(motifPaths),
  ...Object.values(articlePaths),
];

/**
 * Table `hreflang` d'une page, à partir de n'importe laquelle de ses adresses.
 * `x-default` pointe sur le français, langue du public local.
 */
export function alternatesFor(path: string) {
  const entry = allPaths.find((pair) =>
    Object.values(pair).some((value) => value === path),
  );
  if (!entry) return undefined;

  return {
    "fr-FR": entry.fr,
    en: entry.en,
    es: entry.es,
    ro: entry.ro,
    ar: entry.ar,
    "x-default": entry.fr,
  };
}

/** L'adresse équivalente dans une autre langue, ou l'accueil de cette langue. */
export function pathInLocale(path: string, locale: Locale): string {
  // Version incomplète : on mène à l'accueil plutôt qu'à une page absente.
  if (!completeLocales.includes(locale)) return pages.home[locale];

  const entry = allPaths.find((pair) =>
    Object.values(pair).some((value) => value === path),
  );
  return entry ? entry[locale] : pages.home[locale];
}

/** Nom du lieu de consultation, dans la langue demandée. */
export const addressName: Record<Locale, string> = {
  fr: "Cabinet pluridisciplinaire",
  en: "Multidisciplinary practice",
  es: "Consultorio multidisciplinario",
  ro: "Cabinet pluridisciplinar",
  ar: "عيادة متعددة التخصصات",
};

/** Titre professionnel, dans la langue demandée. */
export const roleLabel: Record<Locale, string> = {
  fr: "Psychomotricienne D.E.",
  en: "Psychomotor therapist (D.E.)",
  es: "Psicomotricista D.E.",
  ro: "Psihomotricistă D.E.",
  ar: "أخصائية العلاج النفسي الحركي",
};

/** Adresse complète, dans la langue demandée. */
export function fullAddressFor(locale: Locale): string {
  return `${addressName[locale]}, 4 rue de la Mitrie, 44000 Nantes`;
}

/** L'adresse d'un article dans la langue demandée, à partir de son slug local. */
export function articlePath(locale: Locale, slug: string): string {
  const entry = Object.values(articlePaths).find((pair) => pair[locale] === slug);
  return entry ? entry[locale] : pages.resources[locale];
}

/** L'adresse d'une fiche motif dans la langue demandée, à partir de son slug local. */
export function motifPath(locale: Locale, slug: string): string {
  const entry = Object.values(motifPaths).find((pair) => pair[locale] === slug);
  return entry ? entry[locale] : pages.psychomotricite[locale];
}

export type NavItem = { href: string; label: string };

const navLabels: Record<
  Locale,
  {
    home: string;
    psychomotricite: string;
    about: string;
    sessions: string;
    resources: string;
    contact: string;
    practice: string;
    faq: string;
  }
> = {
  fr: {
    home: "Accueil",
    psychomotricite: "La psychomotricité",
    about: "Qui suis-je ?",
    sessions: "Séances & tarifs",
    resources: "Ressources",
    contact: "Contact",
    practice: "Le cabinet",
    faq: "Questions fréquentes",
  },
  en: {
    home: "Home",
    psychomotricite: "Psychomotor therapy",
    about: "About",
    sessions: "Sessions & fees",
    resources: "Resources",
    contact: "Contact",
    practice: "The practice",
    faq: "Frequently asked questions",
  },
  es: {
    home: "Inicio",
    psychomotricite: "La psicomotricidad",
    about: "Sobre mí",
    sessions: "Sesiones y tarifas",
    resources: "Recursos",
    contact: "Contacto",
    practice: "El consultorio",
    faq: "Preguntas frecuentes",
  },
  ro: {
    home: "Acasă",
    psychomotricite: "Psihomotricitate",
    about: "Despre mine",
    sessions: "Ședințe și tarife",
    resources: "Resurse",
    contact: "Contact",
    practice: "Cabinetul",
    faq: "Întrebări frecvente",
  },
  ar: {
    home: "الرئيسية",
    psychomotricite: "العلاج النفسي الحركي",
    about: "من أنا",
    sessions: "الجلسات والأسعار",
    resources: "موارد",
    contact: "اتصال",
    practice: "العيادة",
    faq: "أسئلة شائعة",
  },
};

export function mainNav(locale: Locale): NavItem[] {
  const labels = navLabels[locale];
  return [
    { href: pages.home[locale], label: labels.home },
    { href: pages.psychomotricite[locale], label: labels.psychomotricite },
    { href: pages.about[locale], label: labels.about },
    { href: pages.sessions[locale], label: labels.sessions },
    { href: pages.contact[locale], label: labels.contact },
  ];
}

export function footerNav(locale: Locale): { title: string; items: NavItem[] }[] {
  const labels = navLabels[locale];
  return [
    {
      title: labels.practice,
      items: [
        { href: pages.psychomotricite[locale], label: labels.psychomotricite },
        { href: pages.about[locale], label: labels.about },
        { href: pages.sessions[locale], label: labels.sessions },
        { href: pages.contact[locale], label: labels.contact },
        { href: pages.faq[locale], label: labels.faq },
      ],
    },
  ];
}

/** Adresse de la page contact de la langue. */
export function contactPath(locale: Locale): string {
  return pages.contact[locale];
}
