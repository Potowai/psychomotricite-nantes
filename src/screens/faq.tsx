import Link from "next/link";
import { CtaBand } from "@/components/contact-cta";
import { Container, Faq, PageHero } from "@/components/ui";
import { copy } from "@/i18n/copies/faq";
import { pages, type Locale } from "@/lib/i18n";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

export function FaqPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const categories = [...new Set(t.items.map((f) => f.category))];

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

      <Container className="space-y-16 py-16 lg:py-24">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="eyebrow">{category}</h2>
            <div className="mt-6">
              <Faq
                items={t.items
                  .filter((f) => f.category === category)
                  .map((f) => ({ question: f.question, answer: f.answer }))}
              />
            </div>
          </section>
        ))}

        <div className="rounded-[2rem] border border-line bg-paper-2 p-8 text-center">
          <p className="font-display text-2xl text-ink">{t.other.title}</p>
          <p className="mx-auto mt-3 max-w-xl text-ink-2">{t.other.text}</p>
          <Link
            href={pages.contact[locale]}
            className="mt-6 inline-block rounded-full bg-ink px-7 py-3.5 text-sm text-paper transition-colors hover:bg-blue-deep"
          >
            {t.other.cta}
          </Link>
        </div>
      </Container>

      <CtaBand locale={locale} />

      <JsonLd
        data={[
          faqSchema(t.items.map((f) => ({ question: f.question, answer: f.answer }))),
          breadcrumbSchema([
            { name: t.breadcrumb.home, path: pages.home[locale] },
            {
              name: t.jsonLd.breadcrumbCurrent,
              path: pages.faq[locale],
            },
          ]),
        ]}
      />
      <p className="sr-only">
        {site.name}, {t.srOnly.role} {t.srOnly.city} — {site.contact.phoneDisplay}.
      </p>
    </>
  );
}
