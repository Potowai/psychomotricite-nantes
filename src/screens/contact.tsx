import Image from "next/image";
import cabinetExterieur from "@/assets/images/cabinet-exterieur.jpg";
import { CabinetMap } from "@/components/cabinet-map";
import { ContactForm } from "@/components/contact-form";
import { Callout, Container, PageHero } from "@/components/ui";
import { copy } from "@/i18n/copies/contact";
import { addressName, pages, type Locale } from "@/lib/i18n";
import { JsonLd, breadcrumbSchema, localBusinessSchema } from "@/lib/jsonld";
import { mailHref, site, smsHref, telHref } from "@/lib/site";

export function ContactPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

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

      {/* Coordonnées en évidence */}
      <section className="bg-paper-2 py-8 lg:py-10">
        <Container className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          <a
            href={telHref}
            className="group bg-paper p-7 transition-colors hover:bg-white"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-ink-3">
              {t.contactCards.phone.label}
            </p>
            <p className="mt-3 font-display text-2xl text-ink tabular-nums">
              <span dir="ltr">{site.contact.phoneDisplay}</span>
            </p>
            <p className="mt-1 text-sm text-ink-2">
              {t.contactCards.phone.note}
            </p>
          </a>
          <a
            href={smsHref}
            className="group bg-paper p-7 transition-colors hover:bg-white"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-ink-3">
              {t.contactCards.sms.label}
            </p>
            <p className="mt-3 font-display text-2xl text-ink">
              {t.contactCards.sms.value}
            </p>
          </a>
          <a
            href={mailHref}
            className="group bg-paper p-7 transition-colors hover:bg-white"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-ink-3">
              {t.contactCards.email.label}
            </p>
            <p className="mt-3 break-all font-display text-xl text-ink">
              {site.contact.email}
            </p>
          </a>
        </Container>
      </section>

      <Container className="grid gap-14 py-16 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:py-24">
        {/* Coordonnées & accès */}
        <div className="space-y-10">
          <div>
            <h2 className="font-display text-2xl text-ink">{t.practice.title}</h2>
            <address className="mt-4 space-y-1 not-italic text-ink-2">
              <span className="block">{addressName[locale]}</span>
              <span className="block">
                <bdi>{site.address.street}</bdi>
              </span>
              <span className="block">
                <bdi>
                  {site.address.postalCode} {site.address.city}
                </bdi>
              </span>
            </address>
            <p className="mt-3 text-ink-2">{t.practice.neighbourhood}</p>
            <p className="mt-1 text-ink-2">{t.practice.accessibility}</p>
            <Image
              src={cabinetExterieur}
              alt={t.practice.placeholder.title}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="mt-6 aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xs uppercase tracking-[0.16em] text-ink-3">
                {t.practical.hours.title}
              </h3>
              <p className="mt-3 text-ink-2">
                {t.practical.hours.before}
                <strong className="font-semibold text-ink">
                  {t.practical.hours.emphasis}
                </strong>
                {t.practical.hours.after}
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.16em] text-ink-3">
                {t.practical.parking.title}
              </h3>
              <p className="mt-3 text-ink-2">{t.practical.parking.text}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.16em] text-ink-3">
              {t.practical.transit.title}
            </h3>
            <ul className="mt-3 space-y-2 text-ink-2">
              {t.practical.transit.items.map((line) => (
                <li key={line.line} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-blue" />
                  <span>
                    <strong className="font-medium text-ink">{line.line}</strong> ·
                    {t.practical.transit.stopLabel} {line.stop} · {line.walk}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <CabinetMap locale={locale} />

          <Callout title={t.otherSite.title} tone="peach">
            <p>
              {t.otherSite.before}
              <a
                href={site.otherSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="-my-1 inline-block py-1 text-blue-deep link-quiet"
              >
                {site.otherSite.label}
              </a>
              {t.otherSite.after}
            </p>
          </Callout>
        </div>

        {/* Formulaire */}
        <div>
          <h2 className="font-display text-display-3 leading-tight text-ink">
            {t.form.title}
          </h2>
          <p className="mt-3 text-ink-2">{t.form.intro}</p>
          <div className="mt-8">
            <ContactForm locale={locale} />
          </div>
        </div>
      </Container>

      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: t.breadcrumb.home, path: pages.home[locale] },
            { name: t.jsonLd.breadcrumbCurrent, path: pages.contact[locale] },
          ]),
        ]}
      />
    </>
  );
}
