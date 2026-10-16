import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/contact-cta";
import { Container, Faq, PageHero } from "@/components/ui";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Questions fréquentes",
  description:
    "Ordonnance, remboursement, tarifs, durée des séances, douance, accès au cabinet à Nantes : les réponses aux questions les plus fréquentes sur la psychomotricité avec Manuela Edom.",
  path: "/faq",
});

type Item = { question: string; answer: string; category: string };

const faq: Item[] = [
  {
    category: "Consulter",
    question: "Faut-il une ordonnance pour consulter une psychomotricienne ?",
    answer:
      "Non. Vous pouvez prendre rendez-vous de vous-même, par téléphone, par SMS ou via le formulaire de contact. Une prescription médicale n’est pas nécessaire pour venir, mais elle peut faciliter certaines démarches de remboursement (mutuelle, MDPH).",
  },
  {
    category: "Consulter",
    question: "Recevez-vous les adultes ? Et les enfants ?",
    answer:
      "J’exerce en cabinet libéral auprès d’adolescent.es et d’adultes, et je reçois également les enfants sur demande ou en fonction des situations. Les séances de psychomotricité s’adressent à toute personne, du bébé à la personne âgée.",
  },
  {
    category: "Consulter",
    question: "Faut-il un diagnostic ou un trouble particulier pour venir ?",
    answer:
      "Non. Les demandes s’inscrivent sur un continuum allant d’une simple volonté d’introspection ou d’une gêne quotidienne, à une souffrance parfois profonde et/ou à des troubles plus sévères. Aucun diagnostic préalable n’est exigé.",
  },
  {
    category: "Consulter",
    question: "Que se passe-t-il lors d’un premier rendez-vous ?",
    answer:
      "Les premiers rendez-vous permettent de préciser la demande et de se rencontrer. C’est aussi le temps du bilan psychomoteur : dégager une première grille de compréhension et une première photographie de là où en est la personne dans son corps — motricité fine et globale, rapport au temps et à l’espace, vécu corporel, sensorialité.",
  },
  {
    category: "Tarifs & remboursement",
    question: "Combien coûte une séance ?",
    answer:
      "Une séance de suivi coûte 47 € et une séance de bilan 50 €. Une séance dure environ 40 minutes. Si vous rencontrez des difficultés financières, nous pouvons en parler.",
  },
  {
    category: "Tarifs & remboursement",
    question: "La psychomotricité est-elle remboursée par la Sécurité sociale ?",
    answer:
      "Pas encore. Les psychomotricien.nes sont auxiliaires de la médecine, mais leurs soins ne bénéficient pas d’un remboursement par la Sécurité sociale, à la différence des kinésithérapeutes et des orthophonistes.",
  },
  {
    category: "Tarifs & remboursement",
    question: "Quelles aides existent pour financer les séances ?",
    answer:
      "Plusieurs dispositifs : de plus en plus de mutuelles remboursent la psychomotricité (souvent via le forfait bien-être) ; les prestations extra-légales de la CPAM, à demander via le service social de sa mairie (CCAS) ; la MDPH, avec la PCH pour les adultes et un complément d’AEEH pour les enfants et adolescents ; enfin, certaines caisses de retraite et comités d’entreprise.",
  },
  {
    category: "Tarifs & remboursement",
    question: "Quels documents faut-il pour ces démarches ?",
    answer:
      "Le plus souvent : le bilan, un devis et les factures. N’hésitez pas à me les demander, je vous les fournirai.",
  },
  {
    category: "Le déroulé",
    question: "Combien de temps dure une séance ?",
    answer:
      "Environ 40 minutes. Le rythme le plus fréquent est d’une séance par semaine ou tous les 15 jours, mais cela peut varier, tout comme la durée de l’accompagnement.",
  },
  {
    category: "Le déroulé",
    question: "Que fait-on concrètement pendant une séance ?",
    answer:
      "Les séances s’articulent autour de médiations corporelles et d’échanges. Les médiations utilisées peuvent être la relaxation, le chant, la danse, la musique, le dessin, l’argile, le toucher thérapeutique, les auto-massages et les exercices de respiration.",
  },
  {
    category: "Le déroulé",
    question: "En quoi la psychomotricité est-elle différente de la kinésithérapie ?",
    answer:
      "La kinésithérapie travaille la rééducation fonctionnelle et musculaire. La psychomotricité s’attache aux liens entre les vécus corporels et psychiques : la façon dont le corps se vit, se ressent, exprime et se met en relation.",
  },
  {
    category: "Le cabinet",
    question: "Où se trouve le cabinet et comment y accéder ?",
    answer:
      "Le cabinet est situé au 2 rue d’Allonville, 44000 Nantes, dans un cabinet paramédical pluridisciplinaire. Il est en rez-de-chaussée, avec accès PMR et parking gratuit pendant 2 heures. En transports : tramway ligne 1, arrêt Moutonnerie ; bus 11 et 12, arrêt Dalby ou Casterneau.",
  },
  {
    category: "Le cabinet",
    question: "Quels sont les horaires de consultation ?",
    answer:
      "Je vous reçois au cabinet les lundis et samedis, sur rendez-vous. Prenez rendez-vous par téléphone ou SMS au 06 84 74 96 70.",
  },
  {
    category: "Douance & neuroatypies",
    question: "Accompagnez-vous les personnes HQI/THQI ?",
    answer:
      "Oui. Ayant développé une connaissance fine de la douance, je reçois très fréquemment des personnes HQI/THQI. J’accompagne également des personnes concernées par les TSA, le TDA-H et/ou les troubles dys.",
  },
  {
    category: "Douance & neuroatypies",
    question: "Dans quelles langues les séances ont-elles lieu ?",
    answer:
      "En français et en anglais. Je parle français (langue maternelle), anglais (B2), espagnol (B1) et j’ai quelques notions d’arabe.",
  },
];

const categories = [...new Set(faq.map((f) => f.category))];

export default function FaqPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Questions fréquentes" }]}
        eyebrow="Questions fréquentes"
        title="Tout ce qu’on se demande avant de commencer."
        lead="Ordonnance, tarifs, remboursement, déroulé, accès au cabinet : voici les réponses aux questions les plus fréquentes. Et si la vôtre n’y est pas, écrivez-moi."
      />

      <Container className="space-y-16 py-16 lg:py-24">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="eyebrow">{category}</h2>
            <div className="mt-6">
              <Faq
                items={faq
                  .filter((f) => f.category === category)
                  .map((f) => ({ question: f.question, answer: f.answer }))}
              />
            </div>
          </section>
        ))}

        <div className="rounded-[2rem] border border-line bg-paper-2/60 p-8 text-center">
          <p className="font-display text-2xl text-ink">
            Une autre question ?
          </p>
          <p className="mx-auto mt-3 max-w-xl text-ink-2">
            N’hésitez pas à me contacter pour m’expliquer votre demande : je vous
            répondrai simplement, ou je vous orienterai vers la personne la plus
            juste.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-ink px-7 py-3.5 text-sm text-paper transition-colors hover:bg-blue-deep"
          >
            Me contacter
          </Link>
        </div>
      </Container>

      <CtaBand />

      <JsonLd
        data={[
          faqSchema(faq.map((f) => ({ question: f.question, answer: f.answer }))),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Questions fréquentes", path: "/faq" },
          ]),
        ]}
      />
      <p className="sr-only">
        {site.name}, {site.role} à Nantes — {site.contact.phoneDisplay}.
      </p>
    </>
  );
}
