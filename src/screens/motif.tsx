import Link from "next/link";
import { CtaBand } from "@/components/contact-cta";
import { Callout, Container, Faq, PageHero, SectionTitle } from "@/components/ui";
import { getMotif as getMotifFr, motifs as motifsFr } from "@/content/motifs";
import { getMotif as getMotifEn, motifs as motifsEn } from "@/content/motifs.en";
import { getMotif as getMotifEs, motifs as motifsEs } from "@/content/motifs.es";
import { getMotif as getMotifRo, motifs as motifsRo } from "@/content/motifs.ro";
import { getMotif as getMotifAr, motifs as motifsAr } from "@/content/motifs.ar";
import { copy } from "@/i18n/copies/motif";
import { motifPath, pages, type Locale } from "@/lib/i18n";
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  medicalWebPageSchema,
  serviceSchema,
} from "@/lib/jsonld";

const motifCollections = {
  fr: { motifs: motifsFr, getMotif: getMotifFr },
  en: { motifs: motifsEn, getMotif: getMotifEn },
  es: { motifs: motifsEs, getMotif: getMotifEs },
  ro: { motifs: motifsRo, getMotif: getMotifRo },
  ar: { motifs: motifsAr, getMotif: getMotifAr },
};

export function MotifPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const t = copy[locale];
  const collection = motifCollections[locale];
  const motif = collection.getMotif(slug);
  if (!motif) return null;

  const path = motifPath(locale, motif.slug);
  const others = collection.motifs.filter((m) => m.slug !== motif.slug);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: t.breadcrumb.home, href: pages.home[locale] },
          {
            label: t.breadcrumb.current,
            href: pages.psychomotricite[locale],
          },
          { label: motif.label },
        ]}
        eyebrow={t.hero.eyebrow}
        title={motif.title}
        lead={motif.lead}
      />

      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-14">
          {motif.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-display-5 leading-tight text-ink sm:text-[2.2rem]">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-5 text-lg leading-[1.75] text-ink-2">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {section.items && (
                <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-ink-2">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {motif.note && (
            <Callout title={motif.note.title} tone={motif.note.tone}>
              <p>{motif.note.text}</p>
            </Callout>
          )}

          <div>
            <SectionTitle
              eyebrow={t.faq.eyebrow}
              title={t.faq.title}
            />
            <div className="mt-8">
              <Faq items={motif.faq} />
            </div>
          </div>

          <div className="border-t border-line pt-8">
            <p className="eyebrow">{t.others.title}</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={motifPath(locale, other.slug)}
                    className="inline-block rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink-2 transition-colors hover:border-azure/40 hover:text-azure-deep"
                  >
                    {other.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-ink-2">
              {t.others.before}
              <Link
                href={pages.contact[locale]}
                className="text-blue-deep link-quiet"
              >
                {t.others.link}
              </Link>{" "}
              {t.others.after}
            </p>
          </div>
        </div>
      </Container>

      <CtaBand locale={locale} title={t.cta.title} text={t.cta.text} />

      <JsonLd
        data={[
          serviceSchema({
            name: `${motif.label} ${t.jsonLd.serviceSuffix}`,
            description: motif.metaDescription,
            path,
          }),
          medicalWebPageSchema({
            name: motif.metaTitle,
            description: motif.metaDescription,
            path,
            locale,
          }),
          breadcrumbSchema([
            { name: t.breadcrumb.home, path: pages.home[locale] },
            {
              name: t.jsonLd.breadcrumbCurrent,
              path: pages.psychomotricite[locale],
            },
            { name: motif.label, path },
          ]),
          faqSchema(motif.faq),
        ]}
      />
    </>
  );
}
