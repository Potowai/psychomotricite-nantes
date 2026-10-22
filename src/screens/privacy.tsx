import { Container, PageHero, Prose } from "@/components/ui";
import { copy } from "@/i18n/copies/privacy";
import { analyticsTools } from "@/lib/analytics";
import { pages, type Locale } from "@/lib/i18n";
import { mailHref, site, telHref } from "@/lib/site";

export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  // La politique nomme exactement les outils de mesure en service : rien de
  // plus, rien de moins.
  const tools = analyticsTools(locale);
  const cookiesBody = t.cookies.body.replace("{tools}", tools || "aucun outil");

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

      <Container className="py-16 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <Prose>
            <h2 className="font-display text-2xl text-ink">
              {t.controller.title}
            </h2>
            <p>
              {site.name}, {site.role}, {site.address.street},{" "}
              {site.address.postalCode} {site.address.city}. {t.controller.contactLabel}{" "}
              <a href={mailHref} className="link-quiet">
                {site.contact.email}
              </a>
              .
            </p>

            <h2 className="font-display text-2xl text-ink">
              {t.collected.title}
            </h2>
            <p>{t.collected.body}</p>
            <p>{t.collected.bodyAfter}</p>

            <h2 className="font-display text-2xl text-ink">{t.basis.title}</h2>
            <p>{t.basis.body}</p>

            <h2 className="font-display text-2xl text-ink">
              {t.retention.title}
            </h2>
            <p>{t.retention.body}</p>

            <h2 className="font-display text-2xl text-ink">{t.access.title}</h2>
            <p>{t.access.body}</p>

            <h2 className="font-display text-2xl text-ink">{t.cookies.title}</h2>
            <p>{cookiesBody}</p>

            <h2 className="font-display text-2xl text-ink">{t.rights.title}</h2>
            <p>
              {t.rights.before}
              <a href={mailHref} className="link-quiet">
                {site.contact.email}
              </a>{" "}
              {t.rights.orCall}
              <a href={telHref} className="link-quiet">
                {site.contact.phoneDisplay}
              </a>
              {t.rights.end}{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet"
              >
                {t.rights.cnil}
              </a>
              {t.rights.cnilEnd}
            </p>

            <p>
              {t.legalLink.before}
              <a href={pages.legal[locale]} className="link-quiet">
                {t.legalLink.link}
              </a>
              {t.legalLink.end}
            </p>
          </Prose>
        </div>
      </Container>
    </>
  );
}
