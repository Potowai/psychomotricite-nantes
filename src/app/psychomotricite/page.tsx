import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/contact-cta";
import { Callout, Container, PageHero, PhotoPlaceholder, SectionTitle } from "@/components/ui";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "La psychomotricité, en quelques mots",
  description:
    "La psychomotricité s’intéresse aux liens entre les vécus corporels et psychiques. Une profession paramédicale reconnue par un diplôme d’État, pour toute personne du bébé à la personne âgée.",
  path: "/psychomotricite",
});

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
      "handicap",
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
      "Il existe beaucoup de parcours de vie, tous singuliers, dans lesquels le rapport au corps n’est pas serein — et parfois la demande est « simplement » « d’apprendre à aimer son corps ».",
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
            title="Une image d’écoute et de sensorialité"
            note="Gros plan (mains, souffle, mouvement, texture), cadrage vertical. Format conseillé : 1200 × 1600 px."
          />
        </div>

        <div className="space-y-7 text-lg leading-[1.75] text-ink-2">
          <p>
            La psychomotricité est une pratique qui a pour repère principal de
            considérer le corps dans toute sa complexité : existentielle,
            expressive, émotionnelle, identitaire.
          </p>
          <blockquote className="border-l-2 border-corail/60 pl-6 font-display text-[1.5rem] leading-snug text-ink">
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
              encadrées par le décret n°88-6559 du 6 mai 1988.
            </p>
          </Callout>

          <p>
            Vous souhaitez comprendre comment se déroule un accompagnement, ou
            savoir si la psychomotricité peut vous concerner ?{" "}
            <Link href="/contact" className="text-blue-deep link-quiet">
              Écrivez-moi ou appelez-moi
            </Link>
            , je vous répondrai simplement.
          </p>
        </div>
      </Container>

      <section className="border-y border-line bg-paper-2/60">
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
        ]}
      />
    </>
  );
}
