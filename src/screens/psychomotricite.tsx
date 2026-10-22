import Link from "next/link";
import { CtaBand } from "@/components/contact-cta";
import {
  Callout,
  Container,
  Faq,
  PageHero,
  PhotoPlaceholder,
  SectionTitle,
} from "@/components/ui";
import { copy } from "@/i18n/copies/psychomotricite";
import { motifPaths, pages, type Locale } from "@/lib/i18n";
import { JsonLd, breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/jsonld";

export function PsychomotricitePage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: t.hero.breadcrumbHome, href: pages.home[locale] },
          { label: t.hero.breadcrumbCurrent },
        ]}
        eyebrow={t.hero.eyebrow}
        title={
          <>
            {t.hero.titleLine}
            <br />
            <span className="text-blue">{t.hero.titleAccent}</span>
          </>
        }
        lead={t.hero.lead}
      />

      <Container className="grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle
            eyebrow={t.intro.eyebrow}
            title={t.intro.title}
          />
          <PhotoPlaceholder
            className="mt-10 rounded-[2rem]"
            label={t.intro.placeholder.label}
            title={t.intro.placeholder.title}
            note={t.intro.placeholder.note}
          />
        </div>

        <div className="space-y-7 text-lg leading-[1.75] text-ink-2">
          <p>{t.intro.body}</p>
          <blockquote className="border-l-2 border-azure/60 pl-6 font-display text-[1.5rem] leading-snug text-ink">
            {t.intro.quote}
          </blockquote>
          <p>{t.intro.bodyAfter}</p>

          <Callout title={t.intro.calloutTitle} tone="blue">
            <p>{t.intro.calloutText}</p>
          </Callout>
        </div>
      </Container>

      <section className="bg-paper-2">
        <Container className="py-16 lg:py-24">
          <div className="max-w-2xl">
            <SectionTitle
              eyebrow={t.motifsSection.eyebrow}
              title={t.motifsSection.title}
            />
          </div>

          <div className="mt-14 grid gap-x-14 gap-y-14 md:grid-cols-2">
            {t.motifsSection.items.map((m) => (
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
            <p className="eyebrow">{t.motifsSection.moreEyebrow}</p>
            <h2 className="mt-3 font-display text-display-4 leading-tight text-ink sm:text-[2rem]">
              {t.motifsSection.moreTitle}
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {t.motifsSection.links.map((m, i) => (
                <li
                  key={m.key}
                  className={`${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${
                    i === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <Link
                    href={motifPaths[m.key as keyof typeof motifPaths][locale]}
                    className="group flex h-full flex-col rounded-[1.25rem] border border-line bg-paper p-6 transition-colors hover:border-azure/40"
                  >
                    <span className="font-display text-xl leading-snug text-ink group-hover:text-azure-deep">
                      {m.label}
                    </span>
                    <span className="mt-2 text-sm leading-relaxed text-ink-2">
                      {m.description}
                    </span>
                    <span className="mt-4 text-sm font-medium text-azure-deep">
                      {t.motifsSection.moreLinkLabel}{" "}
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
            eyebrow={t.faqSection.eyebrow}
            title={t.faqSection.title}
          />
          <div className="mt-10 max-w-3xl">
            <Faq items={t.faqSection.items} />
          </div>
        </Container>
      </section>

      <CtaBand locale={locale} title={t.cta.title} text={t.cta.text} />

      <JsonLd
        data={[
          serviceSchema({
            name: t.jsonLd.serviceName,
            description: t.jsonLd.serviceDescription,
            path: pages.psychomotricite[locale],
          }),
          breadcrumbSchema([
            { name: t.hero.breadcrumbHome, path: pages.home[locale] },
            {
              name: t.hero.breadcrumbCurrent,
              path: pages.psychomotricite[locale],
            },
          ]),
          faqSchema(t.faqSection.items),
        ]}
      />
    </>
  );
}
