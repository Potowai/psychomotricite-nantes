import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/contact-cta";
import { Callout, Container, Faq, PageHero, PhotoPlaceholder, SectionTitle } from "@/components/ui";
import { motifs as motifPages } from "@/content/motifs";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "La psychomotricité, en quelques mots",
  description:
    "La psychomotricité s’intéresse aux liens entre les vécus corporels et psychiques. Une profession paramédicale reconnue par un diplôme d’État, pour toute personne du bébé à la personne âgée.",
  path: "/psychomotricite",
});

const faqItems = [
  {
    question: "Qu’est-ce que la psychomotricité ?",
    answer:
      "Une profession paramédicale qui s’intéresse aux liens entre le corps et la vie psychique : la motricité, les sensations, le tonus, le rapport au temps et à l’espace, la relation à l’autre. Elle s’exerce avec un diplôme d’État, comme l’orthophonie ou la kinésithérapie.",
  },
  {
    question: "À quoi ça sert concrètement ?",
    answer:
      "À retrouver des appuis : mieux sentir son corps, coordonner ses gestes, réguler ce qui déborde, se repérer dans l’espace et dans le temps, oser bouger et prendre sa place. On passe par le mouvement, la relaxation, la respiration, la matière et la parole.",
  },
  {
    question: "Est-ce que ça marche aussi pour un adulte ?",
    answer:
      "Oui. La psychomotricité ne s’adresse pas qu’aux enfants : je reçois des adolescent.es et des adultes, parfois longtemps après que les difficultés se sont installées. Aucun diagnostic n’est nécessaire pour venir. Une prescription médicale est en revanche obligatoire pour engager le bilan ou le suivi.",
  },
  {
    question: "Quelle différence avec l’orthophonie ou la psychologie ?",
    answer:
      "Ces approches se complètent plus qu’elles ne s’opposent. L’orthophoniste travaille le langage et les apprentissages du langage écrit ; le psychologue travaille la vie psychique par le biais de la parole et, selon sa formation, le bilan cognitif. La psychomotricité prend appui sur le corps, le mouvement et les sensations.",
  },
];

const motifs = [
  {
    title: "Le corps et la motricité",
    intro:
      "Ils peuvent concerner directement le corps et la motricité.",
    items: [
      "retard de développement",
      "maladresse",
      "troubles de l’équilibre",
      "troubles de la coordination",
      "tics",
      "bégaiement",
      "maladies",
      "troubles liés au vieillissement",
      "syndrome post-chute",
      "troubles neurologiques",
      "douleurs chroniques",
      "accidents",
    ],
    outro:
      "Dans ces situations, le corps est atteint dans son intégrité et/ou sa gestualité.",
  },
  {
    title: "Les émotions, la relation, la psyché",
    intro:
      "Ils peuvent aussi concerner davantage les émotions, la relation aux autres, à soi ; la psyché.",
    items: [
      "confiance en soi",
      "anxiété",
      "dépression",
      "addictions",
      "psychotraumatismes",
      "difficultés relationnelles",
      "troubles du comportement",
      "gestion de la colère",
      "troubles du sommeil",
      "troubles de l’alimentation",
      "période de vie compliquée",
      "troubles psychosomatiques",
      "épuisement professionnel / burn out",
    ],
    outro:
      "Passer par le corps permet de faire un pas de côté tout en allant explorer en profondeur. C’est aussi un moyen de chercher à établir des fondations solides et cultiver ses ressources internes.",
  },
  {
    title: "Le rapport au corps",
    intro:
      "Pour certaines personnes, c’est le rapport au corps directement qui est à l’origine de la souffrance.",
    items: [
      "troubles du comportement alimentaire",
      "vécu de violences",
      "dysphorie de genre",
    ],
    outro:
      "Il existe beaucoup de parcours de vie, tous singuliers, dans lesquels le rapport au corps n’est pas serein — et parfois la demande est « simplement » d’apprendre à se réapproprier son corps, l’habiter, l’aimer.",
  },
  {
    title: "Les étapes de la vie",
    intro: "Notre corps est, lui, toujours en mouvement. Il grandit, vit des étapes.",
    items: ["la puberté", "la grossesse", "le vieillissement"],
    outro:
      "Dans ces périodes de sensibilité particulières, un besoin de réassurance et d’accompagnement peut s’exprimer. La séance de psychomotricité peut être un espace sécurisant pour cela.",
  },
];

