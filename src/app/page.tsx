import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import feuilleRose from "@/assets/images/feuille-rose.png";
import figureLineInk from "@/assets/images/figure-line-ink.png";
import washBleu from "@/assets/images/wash-bleu.png";
import { CabinetMap } from "@/components/cabinet-map";
import { CtaBand } from "@/components/contact-cta";
import { Container, Faq, PhotoPlaceholder, SectionTitle } from "@/components/ui";
import { JsonLd, faqSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Psychomotricienne à Nantes — adolescents & adultes",
  description:
    "Manuela Edom, psychomotricienne diplômée d’État à Nantes. Séances pour adolescent.es et adultes, au cabinet du 4 rue de la Mitrie. Douance (HPI, HQI/THQI), TSA, TDA-H, troubles dys. Appel ou SMS au 06 84 74 96 70.",
  path: "/",
  locale: "fr_FR",
  languages: { "fr-FR": "/", en: "/en", "x-default": "/" },
});

const motifs = [
  {
    title: "Le corps et la motricité",
    text: "Retard de développement, maladresse, troubles de l’équilibre ou de la coordination, tics, bégaiement, douleurs chroniques, syndrome post-chute, maladies, troubles neurologiques, handicap.",
  },
  {
    title: "Les émotions et la psyché",
    text: "Confiance en soi, anxiété, dépression, addictions, psychotraumatismes, difficultés relationnelles, troubles du comportement, troubles psychosomatiques, épuisement professionnel / burn out.",
  },
  {
    title: "Le rapport au corps",
    text: "Troubles du comportement alimentaire, vécu de violences, dysphorie de genre — ou, plus simplement, le désir « d’apprendre à aimer son corps ».",
  },
  {
    title: "Les étapes de la vie",
    text: "Notre corps grandit et traverse des seuils : puberté, grossesse, vieillissement. Autant de périodes de sensibilité où une séance peut être un espace sécurisant.",
  },
  {
    title: "Les neuroatypies",
    text: "Ayant développé une connaissance fine de la douance, je reçois très fréquemment des personnes HPI ou HQI/THQI. J’accompagne aussi les personnes concernées par les TSA, le TDA-H et/ou les troubles dys.",
  },
] as const;

/* Texture d'abord, une seule couleur : son bleu */
const motifAccent = "var(--color-azure)";

const etapes = [
  {
    n: "01",
    title: "Se rencontrer",
    text: "Les premiers rendez-vous permettent de préciser la demande et de se rencontrer. Vous expliquez votre situation ; je vous écoute, sans jugement et à votre rythme.",
  },
  {
    n: "02",
    title: "Le bilan psychomoteur",
    text: "C’est le temps d’une première photographie : où en est la personne dans son corps — motricité fine et globale, rapport au temps et à l’espace, vécu corporel, sensorialité. On y lit les difficultés, et aussi les ressources.",
  },
  {
    n: "03",
    title: "Les séances",
    text: "Elles s’articulent autour de médiations corporelles et d’échanges : relaxation, chant, danse, musique, dessin, argile, toucher thérapeutique, auto-massages, respiration. Une séance dure environ 40 minutes.",
  },
] as const;

