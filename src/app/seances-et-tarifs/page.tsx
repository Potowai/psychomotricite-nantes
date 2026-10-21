import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/contact-cta";
import { Callout, Container, Faq, PageHero, SectionTitle } from "@/components/ui";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Séances, tarifs et aides au financement",
  description:
    "Séances de psychomotricité à Nantes : déroulé, médiations corporelles, durée (40 min), tarifs (47 € suivi, 200 € bilan en 4 séances) et aides possibles — mutuelles, CPAM, MDPH (PCH, AEEH).",
  path: "/seances-et-tarifs",
});

const financement = [
  {
    question: "Les mutuelles",
    answer: (
      <>
        <p>
          De plus en plus de mutuelles remboursent la psychomotricité (50 % des
          frais, ou 10 séances…), souvent via le <strong>forfait bien-être</strong>.
        </p>
        <p>
          En cas de refus : toutes les mutuelles disposent d’une{" "}
          <strong>commission de recours amiable</strong> pour les dépassements
          d’honoraires. On constitue alors un dossier — lettre de demande d’aide
          exceptionnelle, prescription médicale du bilan et/ou des séances,
          factures acquittées, devis des séances — adressé au service social ou
          à la commission des prestations sociales. Si le dossier est accepté, la
          mutuelle peut octroyer un forfait.
        </p>
      </>
    ),
  },
  {
    question: "Les prestations extra-légales de la CPAM",
    answer: (
      <p>
        Il s’agit d’une aide accordée à titre exceptionnel. On s’adresse au
        service social de sa mairie (CCAS) ou à un.e assistant.e social.e de la
        Sécurité sociale, avec un dossier « aide pour prestation extra-légale ».
        Des critères de revenus s’appliquent, et la demande est justifiée par un
        bilan. C’est possible sans MDPH, mais un dossier MDPH en cours peut
        faciliter la démarche.
      </p>
    ),
  },
  {
    question: "La MDPH — PCH et complément d’AEEH",
    answer: (
      <>
        <p>
          La MDPH concerne aussi des personnes sans handicap lourd. Le
          remboursement total ou partiel est un droit pour un handicap avéré et
          diagnostiqué (autisme, dyspraxie, TDAH…) par un médecin spécialisé
          (pédopsychiatre, neuropédiatre…).
        </p>
        <ul className="mt-3 space-y-2">
          <li>
            <strong>Adultes bénéficiaires MDPH :</strong> la psychomotricité peut
            relever de la PCH (prise en charge intégrale ou partielle). On fait
            le bilan d’abord, puis on l’envoie à la MDPH.
          </li>
          <li>
            <strong>Enfants et adolescents bénéficiaires MDPH :</strong> un
            complément peut s’ajouter à l’AEEH (Allocation d’Éducation de
            l’Enfant Handicapé), dont le montant dépend de 6 catégories. Le
            règlement des séances reste à charge, mais l’AEEH le compense.
          </li>
        </ul>
        <p className="mt-3">
          Ces dossiers sont longs ; ils sont facilités par un.e assistant.e
          social.e du CCAS ou de l’espace départemental des solidarités.
        </p>
      </>
    ),
  },
  {
    question: "Caisses de retraite et comités d’entreprise",
    answer: (
      <p>
        Les caisses de retraite et les comités d’entreprise peuvent participer
        par des aides financières. Renseignez-vous auprès de votre organisme.
      </p>
    ),
  },
];

const faqItems = [
  ...financement.map((f) => ({ question: f.question, answer: f.answer })),
  {
    question: "Quels documents sont souvent nécessaires ?",
    answer: (
      <p>
        Bilan, devis et facture — n’hésitez pas à m’en faire la demande, je vous
        les fournirai.
      </p>
    ),
  },
  {
    question: "Quelle est la différence entre un bilan et un suivi ?",
    answer: (
      <p>
        Le bilan psychomoteur est un temps d’évaluation : quelques rendez-vous
        pour préciser la demande, observer la motricité fine et globale, le
        rapport au temps et à l’espace, le vécu corporel et la sensorialité — et
        dégager une première grille de compréhension, avec les difficultés comme
        les ressources. Le suivi peut venir ensuite : des séances régulières, le
        plus souvent une fois par semaine ou tous les quinze jours, autour de
        médiations corporelles et d’échanges.
      </p>
    ),
  },
];

