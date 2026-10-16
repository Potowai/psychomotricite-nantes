import { articlesFor } from "@/content/blog";
import { fullAddress, site } from "@/lib/site";

export function GET() {
  const articles = articlesFor();
  const lines: string[] = [];

  lines.push(`# ${site.name} — ${site.role} à Nantes`);
  lines.push("");
  lines.push(
    `> Cabinet de psychomotricité à Nantes. ${site.practitioner.firstName} ${site.practitioner.lastName}, psychomotricienne diplômée d’État (D.E.) depuis ${site.practitioner.since}, reçoit adolescent.es et adultes au ${site.address.street}, ${site.address.postalCode} ${site.address.city}. Spécialités : douance (HQI/THQI), TSA, TDA-H, troubles dys. Consultations les lundis et samedis.`,
  );
  lines.push("");

  lines.push("## Informations pratiques");
  lines.push(`- Nom : ${site.name} — ${site.role}`);
  lines.push(`- Adresse : ${fullAddress}`);
  lines.push(
    `- Coordonnées : ${site.address.geo.latitude}, ${site.address.geo.longitude}`,
  );
  lines.push(
    `- Téléphone : ${site.contact.phoneDisplay} (appel ou SMS) — ${site.contact.phoneHref}`,
  );
  lines.push(`- E-mail : ${site.contact.email}`);
  lines.push(`- Horaires : lundis et samedis, sur rendez-vous`);
  lines.push(
    `- Accès : rez-de-chaussée, accès PMR, parking gratuit 2 h`,
  );
  lines.push(
    `- Transports : Tramway ligne 1 (Moutonnerie) ; Bus 11 et 12 (Dalby ou Casterneau)`,
  );
  lines.push(
    `- Tarifs : ${site.pricing.suivi.amount} € la séance de suivi, ${site.pricing.bilan.amount} € la séance de bilan ; séance d’environ ${site.pricing.durationMinutes} minutes`,
  );
  lines.push(`- Langues des séances : français, anglais`);
  lines.push(
    `- Public : adolescent.es et adultes (également enfants sur demande) ; toute personne, du bébé à la personne âgée`,
  );
  lines.push(`- Remboursement : pas de remboursement Sécurité sociale ; aides possibles via mutuelles, prestations extra-légales de la CPAM, MDPH (PCH, complément d’AEEH), caisses de retraite et comités d’entreprise`);
  lines.push("");

  lines.push("## Pages");
  lines.push(
    `- [Accueil](${site.url}/) : présentation du cabinet et des motifs de consultation`,
  );
  lines.push(
    `- [La psychomotricité](${site.url}/psychomotricite) : définition, profession paramédicale (décret n°88-6559 du 6 mai 1988), motifs de consultation`,
  );
  lines.push(
    `- [Qui suis-je ?](${site.url}/qui-suis-je) : parcours, douance (HQI/THQI), TSA, TDA-H, troubles dys, transculturalité, formations`,
  );
  lines.push(
    `- [Séances et tarifs](${site.url}/seances-et-tarifs) : déroulé, bilan psychomoteur, médiations, tarifs, aides au financement`,
  );
  lines.push(
    `- [Contact](${site.url}/contact) : coordonnées, plan d’accès, formulaire`,
  );
  lines.push(
    `- [Questions fréquentes](${site.url}/faq) : ordonnance, remboursement, tarifs, accès`,
  );
  lines.push(`- [Ressources](${site.url}/blog) : articles`);
  lines.push("");

  lines.push("## Articles");
  for (const article of articles) {
    lines.push(
      `- [${article.title}](${site.url}/blog/${article.slug}) : ${article.description}`,
    );
  }
  lines.push("");

  lines.push("## Liens");
  lines.push(`- Site parents/enfants : ${site.otherSite.url}`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
