import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/contact-cta";
import { Callout, Container, PageHero, PhotoPlaceholder, SectionTitle } from "@/components/ui";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Qui suis-je ?",
  description:
    "Psychomotricienne diplômée d’État depuis 2016, j’exerce à Nantes auprès d’adolescent.es et d’adultes. Douance (HPI, HQI/THQI), TSA, TDA-H, troubles dys, transculturalité.",
  path: "/qui-suis-je",
});

const themes = [
  "la migration et les parcours d’exil — transculturel",
  "la parentalité",
  "la question du genre — identité et orientation",
  "les violences sexistes et sexuelles — l’inceste, les violences faites aux femmes",
  "la précarité",
  "le travail du sexe / la prostitution",
  "le vécu des patient.es ayant une maladie chronique",
];

const formations = [
  "la parentalité",
  "le développement de l’enfant",
  "le portage",
  "la transculturalité",
  "la douance (HPI, HQI/THQI)",
];

export default function QuiSuisJePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Qui suis-je ?" },
        ]}
        eyebrow="Qui suis-je ?"
        title="Au-delà de l’obstacle."
        lead="Psychomotricienne depuis 2016, j’exerce en cabinet libéral auprès d’adolescent.es et d’adultes (et enfants sur demande ou en fonction des situations). Les demandes peuvent être très variées."
      />

      <Container className="grid gap-12 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-24">
        <div>
          <PhotoPlaceholder
            className="rounded-[2rem]"
            title="Portrait de Manuela, dans un geste qui lui ressemble"
            note="Cadrage vertical, lumière naturelle, fond neutre. Format conseillé : 1600 × 2000 px."
          />
          <dl className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-ink-3">En exercice depuis</dt>
              <dd className="text-ink">{site.practitioner.since}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-3">Public</dt>
              <dd className="text-ink">Adolescent.es & adultes</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-3">Langues des séances</dt>
              <dd className="text-ink">Français, anglais</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-3">Aussi</dt>
              <dd className="text-ink">Formatrice</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-7 text-lg leading-[1.78] text-ink-2">
          <p>
            Ayant développé une connaissance fine de la douance, je reçois très
            fréquemment des personnes HPI ou HQI/THQI. J’accompagne également des
            personnes concernées par d’autres neuroatypies comme les TSA, le
            TDA-H et/ou les troubles dys.
          </p>
          <p>
            N’hésitez pas à me contacter pour m’expliquer votre demande et je
            vous proposerai un rdv, ou je vous réorienterai vers un.e autre
            professionnel.le si besoin.
          </p>

          <div className="border-t border-line pt-7">
            <h2 className="font-display text-2xl text-ink">
              La psychomotricité comme ouverte sur le monde
            </h2>
            <p className="mt-4">
              En complément de la psychomotricité, mon appétence pour d’autres
              disciplines comme la sociologie, les sciences politiques et la
              philosophie m’a aussi conduite sur les bancs de l’université. Cela
              m’amène à penser la psychomotricité comme ouverte sur le monde.
            </p>
            <p className="mt-4">
              Tout comme le.a patient.e s’inscrit dans la société dans laquelle
              il.elle vit, un.e soignant.e n’exerce pas en dehors de la société
              dans laquelle il.elle s’inscrit. Le vécu corporel est aussi à lire,
              à comprendre et à actualiser au regard des thématiques sociétales
              contemporaines.
            </p>
          </div>
        </div>
      </Container>

      <section className="border-y border-line bg-ink text-paper">
        <Container className="py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/50">
                Ce qui m’importe
              </p>
              <h2 className="mt-4 text-[2rem] leading-tight text-paper sm:text-[2.4rem]">
                Des thématiques qui traversent la société, et les corps.
              </h2>
              <p className="mt-5 leading-relaxed text-paper/70">
                Je me suis intéressée plus particulièrement à :
              </p>
            </div>
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {themes.map((t) => (
                <li
                  key={t}
                  className="border-t border-paper/15 pt-4 text-paper/85"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
        <PhotoPlaceholder
          className="rounded-[2rem]"
          ratio="4 / 3"
          title="Une image de terrain : atelier, groupe, ou travail de la matière"
          note="Cadrage horizontal, sans visage identifiable de patient.es. Format conseillé : 1600 × 1200 px."
        />

        <div>
          <SectionTitle
            eyebrow="Aller vers"
            title="Une démarche d’aller vers, ancrée dans le réel."
          />
          <p className="mt-6 text-lg leading-relaxed text-ink-2">
            Dans une démarche d’aller vers, j’ai travaillé auprès des
            demandeurs.ses d’asile et sur des hébergements d’urgence pour mères
            isolées, la plupart étrangères, pendant 3 ans.
          </p>

          <h3 className="mt-10 font-display text-xl text-ink">
            Je suis formatrice sur les thématiques de :
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {formations.map((f) => (
              <li
                key={f}
                className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-2"
              >
                {f}
              </li>
            ))}
          </ul>

          <Callout title="Langues" tone="sage">
            <p>
              Je parle français (langue maternelle), anglais (B2), espagnol (B1)
              et j’ai quelques notions d’arabe (très débutante). Les langues pour
              les séances sont donc le français et l’anglais.
            </p>
          </Callout>

          <p className="mt-8 text-lg leading-relaxed text-ink-2">
            Pour en savoir plus sur le déroulé des séances et les tarifs,{" "}
            <Link href="/seances-et-tarifs" className="text-blue-deep link-quiet">
              consultez la page Séances &amp; tarifs
            </Link>
            .
          </p>
        </div>
      </Container>

      <CtaBand
        title="Faisons connaissance"
        text="Expliquez-moi votre demande en quelques mots : je vous dirai si je peux vous accompagner, et comment."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Qui suis-je ?", path: "/qui-suis-je" },
        ])}
      />
    </>
  );
}