export default function SeancesEtTarifsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Séances & tarifs" },
        ]}
        eyebrow="Séances & tarifs"
        title="Le suivi en psychomotricité."
        lead="Le rythme des séances est le plus souvent 1 séance par semaine ou tous les 15 jours, mais cela peut varier — tout comme la durée de l’accompagnement."
      />

      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="space-y-12">
            <div>
              <SectionTitle
                eyebrow="Le déroulé"
                title="Se rencontrer, puis comprendre où en est le corps."
              />
              <div className="mt-6 space-y-5 text-lg leading-[1.78] text-ink-2">
                <p>
                  Les premiers rendez-vous permettent de préciser la demande et
                  de se rencontrer. Si besoin, un{" "}
                  <strong className="font-semibold text-ink">
                    bilan psychomoteur
                  </strong>{" "}
                  peut être réalisé ; ce n’est pas une étape obligatoire pour
                  donner suite à des séances. Il permet de dégager une première
                  grille de compréhension — une première photographie de là où en
                  est la personne dans son corps : motricité fine, motricité
                  globale, rapport au temps et à l’espace, vécu corporel, rapport
                  au corps, sensorialité.
                </p>
                <p>
                  Cela permet de voir quelles sont les difficultés, mais aussi
                  les <strong className="font-semibold text-ink">ressources</strong>.
                </p>
              </div>
            </div>

            <div className="border-t border-line pt-12">
              <SectionTitle
                eyebrow="Les séances"
                title="Des médiations corporelles, et des échanges."
              />
              <p className="mt-6 text-lg leading-[1.78] text-ink-2">
                Lorsqu’un suivi est décidé, les séances de psychomotricité
                s’articulent autour de médiations corporelles et d’échanges. Les
                médiations utilisées
                peuvent être :
              </p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {[
                  "relaxation",
                  "chant",
                  "danse",
                  "musique",
                  "dessin",
                  "argile",
                  "toucher thérapeutique",
                  "auto-massages",
                  "exercices de respiration",
                ].map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-line bg-paper-2 px-4 py-2 text-ink-2"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-line pt-12">
              <SectionTitle
                eyebrow="Le lieu"
                title="Les séances ont lieu au sein d’un cabinet pluridisciplinaire."
              />
              <p className="mt-6 text-lg leading-[1.78] text-ink-2">
                Les séances se déroulent le plus souvent à mon cabinet, au sein
                d’un cabinet pluridisciplinaire qui réunit {site.colocated}. Je
                peux me déplacer exceptionnellement à domicile et/ou sur les
                lieux de vie, pour des situations spécifiques.
              </p>
              <p className="mt-5 text-lg leading-[1.78] text-ink-2">
                La consultation a lieu{" "}
                <strong className="font-semibold text-ink">
                  du lundi au vendredi
                </strong>
                , sur rendez-vous.{" "}
                <Link href="/contact" className="text-blue-deep link-quiet">
                  Voir le plan d’accès et les transports
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Tarifs */}
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] border border-line bg-paper-2 p-8">
              <p className="eyebrow">Tarifs</p>
              <dl className="mt-6 space-y-5">
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
                  <dt className="text-ink-2">{site.pricing.suivi.label}</dt>
                  <dd className="font-display text-3xl text-ink">
                    {site.pricing.suivi.amount} €
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
                  <dt className="text-ink-2">
                    {site.pricing.bilan.label}
                    <span className="mt-1 block text-sm text-ink-3">
                      (prévoir {site.pricing.bilan.sessions} séances ·{" "}
                      {site.pricing.bilan.unitAmount} €/séance)
                    </span>
                  </dt>
                  <dd className="font-display text-3xl text-ink">
                    {site.pricing.bilan.total} €
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-ink-2">Durée d’une séance</dt>
                  <dd className="font-display text-3xl text-ink">
                    {site.pricing.durationMinutes} min
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-ink-2">
                {site.pricing.note}
              </p>
            </div>

            <Callout title="Remboursement" tone="terracotta">
              <p>
                Les psychomotricien.nes sont auxiliaires de la médecine ; à la
                différence des kinés et des orthophonistes, leurs soins ne
                bénéficient pas encore d’un remboursement par la Sécurité
                sociale. Des aides existent — voir ci-dessous.
              </p>
            </Callout>

            <Callout title="Ordonnance" tone="sage">
              <p>
                La psychomotricité est une profession paramédicale : une
                prescription médicale est obligatoire pour engager un bilan ou un
                suivi.
              </p>
            </Callout>
          </div>
        </div>
      </Container>

      <section className="bg-paper-2">
        <Container className="py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <SectionTitle
                eyebrow="Aides au financement"
                title="Ne restez pas seul.e face aux démarches."
              />
              <p className="mt-5 text-lg text-ink-2">
                Plusieurs dispositifs peuvent participer au financement des
                séances. Voici l’essentiel — et pour le détail du dossier, je
                peux vous accompagner.
              </p>
            </div>
            <Faq items={financement} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Une question sur les tarifs ou les aides ?"
        text="Appelez-moi ou envoyez-moi un SMS : nous en parlerons simplement. Si vous rencontrez des difficultés financières, dites-le moi, nous pouvons en parler."
      />

      <JsonLd
        data={[
          faqSchema(
            faqItems.map((f) => ({
              question: f.question,
              answer:
                typeof f.answer === "string"
                  ? f.answer
                  : `Voir le détail sur la page Séances et tarifs de ${site.name}, psychomotricienne à Nantes.`,
            })),
          ),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Séances & tarifs", path: "/seances-et-tarifs" },
          ]),
        ]}
      />
    </>
  );
}