const faqItems = [
  {
    question: "Faut-il une ordonnance pour consulter une psychomotricienne ?",
    answer:
      "Oui. Psychomotricien.ne est une profession paramédicale, reconnue par un diplôme d’État, de la même manière que les orthophonistes et les kinésithérapeutes. Les compétences des psychomotricien.nes sont encadrées par le décret n°88-659 du 6 mai 1988. Une prescription médicale est donc obligatoire.",
  },
  {
    question: "La psychomotricité est-elle remboursée ?",
    answer:
      "Les psychomotricien.nes sont auxiliaires de la médecine ; leurs soins ne bénéficient pas encore d’un remboursement par la Sécurité sociale. Des aides existent cependant : de plus en plus de mutuelles (forfait bien-être), les prestations extra-légales de la CPAM, la MDPH (PCH, complément d’AEEH), ainsi que certaines caisses de retraite et comités d’entreprise.",
  },
  {
    question: "Combien coûte une séance et combien de temps dure-t-elle ?",
    answer:
      "Une séance de suivi coûte 47 €. Le bilan psychomoteur se déroule en 4 séances, soit 200 € au total (50 € par séance). Une séance dure environ 40 minutes, le plus souvent une fois par semaine ou tous les 15 jours. En cas de difficultés financières, nous pouvons en parler.",
  },
  {
    question: "Recevez-vous les adultes ? Et les enfants ?",
    answer:
      "Oui, j’exerce en cabinet libéral auprès d’adolescent.es et d’adultes. Je reçois également les enfants sur demande ou en fonction des situations, et les séances s’adressent à toute personne, du bébé à la personne âgée.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden border-b border-line/70 paper-grain">
        {/* Aquarelles — les couleurs de Manuela */}
        <Image
          src={washBleu}
          alt=""
          aria-hidden="true"
          sizes="(max-width: 1024px) 300px, 620px"
          className="pointer-events-none absolute -bottom-8 -right-16 w-[300px] max-w-none opacity-70 mix-blend-multiply lg:-top-28 lg:bottom-auto lg:-right-24 lg:w-[620px] lg:opacity-80"
        />
        <Image
          src={feuilleRose}
          alt=""
          aria-hidden="true"
          sizes="300px"
          className="pointer-events-none absolute -left-16 bottom-6 hidden w-[300px] max-w-none -rotate-12 opacity-60 mix-blend-multiply md:block"
        />
        <Container className="relative grid gap-10 pb-16 pt-12 md:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:pb-24">
          <div className="animate-fade-up">
            <p className="eyebrow">
              Psychomotricienne diplômée d’État · Nantes
            </p>
            <h1 className="mt-5 text-[2.75rem] leading-[1.0] sm:text-[3.6rem] lg:text-[4.4rem]">
              Le lien entre le corps
              <br />
              et l’esprit.
              <br />
              <span className="text-azure-deep">Le lien à l’autre.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl">
              Je suis Manuela Edom, psychomotricienne à Nantes depuis 2016.
              J’accompagne adolescent.es et adultes, là où le corps raconte
              quelque chose de ce que l’on traverse.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-ink px-7 py-4 text-sm text-paper transition-colors hover:bg-azure-deep"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/psychomotricite"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-4 text-sm text-ink transition-colors hover:border-ink/50"
              >
                Comprendre la psychomotricité
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg gap-5 border-t border-line pt-6 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-ink-3">En exercice</dt>
                <dd className="mt-1 font-display text-2xl text-ink">
                  depuis 2016
                </dd>
              </div>
              <div>
                <dt className="text-ink-3">Public</dt>
                <dd className="mt-1 font-display text-2xl text-ink">
                  ados et adultes
                </dd>
              </div>
              <div>
                <dt className="text-ink-3">Au cabinet</dt>
                <dd className="mt-1 font-display text-2xl text-ink">
                  du lundi au vendredi
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute right-0 top-1/2 hidden h-[82%] w-[82%] -translate-y-1/2 rounded-full bg-azure-soft/70 blur-3xl lg:block" />
            <Image
              src={figureLineInk}
              alt="Dessin au trait d’un corps assis, courbé, la tête vers l’épaule."
              preload
              sizes="(max-width: 1024px) 60vw, 34vw"
              className="relative h-auto w-[220px] sm:w-[280px] lg:w-[340px]"
            />
          </div>
        </Container>
      </section>

      {/* ---------------- Manifeste ---------------- */}
      <section>
        <Container className="grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-28">
          <SectionTitle
            eyebrow="La psychomotricité"
            title="Une attention portée aux liens entre les vécus corporels et psychiques."
          />
          <div className="space-y-6 text-lg leading-relaxed text-ink-2">
            <p>
              La psychomotricité s’est construite en s’appuyant sur les
              neurosciences, la physiologie, l’anatomie, tout autant que sur la
              psychologie et la psychiatrie. Elle se situe à la croisée de ces
              disciplines.
            </p>
            <p>
              Les séances s’adressent à toute personne, du bébé à la personne
              âgée. Les demandes s’inscrivent sur un continuum : d’une simple
              volonté d’introspection ou d’une gêne quotidienne, à une
              souffrance parfois profonde, et/ou à des troubles plus sévères.
            </p>
            <Link
              href="/psychomotricite"
              className="inline-flex items-center gap-2 text-blue-deep link-quiet"
            >
              Lire la suite sur la psychomotricité
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ---------------- Motifs ---------------- */}
      <section className="border-y border-line bg-paper-2/60">
        <Container className="py-20 lg:py-28">
          <div className="max-w-2xl">
            <SectionTitle
              eyebrow="Ce qui vous amène"
              title="Les motifs qui conduisent à consulter sont variés."
            />
            <p className="mt-5 text-lg text-ink-2">
              Ils peuvent concerner directement le corps et la motricité,
              davantage les émotions et la relation aux autres — ou le rapport
              au corps lui-même.
            </p>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {motifs.map((m, i) => (
              <li
                key={m.title}
                className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-line bg-paper p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                <span
                  aria-hidden="true"
                  className="card-texture pointer-events-none absolute inset-0"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    backgroundImage: `radial-gradient(135% 115% at 100% 0%, color-mix(in srgb, ${motifAccent} 14%, transparent), transparent 62%)`,
                  }}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-6 top-4 font-display text-[3.25rem] leading-none text-ink/[0.08]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="relative mb-5 block h-1.5 w-10 rounded-full"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${motifAccent} 60%, transparent)`,
                  }}
                />
                <h3 className="relative font-display text-xl text-ink">
                  {m.title}
                </h3>
                <p className="relative mt-3 leading-relaxed text-ink-2">
                  {m.text}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------------- Déroulé ---------------- */}
      <section>
        <Container className="grid gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-28">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionTitle
              eyebrow="Comment ça se passe"
              title="Un espace sécurisant, à votre rythme."
            />
            <p className="mt-5 text-lg text-ink-2">
              Le rythme le plus fréquent est d’une séance par semaine ou tous les
              15 jours, mais cela peut varier, tout comme la durée de
              l’accompagnement.
            </p>
            <Link
              href="/seances-et-tarifs"
              className="mt-6 inline-flex items-center gap-2 text-blue-deep link-quiet"
            >
              Séances, tarifs et aides au financement
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <ol className="space-y-2">
            {etapes.map((e, i) => (
              <li
                key={e.n}
                className="grid gap-4 border-t border-line py-7 sm:grid-cols-[auto_1fr] sm:gap-8"
              >
                <span
                  className={`font-display text-2xl ${
                    ["text-azure-deep", "text-corail-deep", "text-sage"][i % 3]
                  }`}
                >
                  {e.n}
                </span>
                <div>
                  <h3 className="font-display text-2xl text-ink">{e.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-2">{e.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ---------------- Qui suis-je ---------------- */}
      <section className="relative overflow-hidden border-y border-line bg-ink text-paper">
        <Image
          src={washBleu}
          alt=""
          aria-hidden="true"
          sizes="680px"
          className="pointer-events-none absolute -right-24 -top-28 w-[680px] max-w-none opacity-25 mix-blend-screen"
        />
        <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-24">
          <PhotoPlaceholder
            className="rounded-[2rem]"
            title="Portrait couleur de Manuela, dans un geste qui lui ressemble"
            note="Cadrage vertical, lumière naturelle, fond neutre. Format conseillé : 1600 × 2000 px."
          />
          <div>
            <span
              aria-hidden="true"
              className="mb-5 block h-1.5 w-12 rounded-full bg-corail"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/50">
              Qui suis-je ?
            </p>
            <blockquote className="mt-5 font-display text-[1.9rem] leading-[1.2] text-paper sm:text-[2.3rem]">
              « Le vécu corporel est aussi à lire, à comprendre et à actualiser
              au regard des thématiques sociétales contemporaines. »
            </blockquote>
            <p className="mt-6 leading-relaxed text-paper/70">
              Psychomotricienne depuis 2016, mon appétence pour la sociologie,
              les sciences politiques et la philosophie m’amène à penser la
              psychomotricité comme ouverte sur le monde. Je suis également
              formatrice sur la parentalité, le développement de l’enfant, le
              portage, la transculturalité et la douance.
            </p>
            <Link
              href="/qui-suis-je"
              className="mt-8 inline-flex items-center gap-2 border-b border-paper/40 pb-1 text-paper transition-colors hover:border-paper"
            >
              En savoir plus sur mon parcours
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ---------------- Infos pratiques ---------------- */}
      <section>
        <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-28">
          <div>
            <SectionTitle eyebrow="Informations pratiques" title="Le cabinet." />
            <p className="mt-5 text-lg text-ink-2">
              Je vous reçois au sein d’un cabinet pluridisciplinaire :{" "}
              {site.colocated}.
            </p>
            <p className="mt-3 text-lg text-ink-2">
              Situé à proximité du centre-ville, quartier Malakoff –
              Saint-Donatien :
            </p>
            <address className="mt-6 space-y-1 not-italic text-ink">
              <span className="block font-display text-2xl">
                {site.address.name}
              </span>
              <span className="block text-ink-2">{site.address.street}</span>
              <span className="block text-ink-2">
                {site.address.postalCode} {site.address.city}
              </span>
            </address>
            <CabinetMap className="mt-6" height={260} />
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            <InfoCell
              label="Consultations"
              value="Du lundi au vendredi"
              accent="bg-azure"
            />
            <InfoCell
              label="Quartier"
              value="Malakoff – Saint-Donatien"
              accent="bg-sage"
            />
            <InfoCell
              label="Langues"
              value="Français · Anglais"
              accent="bg-ochre"
            />
            <InfoCell
              label="Tarifs"
              value="47 € suivi · 200 € bilan"
              accent="bg-corail"
            />
            <div className="bg-blue-soft/50 p-6 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.16em] text-ink-3">
                Transports
              </p>
              <ul className="mt-3 space-y-1 text-ink-2">
                <li>Bus 11 et 12 — arrêt Casterneau · 1 min à pied</li>
                <li>C1 — arrêt Chalâtres · 10 min à pied</li>
                <li>Tramway ligne 1 — arrêt Moutonnerie · 20 min à pied</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- Ressources ---------------- */}
      <section className="border-t border-line bg-paper-2/60">
        <Container className="grid gap-12 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <PhotoPlaceholder
            className="rounded-[2rem] lg:order-2"
            ratio="4 / 3"
            title="Un moment de séance : médiation corporelle, matière, mouvement ou toucher"
            note="Photo couleur, cadrage horizontal, sans visage identifiable de patient.es. Format conseillé : 1600 × 1200 px."
          />
          <div className="lg:order-1">
            <SectionTitle
              eyebrow="Ressources"
              title="Comprendre ce que le corps dit."
            />
            <p className="mt-5 text-lg text-ink-2">
              Des articles pour explorer la psychomotricité, la douance, les
              neuroatypies et le rapport au corps — écrits pour être utiles, que
              vous consultiez ou non.
            </p>
            <ul className="mt-8 space-y-4">
              <ResourceLink
                href="/blog/douance-hqi-thqi-et-psychomotricite"
                title="Douance (HPI, HQI/THQI) et psychomotricité"
              />
              <ResourceLink
                href="/blog/anxiete-burn-out-pourquoi-passer-par-le-corps"
                title="Anxiété et burn out : pourquoi passer par le corps ?"
              />
              <ResourceLink
                href="/blog/le-bilan-psychomoteur"
                title="Le bilan psychomoteur : à quoi s’attendre"
              />
            </ul>
            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 text-blue-deep link-quiet"
            >
              Toutes les ressources
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section>
        <Container className="grid gap-12 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:py-28">
          <SectionTitle
            eyebrow="Questions fréquentes"
            title="Avant de prendre rendez-vous."
          />
          <Faq items={faqItems.map((f) => ({ ...f }))} />
        </Container>
      </section>

      <CtaBand />

      <JsonLd data={faqSchema(faqItems.map((f) => ({ ...f })))} />
    </>
  );
}

function InfoCell({
  label,
  value,
  accent = "bg-azure",
}: {
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="bg-paper p-6">
      <span
        aria-hidden="true"
        className={`mb-4 block h-1 w-8 rounded-full ${accent}`}
      />
      <p className="text-xs uppercase tracking-[0.16em] text-ink-3">{label}</p>
      <p className="mt-2 font-display text-xl text-ink">{value}</p>
    </div>
  );
}

function ResourceLink({ href, title }: { href: string; title: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-baseline justify-between gap-4 border-b border-line pb-4"
      >
        <span className="font-display text-xl text-ink transition-colors group-hover:text-blue-deep">
          {title}
        </span>
        <span
          aria-hidden="true"
          className="translate-y-0 text-ink-3 transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </li>
  );
}
