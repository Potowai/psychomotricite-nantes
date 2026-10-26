import { motifs } from "@/content/motifs";
import { fullAddress, site } from "@/lib/site";

/**
 * llms-full.txt — version intégrale, pour les moteurs de réponse IA.
 * Le contenu est repris de la voix de Manuela : des faits vérifiables et
 * des phrases autoportantes, faciles à citer.
 */

export function GET() {
  const lines: string[] = [];

  lines.push(`# ${site.name} · ${site.role} à Nantes`);
  lines.push("");
  lines.push(
    "> Version française. Index courts : anglais /en/llms.txt, espagnol /es/llms.txt, roumain /ro/llms.txt, arabe /ar/llms.txt",
  );
  lines.push("");
  lines.push(
    `${site.practitioner.firstName} ${site.practitioner.lastName} est psychomotricienne diplômée d'État (D.E.). Elle exerce en cabinet libéral à Nantes depuis ${site.practitioner.since}, auprès d'adolescent.es et d'adultes, et reçoit également des enfants selon les situations. Elle accompagne très fréquemment des personnes HPI, HQI/THQI (douance) et des personnes concernées par d'autres neuroatypies : TSA, TDA-H, troubles dys.`,
  );
  lines.push("");

  lines.push("## Réponses rapides");
  lines.push(
    "Qu'est-ce que la psychomotricité ? Une profession paramédicale reconnue par un diplôme d'État, encadrée par le décret n°88-659 du 6 mai 1988. Elle s'intéresse aux liens entre les vécus corporels et psychiques, à la croisée des neurosciences, de l'anatomie, de la psychologie et de la psychiatrie.",
  );
  lines.push(
    `Où consulter ? Au cabinet pluridisciplinaire, ${site.address.street}, ${site.address.postalCode} ${site.address.city}, du lundi au jeudi, sur rendez-vous.`,
  );
  lines.push(
    `Combien coûte une séance ? ${site.pricing.suivi.amount} € la séance de suivi ; le bilan psychomoteur se déroule en ${site.pricing.bilan.sessions} séances, soit ${site.pricing.bilan.total} € au total (${site.pricing.bilan.unitAmount} € par séance). Une séance dure environ ${site.pricing.durationMinutes} minutes.`,
  );
  lines.push(
    "Faut-il une ordonnance ? Une prescription médicale est nécessaire pour engager un bilan ou un suivi en psychomotricité, mais elle n’est pas demandée lors d’un premier rendez-vous.",
  );
  lines.push(
    "Est-ce remboursé par la Sécurité sociale ? Non, les soins de psychomotricité ne sont pas remboursés par l'Assurance maladie à ce jour. Des aides existent : mutuelles (forfait bien-être, recours amiable), prestations extra-légales de la CPAM, MDPH (PCH pour les adultes, complément d'AEEH pour les enfants), caisses de retraite et comités d'entreprise.",
  );
  lines.push(
    "Pour qui ? Pour toute personne, du bébé à la personne âgée. En libéral, Manuela Edom reçoit surtout des adolescent.es et des adultes.",
  );
  lines.push("");

  lines.push("## Informations pratiques");
  lines.push(`- Nom : ${site.name} · ${site.role}`);
  lines.push(`- Adresse : ${fullAddress}`);
  lines.push(
    `- Coordonnées GPS : ${site.address.geo.latitude}, ${site.address.geo.longitude}`,
  );
  lines.push(
    `- Téléphone : ${site.contact.phoneDisplay} (appel ou SMS) · ${site.contact.phoneHref}`,
  );
  lines.push(`- E-mail : ${site.contact.email}`);
  lines.push("- Horaires : du lundi au jeudi, sur rendez-vous");
  lines.push(
    "- Accès : à proximité du centre-ville, quartier Saint Donatien, Dalby, Malakoff ; parking du Super U Dalby, 2 h gratuites, 8 min à pied ; cabinet accessible PMR",
  );
  lines.push(
    "- Transports : Bus 11 et 12 (arrêt Casterneau, 1 min à pied) ; C1 (arrêt Chalâtres, 10 min à pied) ; Tramway ligne 1 (arrêt Moutonnerie, 20 min à pied)",
  );
  lines.push(
    `- Langues des séances : ${site.languages.sessions.join(" et ")} ; français (langue maternelle), anglais (B2), espagnol (B1), notions d’arabe et de roumain ; interprétariat possible à étudier`,
  );
  lines.push(
    `- Autre site (parents/enfants) : ${site.otherSite.url}`,
  );
  lines.push("");

  lines.push("## Pages");
  lines.push(`- [Accueil](${site.url}/) : présentation du cabinet et des motifs de consultation`);
  lines.push(
    `- [La psychomotricité](${site.url}/psychomotricite) : définition, profession paramédicale, motifs de consultation`,
  );
  lines.push(
    `- [Qui suis-je ?](${site.url}/qui-suis-je) : parcours, douance, neuroatypies, transculturalité, formations`,
  );
  lines.push(
    `- [Séances et tarifs](${site.url}/seances-et-tarifs) : déroulé, bilan psychomoteur, médiations, tarifs, aides au financement`,
  );
  lines.push(`- [Contact](${site.url}/contact) : coordonnées, plan d'accès, formulaire`);
  lines.push(`- [Questions fréquentes](${site.url}/faq) : ordonnance, remboursement, tarifs, accès`);
  lines.push(`- [English](${site.url}/en) : English-speaking psychomotor therapist in Nantes`);
  lines.push("");

  lines.push("## Motifs de consultation");
  for (const motif of motifs) {
    lines.push("");
    lines.push(`### ${motif.label}`);
    lines.push(`URL : ${site.url}/psychomotricite/${motif.slug}`);
    lines.push(motif.lead);
    for (const section of motif.sections) {
      lines.push("");
      lines.push(`**${section.heading}**`);
      for (const paragraph of section.paragraphs) {
        lines.push(paragraph);
      }
      if (section.items) {
        for (const item of section.items) {
          lines.push(`- ${item}`);
        }
      }
    }
    if (motif.note) {
      lines.push("");
      lines.push(`${motif.note.title} · ${motif.note.text}`);
    }
    if (motif.faq.length > 0) {
      lines.push("");
      lines.push("Questions fréquentes :");
      for (const item of motif.faq) {
        lines.push(`- ${item.question} ${item.answer}`);
      }
    }
  }
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
