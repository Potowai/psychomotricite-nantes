import { articlesFor } from "@/content/blog";
import { articlesFor as articlesEn } from "@/content/blog.en";
import { articlesFor as articlesEs } from "@/content/blog.es";
import { articlePath, pages, type Locale } from "@/lib/i18n";
import { fullAddress, site } from "@/lib/site";

type Copy = {
  title: string;
  intro: string;
  practical: string;
  name: string;
  address: string;
  coordinates: string;
  phone: string;
  email: string;
  hours: string;
  access: string;
  transport: string;
  fees: string;
  languages: string;
  audience: string;
  reimbursement: string;
  pagesTitle: string;
  articlesTitle: string;
  linksTitle: string;
  otherSite: string;
  readMore: string;
};

const copies: Record<Locale, Copy> = {
  fr: {
    title: `${site.name} — ${site.role} à Nantes`,
    intro: `Cabinet de psychomotricité à Nantes. ${site.practitioner.firstName} ${site.practitioner.lastName}, psychomotricienne diplômée d’État (D.E.) depuis ${site.practitioner.since}, reçoit adolescent.es et adultes au ${site.address.street}, ${site.address.postalCode} ${site.address.city}. Spécialités : douance (HPI, HQI/THQI), TSA, TDA-H, troubles dys. Consultations du lundi au vendredi, sur rendez-vous.`,
    practical: "Informations pratiques",
    name: "Nom",
    address: "Adresse",
    coordinates: "Coordonnées",
    phone: "Téléphone",
    email: "E-mail",
    hours: "Horaires",
    access: "Accès",
    transport: "Transports",
    fees: "Tarifs",
    languages: "Langues",
    audience: "Public",
    reimbursement: "Remboursement",
    pagesTitle: "Pages",
    articlesTitle: "Articles",
    linksTitle: "Liens",
    otherSite: "Site parents/enfants",
    readMore: "",
  },
  en: {
    title: `${site.name} — psychomotor therapist in Nantes`,
    intro: `Psychomotor therapy practice in Nantes. ${site.practitioner.firstName} ${site.practitioner.lastName}, state-certified psychomotor therapist since ${site.practitioner.since}, sees teenagers and adults at ${site.address.street}, ${site.address.postalCode} ${site.address.city}. Specialities: giftedness (HPI, HQI/THQI), ASD, ADHD, specific learning difficulties. Consultations Monday to Friday, by appointment.`,
    practical: "Practical information",
    name: "Name",
    address: "Address",
    coordinates: "Coordinates",
    phone: "Phone",
    email: "E-mail",
    hours: "Opening times",
    access: "Access",
    transport: "Public transport",
    fees: "Fees",
    languages: "Languages",
    audience: "Who I work with",
    reimbursement: "Reimbursement",
    pagesTitle: "Pages",
    articlesTitle: "Articles",
    linksTitle: "Links",
    otherSite: "Website for parents and children",
    readMore: "",
  },
  es: {
    title: `${site.name} — psicomotricista en Nantes`,
    intro: `Consultorio de psicomotricidad en Nantes. ${site.practitioner.firstName} ${site.practitioner.lastName}, psicomotricista diplomada de Estado desde ${site.practitioner.since}, recibe a adolescentes y personas adultas en la calle de la Mitrie 4, ${site.address.postalCode} ${site.address.city}. Especialidades: altas capacidades (HPI, HQI/THQI), TEA, TDAH, dificultades específicas del aprendizaje. Consultas de lunes a viernes, con cita previa.`,
    practical: "Información práctica",
    name: "Nombre",
    address: "Dirección",
    coordinates: "Coordenadas",
    phone: "Teléfono",
    email: "Correo electrónico",
    hours: "Horarios",
    access: "Acceso",
    transport: "Transportes",
    fees: "Tarifas",
    languages: "Idiomas",
    audience: "A quién acompaño",
    reimbursement: "Cobertura",
    pagesTitle: "Páginas",
    articlesTitle: "Artículos",
    linksTitle: "Enlaces",
    otherSite: "Sitio para familias con hijos",
    readMore: "",
  },
};

