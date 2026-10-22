import Link from "next/link";
import { CtaBand } from "@/components/contact-cta";
import {
  Callout,
  Container,
  Faq,
  PageHero,
  SectionTitle,
} from "@/components/ui";
import { copy } from "@/i18n/copies/sessions";
import { pages, type Locale } from "@/lib/i18n";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

type RichText = {
  before: string;
  emphasis: string;
  after: string;
};

/** Un paragraphe dont un fragment peut être mis en avant. */
function Rich({ text }: { text: RichText }) {
  return (
    <>
      {text.before}
      {text.emphasis ? (
        <strong className="font-semibold text-ink">{text.emphasis}</strong>
      ) : null}
      {text.after}
    </>
  );
}

export function SessionsPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  const bilanNote = t.fees.bilanNote
    .replace("{sessions}", String(site.pricing.bilan.sessions))
    .replace("{amount}", String(site.pricing.bilan.unitAmount));

  const financing = t.funding.items.map((item) => ({
    question: item.question,
    answer: (
      <>
        {item.answer.paragraphs.map((paragraph, index) => (
          <p key={index} className={index > 0 ? "mt-3" : undefined}>
            <Rich text={paragraph} />
          </p>
        ))}
        {item.answer.list ? (
          <ul className="mt-3 space-y-2">
            {item.answer.list.map((entry, index) => (
              <li key={index}>
                <Rich text={entry} />
              </li>
            ))}
          </ul>
        ) : null}
        {item.answer.closing ? (
          <p className="mt-3">
            <Rich text={item.answer.closing} />
          </p>
        ) : null}
      </>
    ),
  }));

  const jsonLdItems = [
    ...t.funding.items.map((item) => ({
      question: item.question,
      answer:
        item.answer.paragraphs.map((p) => `${p.before}${p.emphasis}${p.after}`).join(
          " ",
        ) || t.faq.jsonLdAnswer.replace("{name}", site.name),
    })),
    ...t.faq.extra.map((item) => ({
      question: item.question,
      answer:
        item.answer.paragraphs.map((p) => `${p.before}${p.emphasis}${p.after}`).join(
          " ",
        ) || t.faq.jsonLdAnswer.replace("{name}", site.name),
    })),
  ];

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: t.breadcrumb.home, href: pages.home[locale] },
          { label: t.breadcrumb.current },
        ]}
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lead={t.hero.lead}
      />

      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div className="space-y-12">
            <div>
              <SectionTitle
                eyebrow={t.course.eyebrow}
                title={t.course.title}
              />
              <div className="mt-6 space-y-5 text-lg leading-[1.78] text-ink-2">
                {t.course.paragraphs.map((paragraph, index) => (
                  <p key={index}>
                    <Rich text={paragraph} />
                  </p>
                ))}
              </div>
            </div>

            <div className="border-t border-line pt-12">
              <SectionTitle
                eyebrow={t.sessions.eyebrow}
                title={t.sessions.title}
              />
              <p className="mt-6 text-lg leading-[1.78] text-ink-2">
                {t.sessions.intro}
              </p>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {t.sessions.mediations.map((m) => (
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
                eyebrow={t.place.eyebrow}
                title={t.place.title}
              />
              <p className="mt-6 text-lg leading-[1.78] text-ink-2">
                {t.place.body}
              </p>
              <p className="mt-5 text-lg leading-[1.78] text-ink-2">
                <Rich text={t.place.opening} />
                <Link
                  href={pages.contact[locale]}
                  className="text-blue-deep link-quiet"
                >
                  {t.place.accessLink}
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Tarifs */}
          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] border border-line bg-paper-2 p-8">
              <p className="eyebrow">{t.fees.eyebrow}</p>
              <dl className="mt-6 space-y-5">
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
                  <dt className="text-ink-2">{t.fees.suiviLabel}</dt>
                  <dd className="font-display text-3xl text-ink">
                    {site.pricing.suivi.amount} €
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-line pb-5">
                  <dt className="text-ink-2">
                    {t.fees.bilanLabel}
                    <span className="mt-1 block text-sm text-ink-3">
                      {bilanNote}
                    </span>
                  </dt>
                  <dd className="font-display text-3xl text-ink">
                    {site.pricing.bilan.total} €
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-ink-2">{t.fees.durationLabel}</dt>
                  <dd className="font-display text-3xl text-ink">
                    {site.pricing.durationMinutes} min
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-sm leading-relaxed text-ink-2">
                {t.fees.note}
              </p>
            </div>

            <Callout title={t.callouts.reimbursement.title} tone="peach">
              <p>{t.callouts.reimbursement.text}</p>
            </Callout>

            <Callout title={t.callouts.prescription.title} tone="blue">
              <p>{t.callouts.prescription.text}</p>
            </Callout>
          </div>
        </div>
      </Container>

      <section className="bg-paper-2">
        <Container className="py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <SectionTitle
                eyebrow={t.funding.eyebrow}
                title={t.funding.title}
              />
              <p className="mt-5 text-lg text-ink-2">{t.funding.intro}</p>
            </div>
            <Faq items={financing} />
          </div>
        </Container>
      </section>

      <CtaBand locale={locale} title={t.cta.title} text={t.cta.text} />

      <JsonLd
        data={[
          faqSchema(jsonLdItems),
          breadcrumbSchema([
            { name: t.breadcrumb.home, path: pages.home[locale] },
            { name: t.breadcrumb.current, path: pages.sessions[locale] },
          ]),
        ]}
      />
    </>
  );
}