export default function PsychomotricitePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "La psychomotricité" },
        ]}
        eyebrow="La psychomotricité"
        title={
          <>
            Le lien entre le corps et l’esprit.
            <br />
            <span className="text-blue">Le lien à l’autre.</span>
          </>
        }
        lead={
          <>
            La psychomotricité s’est construite en s’appuyant sur les
            neurosciences, la physiologie, l’anatomie, tout autant que sur la
            psychologie et la psychiatrie. Elle se situe à la croisée de ces
            disciplines.
          </>
        }
      />

      <Container className="grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle
            eyebrow="Une spécificité"
            title="L’attention portée aux liens entre les vécus corporels et psychiques."
          />
          <PhotoPlaceholder
            className="mt-10 rounded-[2rem]"
            label="Illustration à venir"
            title="Une image d’écoute et de sensorialité"
            note="Gros plan : mains, souffle, mouvement, texture. Illustration sans visage identifiable."
          />
        </div>

        <div className="space-y-7 text-lg leading-[1.75] text-ink-2">
          <p>
            La psychomotricité est une pratique qui a pour repère principal de
            considérer le corps dans toute sa complexité : existentielle,
            expressive, émotionnelle, identitaire.
          </p>
          <blockquote className="border-l-2 border-azure/60 pl-6 font-display text-[1.5rem] leading-snug text-ink">
            « Considérer le corps dans toute sa complexité : existentielle,
            expressive, émotionnelle, identitaire. »
          </blockquote>
          <p>
            Les séances de psychomotricité s’adressent à toute personne, du bébé
            à la personne âgée. Les demandes s’inscrivent sur un continuum allant
            d’une simple volonté d’introspection ou d’une gêne quotidienne pour
            certain.es, à une souffrance, parfois profonde, et/ou des troubles
            plus sévères, pour d’autres.
          </p>

          <Callout title="Une profession paramédicale" tone="blue">
            <p>
              Psychomotricien.ne est une profession paramédicale, reconnue par un
              diplôme d’État, de la même manière que les orthophonistes et les
              kinésithérapeutes. Les compétences des psychomotricien.nes sont
              encadrées par le décret n°88-659 du 6 mai 1988. Une prescription
              médicale est donc obligatoire.
            </p>
          </Callout>
        </div>
      </Container>

      <section className="bg-paper-2">
        <Container className="py-16 lg:py-24">
          <div className="max-w-2xl">
            <SectionTitle
              eyebrow="Les motifs qui amènent à consulter"
              title="Ils sont variés — et tous singuliers."
            />
          </div>

          <div className="mt-14 grid gap-x-14 gap-y-14 md:grid-cols-2">
            {motifs.map((m) => (
              <div key={m.title} className="border-t border-line pt-7">
                <h3 className="font-display text-2xl text-ink">{m.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-2">{m.intro}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {m.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm text-ink-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 leading-relaxed text-ink-2">{m.outro}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-line pt-10">
            <p className="eyebrow">Pour aller plus loin</p>
            <h2 className="mt-3 font-display text-display-4 leading-tight text-ink sm:text-[2rem]">
              Certains motifs particuliers sont développés dans une page dédiée.
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {motifPages.map((m, i) => (
                <li
                  key={m.slug}
                  className={`${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${
                    i === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <Link
                    href={`/psychomotricite/${m.slug}`}
                    className="group flex h-full flex-col rounded-[1.25rem] border border-line bg-paper p-6 transition-colors hover:border-azure/40"
                  >
                    <span className="font-display text-xl leading-snug text-ink group-hover:text-azure-deep">
                      {m.label}
                    </span>
                    <span className="mt-2 text-sm leading-relaxed text-ink-2">
                      {m.metaDescription}
                    </span>
                    <span className="mt-4 text-sm font-medium text-azure-deep">
                      En savoir plus{" "}
                      <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-b border-line/70 bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionTitle
            eyebrow="Questions fréquentes"
            title="Ce qu’on me demande souvent."
          />
          <div className="mt-10 max-w-3xl">
            <Faq items={faqItems} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Une question sur votre situation ?"
        text="N’hésitez pas à me contacter pour m’expliquer votre demande : je vous proposerai un rendez-vous, ou je vous réorienterai vers un.e autre professionnel.le si besoin."
      />

      <JsonLd
        data={[
          serviceSchema({
            name: "Psychomotricité pour adolescents et adultes",
            description:
              "Séances et bilan de psychomotricité pour adolescent.es et adultes à Nantes, autour des liens entre vécus corporels et psychiques.",
            path: "/psychomotricite",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "La psychomotricité", path: "/psychomotricite" },
          ]),
          faqSchema(
            faqItems.map((f) => ({ question: f.question, answer: f.answer })),
          ),
        ]}
      />
    </>
  );
}
