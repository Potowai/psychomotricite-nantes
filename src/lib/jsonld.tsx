import { motifs } from "@/content/motifs";
import { site } from "./site";

const url = site.url;

/** Entité LocalBusiness / MedicalBusiness — référence centrale (@id) réutilisée partout. */
export const businessId = `${url}/#cabinet`;
export const personId = `${url}/#manuela-edom`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": businessId,
    name: `${site.name} · ${site.role}`,
    alternateName: site.tagline,
    description: site.description,
    url,
    email: site.contact.email,
    telephone: `+33${site.contact.phoneHref.replace(/^\+33/, "")}`,
    image: `${url}/opengraph-image`,
    logo: `${url}/icon.svg`,
    priceRange: `${site.pricing.suivi.amount}€–${site.pricing.bilan.total}€`,
    currenciesAccepted: "EUR",
    paymentAccepted: "Espèces, chèque, virement",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.geo.latitude,
      longitude: site.address.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${site.address.geo.latitude},${site.address.geo.longitude}`,
    areaServed: [
      { "@type": "City", name: "Nantes" },
      { "@type": "AdministrativeArea", name: "Loire-Atlantique" },
      { "@type": "AdministrativeArea", name: "Pays de la Loire" },
    ],
    // Les horaires exacts ne sont pas encore connus : pas de balisage
    // d'ouverture, pour ne pas publier de créneaux inventés.
    knowsLanguage: ["fr", "en", "es"],
    founder: { "@id": personId },
    employee: { "@id": personId },
    medicalSpecialty: ["Psychomotor therapy", "Psychomotricité"],
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: `Bilan psychomoteur (${site.pricing.bilan.sessions} séances)`,
      },
      { "@type": "MedicalTherapy", name: "Séance de psychomotricité de suivi" },
    ],
    sameAs: [
      site.otherSite.url,
      ...(site.social.googleBusiness ? [site.social.googleBusiness] : []),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Motifs de consultation",
      itemListElement: motifs.map((motif) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: motif.label,
          description: motif.metaDescription,
          url: `${url}/psychomotricite/${motif.slug}`,
        },
      })),
    },
    isAccessibleForFree: false,
    publicAccess: true,
    amenityFeature: {
      "@type": "LocationFeatureSpecification",
      name: "Accessible PMR",
      value: true,
    },
    smokingAllowed: false,
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.name,
    givenName: site.practitioner.firstName,
    familyName: site.practitioner.lastName,
    jobTitle: site.role,
    description:
      "Psychomotricienne diplômée d'État exerçant à Nantes depuis 2016, auprès d'adolescent.es et d'adultes.",
    url: `${url}/qui-suis-je`,
    worksFor: { "@id": businessId },
    knowsLanguage: ["fr", "en", "es", "ro"],
    knowsAbout: [
      "Psychomotricité",
      "Douance (HPI, HQI/THQI)",
      "Trouble du spectre de l'autisme (TSA)",
      "TDA-H",
      "Troubles dys",
      "Psychotraumatismes",
      "Transculturalité",
      "Migration et parcours d'exil",
      "Parentalité",
      "Genre, identité et orientation",
      "Violences sexistes et sexuelles",
      "Précarité",
      "Maladie chronique",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Diplôme d'État de psychomotricien",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: `${site.name} · ${site.role}`,
    inLanguage: ["fr-FR", "en", "es"],
    publisher: { "@id": businessId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  path?: string;
  locale?: "fr" | "en" | "es";
}) {
  const inLanguage = article.locale ?? "fr";
  const path = article.path ?? `/blog/${article.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url: `${url}${path}`,
    mainEntityOfPage: `${url}${path}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified ?? article.datePublished,
    image: `${url}${article.image ?? "/opengraph-image"}`,
    inLanguage,
    author: { "@id": personId },
    publisher: { "@id": businessId },
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${url}${service.path}`,
    provider: { "@id": businessId },
    areaServed: [
      { "@type": "City", name: "Nantes" },
      { "@type": "AdministrativeArea", name: "Loire-Atlantique" },
    ],
    serviceType: service.name,
    category: "Psychomotricité",
  };
}

/** Page médicale — renforce la compréhension par les moteurs et les IA. */
export function medicalWebPageSchema(page: {
  name: string;
  description: string;
  path: string;
  locale?: "fr" | "en" | "es";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: page.name,
    description: page.description,
    url: `${url}${page.path}`,
    inLanguage: page.locale ?? "fr",
    about: { "@id": businessId },
    publisher: { "@id": businessId },
    audience: {
      "@type": "Patient",
      name: "Adolescent.es et adultes à Nantes",
    },
  };
}

/** Rend un ou plusieurs objets JSON-LD dans un <script> sans échappement HTML. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
