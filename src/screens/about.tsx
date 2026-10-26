import Image from "next/image";
import argileMains from "@/assets/images/argile-mains.jpg";
import portraitManuela from "@/assets/images/portrait-manuela.webp";
import { CtaBand } from "@/components/contact-cta";
import {
  Callout,
  Container,
  PageHero,
  SectionTitle,
} from "@/components/ui";
import { copy } from "@/i18n/copies/about";
import { pages, type Locale } from "@/lib/i18n";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

export function AboutPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: t.hero.breadcrumbHome, href: pages.home[locale] },
          { label: t.hero.breadcrumbCurrent },
        ]}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lead={t.hero.lead}
      />

      <Container className="grid gap-12 pt-16 pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-24">
        <div>
          <figure>
            <Image
              src={portraitManuela}
              alt={t.portrait.alt}
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="portrait-fade h-auto w-full"
            />
          </figure>
          <dl className="mt-8 space-y-4 border-t border-line pt-6 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-ink-3">{t.facts.since}</dt>
              <dd className="text-ink">{site.practitioner.since}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-3">{t.facts.public}</dt>
              <dd className="text-ink">{t.facts.publicValue}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-3">{t.facts.sessionLanguages}</dt>
              <dd className="text-ink">{t.facts.sessionLanguagesValue}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-ink-3">{t.facts.also}</dt>
              <dd className="text-ink">{t.facts.alsoValue}</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-7 text-lg leading-[1.78] text-ink-2">
          <p>{t.intro.body}</p>
          <p>{t.intro.bodyAfter}</p>

          <div className="border-t border-line pt-7">
            <h2 className="font-display text-2xl text-ink">
              {t.intro.openTitle}
            </h2>
            <p className="mt-4">{t.intro.openBody}</p>
            <p className="mt-4">{t.intro.openBodyAfter}</p>
          </div>

          <a
            href="#themes"
            className="group inline-flex items-center gap-2 text-sm font-medium text-blue-deep link-quiet"
          >
            {t.intro.next}
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </a>
        </div>
      </Container>

      <section id="themes" className="scroll-mt-24 border-y border-line bg-ink text-paper">
        <Container className="py-12 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/50">
                {t.themes.eyebrow}
              </p>
              <h2 className="mt-4 text-display-3 leading-tight text-paper sm:text-[2.4rem]">
                {t.themes.title}
              </h2>
              <p className="mt-5 leading-relaxed text-paper/70">
                {t.themes.intro}
              </p>
            </div>
            <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {t.themes.items.map((item) => (
                <li
                  key={item}
                  className="border-t border-paper/15 pt-4 text-paper/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
        <Image
          src={argileMains}
          alt={t.approach.placeholder.title}
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="h-full w-full rounded-[2rem] object-cover"
        />

        <div>
          <SectionTitle
            eyebrow={t.approach.eyebrow}
            title={t.approach.title}
          />
          <p className="mt-6 text-lg leading-relaxed text-ink-2">
            {t.approach.body}
          </p>

          <p className="mt-10 text-lg leading-relaxed text-ink-2">
            {t.approach.bodyAfter}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {t.approach.formations.map((f) => (
              <li
                key={f}
                className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-2"
              >
                {f}
              </li>
            ))}
          </ul>

          <Callout title={t.approach.calloutTitle} tone="peach" className="mt-8">
            <p>{t.approach.calloutText}</p>
            <p className="mt-3">{t.approach.interpretation}</p>
          </Callout>
        </div>
      </Container>

      <CtaBand locale={locale} title={t.cta.title} text={t.cta.text} />

      <JsonLd
        data={breadcrumbSchema([
          { name: t.hero.breadcrumbHome, path: pages.home[locale] },
          {
            name: t.jsonLd.breadcrumbCurrent,
            path: pages.about[locale],
          },
        ])}
      />
    </>
  );
}