const collections = { fr: articlesFor, en: articlesEn, es: articlesEs };

export function buildLlms(locale: Locale): string {
  const t = copies[locale];
  const articles = collections[locale]();
  const lines: string[] = [];

  lines.push(`# ${t.title}`);
  lines.push("");
  lines.push(`> ${t.intro}`);
  lines.push("");

  lines.push(`## ${t.practical}`);
  lines.push(`- ${t.name} : ${site.name} — ${site.role}`);
  lines.push(`- ${t.address} : ${fullAddress}`);
  lines.push(
    `- ${t.coordinates} : ${site.address.geo.latitude}, ${site.address.geo.longitude}`,
  );
  lines.push(
    `- ${t.phone} : ${site.contact.phoneDisplay} (${site.contact.phoneNote}) — ${site.contact.phoneHref}`,
  );
  lines.push(`- ${t.email} : ${site.contact.email}`);
  lines.push(`- ${t.hours} : du lundi au vendredi, sur rendez-vous`);
  lines.push(
    `- ${t.access} : à proximité du centre-ville, quartier Malakoff – Saint-Donatien ; parking du Super U Dalby, 2 h gratuites, 8 min à pied`,
  );
  lines.push(
    `- ${t.transport} : Bus 11 et 12 (Casterneau, 1 min à pied) ; C1 (Chalâtres, 10 min à pied) ; Tramway ligne 1 (Moutonnerie, 20 min à pied)`,
  );
  lines.push(
    `- ${t.fees} : ${site.pricing.suivi.amount} € la séance de suivi ; bilan ${site.pricing.bilan.total} € (${site.pricing.bilan.sessions} séances, ${site.pricing.bilan.unitAmount} €/séance) ; séance d’environ ${site.pricing.durationMinutes} minutes`,
  );
  lines.push(
    `- ${t.languages} : séances en français et en anglais ; français (langue maternelle), anglais (B2), espagnol (B1), notions d’arabe et de roumain ; interprétariat possible à étudier`,
  );
  lines.push(
    `- ${t.audience} : adolescent.es et adultes (également enfants sur demande) ; toute personne, du bébé à la personne âgée`,
  );
  lines.push(
    `- ${t.reimbursement} : pas de remboursement Sécurité sociale ; aides possibles via mutuelles, prestations extra-légales de la CPAM, MDPH (PCH, complément d’AEEH), caisses de retraite et comités d’entreprise`,
  );
  lines.push("");

  lines.push(`## ${t.pagesTitle}`);
  const pageList: [string, string][] = [
    [pages.home[locale], "présentation du cabinet et des motifs de consultation"],
    [
      pages.psychomotricite[locale],
      "définition, profession paramédicale (décret n°88-659 du 6 mai 1988), motifs de consultation",
    ],
    [
      pages.about[locale],
      "parcours, douance (HPI, HQI/THQI), TSA, TDA-H, troubles dys, transculturalité, formations",
    ],
    [
      pages.sessions[locale],
      "déroulé, bilan psychomoteur, médiations, tarifs, aides au financement",
    ],
    [pages.contact[locale], "coordonnées, plan d’accès, formulaire"],
    [pages.faq[locale], "ordonnance, remboursement, tarifs, accès"],
    [pages.resources[locale], "articles"],
  ];
  for (const [path, description] of pageList) {
    lines.push(`- [${path}](${site.url}${path}) : ${description}`);
  }
  lines.push("");

  lines.push(`## ${t.articlesTitle}`);
  for (const article of articles) {
    const path = articlePath(locale, article.slug);
    lines.push(`- [${article.title}](${site.url}${path}) : ${article.description}`);
  }
  lines.push("");

  lines.push(`## ${t.linksTitle}`);
  lines.push(`- ${t.otherSite} : ${site.otherSite.url}`);
  lines.push("");

  return lines.join("\n");
}
