import Image from "next/image";
import Link from "next/link";
import feuilleRose from "@/assets/images/feuille-rose.png";
import figureLineInk from "@/assets/images/figure-line-ink.png";
import portraitManuela from "@/assets/images/portrait-manuela.webp";
import aquarelleChaude from "@/assets/images/aquarelle-chaude.png";
import { CabinetMap } from "@/components/cabinet-map";
import { CtaBand } from "@/components/contact-cta";
import { Container, Faq, SectionTitle } from "@/components/ui";
import { copy } from "@/i18n/copies/home";
import { pages, type Locale } from "@/lib/i18n";
import { JsonLd, faqSchema } from "@/lib/jsonld";

/* Les cinq couleurs de l'aquarelle, réparties sur les cartes. */
const motifAccents = [
  "var(--color-blue)",
  "var(--color-gold)",
  "var(--color-teal)",
  "var(--color-ocean)",
  "var(--color-azure)",
];

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden border-b border-line/70 paper-grain">
        {/* Aquarelles — les couleurs de Manuela */}
        <Image
          src={aquarelleChaude}
          alt=""
          aria-hidden="true"
          sizes="(max-width: 1024px) 300px, 440px"
          className="aquarelle-blob pointer-events-none absolute -bottom-8 -end-16 w-[300px] max-w-none opacity-60 mix-blend-multiply lg:-top-20 lg:bottom-auto lg:-end-4 lg:w-[440px] lg:opacity-65"
        />
        <Image
          src={feuilleRose}
          alt=""
          aria-hidden="true"
          sizes="300px"
          className="pointer-events-none absolute -start-16 bottom-6 hidden w-[300px] max-w-none -rotate-12 opacity-60 mix-blend-multiply md:block"
        />
        <Container className="relative grid gap-10 pb-16 pt-12 md:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:pb-24">
          <div className="animate-fade-up">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="mt-5 text-display-2 leading-[1.0] sm:text-[3.6rem] lg:text-[4.4rem]">
              {t.hero.titleLines[0]}
              <br />
              {t.hero.titleLines[1]}
              <br />
              <span className="text-azure-deep">{t.hero.accent}</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl">
              {t.hero.lead}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={pages.contact[locale]}
                className="rounded-full bg-ink px-7 py-4 text-sm text-paper transition-colors hover:bg-azure-deep"
              >
                {t.hero.ctaPrimary}
              </Link>
              <Link
                href={pages.psychomotricite[locale]}
                className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-4 text-sm text-ink transition-colors hover:border-ink/50"
              >
                {t.hero.ctaSecondary}
                <span
                  aria-hidden="true"
                  className="arrow transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg gap-5 border-t border-line pt-6 text-sm sm:grid-cols-3">
              {t.hero.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-ink-3">{fact.label}</dt>
                  <dd className="mt-1 font-display text-2xl text-ink">
                    {fact.value}
                    {"note" in fact && fact.note ? (
                      <span className="mt-1 block font-sans text-xs leading-snug text-ink-3">
                        {fact.note}
                      </span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute end-0 top-1/2 hidden h-[82%] w-[82%] -translate-y-1/2 rounded-full bg-azure-soft/70 blur-3xl lg:block" />
            <Image
              src={figureLineInk}
              alt={t.hero.figureAlt}
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
            eyebrow={t.manifest.eyebrow}
            title={t.manifest.title}
          />
          <div className="space-y-6 text-lg leading-relaxed text-ink-2">
            {t.manifest.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link
              href={pages.psychomotricite[locale]}
              className="inline-flex items-center gap-2 link-quiet"
            >
              {t.manifest.link}
              <span aria-hidden="true" className="arrow">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ---------------- Motifs ---------------- */}
      <section className="bg-paper-2">
        <Container className="py-20 lg:py-28">
          <div className="max-w-2xl">
            <SectionTitle
              eyebrow={t.motifsSection.eyebrow}
              title={t.motifsSection.title}
            />
            <p className="mt-5 text-lg text-ink-2">
              {t.motifsSection.intro}
            </p>
          </div>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {t.motifsSection.items.map((m, i) => (
              <li
                key={m.title}
                className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-line bg-paper p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${
                  i < 3 ? "lg:col-span-2" : "lg:col-span-3"
                } ${i === 4 ? "sm:col-span-2" : ""}`}
              >
                <span
                  aria-hidden="true"
                  className="card-texture pointer-events-none absolute inset-0"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    backgroundImage: `radial-gradient(135% 115% at 100% 0%, color-mix(in srgb, ${motifAccents[i % motifAccents.length]} 14%, transparent), transparent 62%)`,
                  }}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute end-6 top-4 font-display text-[3.25rem] leading-none"
                  style={{ color: `color-mix(in srgb, ${motifAccents[i % motifAccents.length]} 24%, transparent)` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="relative mb-5 block h-1.5 w-10 rounded-full"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${motifAccents[i % motifAccents.length]} 60%, transparent)`,
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
              eyebrow={t.stepsSection.eyebrow}
              title={t.stepsSection.title}
            />
            <p className="mt-5 text-lg text-ink-2">
              {t.stepsSection.intro}
            </p>
            <Link
              href={pages.sessions[locale]}
              className="mt-6 inline-flex items-center gap-2 link-quiet"
            >
              {t.stepsSection.link}
              <span aria-hidden="true" className="arrow">→</span>
            </Link>
          </div>

          <ol className="space-y-2">
            {t.stepsSection.items.map((e) => (
              <li
                key={e.n}
                className="grid gap-4 border-t border-line py-7 sm:grid-cols-[auto_1fr] sm:gap-8"
              >
                <span className="font-display text-2xl text-azure-deep">
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
          src={aquarelleChaude}
          alt=""
          aria-hidden="true"
          sizes="420px"
          className="aquarelle-fade pointer-events-none absolute -end-20 -top-24 w-[420px] max-w-none opacity-30 mix-blend-screen"
        />
        <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-24">
          <figure>
            <Image
              src={portraitManuela}
              alt={t.aboutSection.portraitAlt}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="portrait-fade h-auto w-full"
            />
          </figure>
          <div>
            <span
              aria-hidden="true"
              className="accent-gradient mb-5 block h-1.5 w-12 rounded-full"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/50">
              {t.aboutSection.eyebrow}
            </p>
            <blockquote className="mt-5 font-display text-[1.9rem] leading-[1.2] text-paper sm:text-[2.3rem]">
              {t.aboutSection.quote}
            </blockquote>
            <p className="mt-6 leading-relaxed text-paper/70">
              {t.aboutSection.body}
            </p>
            <Link
              href={pages.about[locale]}
              className="mt-8 inline-flex items-center gap-2 border-b border-paper/40 pb-1 text-paper transition-colors hover:border-paper"
            >
              {t.aboutSection.link}
              <span aria-hidden="true" className="arrow">→</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* ---------------- Infos pratiques ---------------- */}
      <section>
        <Container className="grid gap-12 py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-28">
          <div>
            <SectionTitle
              eyebrow={t.practical.eyebrow}
              title={t.practical.title}
            />
            <p className="mt-5 text-lg text-ink-2">{t.practical.intro}</p>
            <p className="mt-3 text-lg text-ink-2">
              {t.practical.neighbourhood}
            </p>
            <address className="mt-6 space-y-1 not-italic text-ink">
              <span className="block font-display text-2xl">
                {t.practical.addressName}
              </span>
              <span className="block text-ink-2">{t.practical.street}</span>
              <span className="block text-ink-2">
                {t.practical.postalCity}
              </span>
            </address>
            <CabinetMap className="mt-6" height={260} locale={locale} />
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {t.practical.info.map((cell, i) => (
              <InfoCell
                key={cell.label}
                label={cell.label}
                value={cell.value}
                accent={motifAccents[i % motifAccents.length]}
              />
            ))}
            <div className="bg-gold-soft/60 p-6 sm:col-span-2">
              <p className="text-xs uppercase tracking-[0.16em] text-ink-2">
                {t.practical.transportTitle}
              </p>
              <ul className="mt-3 space-y-1 text-ink-2">
                {t.practical.transport.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <section>
        <Container className="grid gap-12 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:py-28">
          <SectionTitle
            eyebrow={t.faqSection.eyebrow}
            title={t.faqSection.title}
          />
          <Faq items={t.faqSection.items.map((f) => ({ ...f }))} />
        </Container>
      </section>

      <CtaBand locale={locale} />

      <JsonLd data={faqSchema(t.faqSection.items.map((f) => ({ ...f })))} />
    </>
  );
}

function InfoCell({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="bg-paper p-6">
      <span
        aria-hidden="true"
        className="mb-4 block h-1 w-8 rounded-full"
        style={{ backgroundColor: accent }}
      />
      <p className="text-xs uppercase tracking-[0.16em] text-ink-3">{label}</p>
      <p className="mt-2 font-display text-xl text-ink">{value}</p>
    </div>
  );
}
