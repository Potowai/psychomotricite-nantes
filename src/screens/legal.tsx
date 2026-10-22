import { Container, PageHero, Prose } from "@/components/ui";
import { copy } from "@/i18n/copies/legal";
import { pages, type Locale } from "@/lib/i18n";
import { fullAddress, mailHref, site, telHref } from "@/lib/site";

function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-paper-3 px-1.5 py-0.5 text-ink-2">
      {children}
    </span>
  );
}

export function LegalPage({ locale }: { locale: Locale }) {
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
      />

      <Container className="py-16 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <Prose>
            <h2 className="font-display text-2xl text-ink">
              {t.publisher.title}
            </h2>
            <p>
              {site.name}, {t.publisher.role} {t.publisher.diploma}
              <br />
              {fullAddress}
              <br />
              {t.publisher.phoneLabel}{" "}
              <a href={telHref} className="link-quiet">
                {site.contact.phoneDisplay}
              </a>
              <br />
              {t.publisher.emailLabel}{" "}
              <a href={mailHref} className="link-quiet">
                {site.contact.email}
              </a>
            </p>
            <p>
              {t.publisher.siretLabel} <Todo>{t.publisher.pending}</Todo>
              <br />
              {t.publisher.adeliLabel} <Todo>{t.publisher.pending}</Todo>
              <br />
              {t.publisher.publicationDirector} {site.name}
            </p>

            <h2 className="font-display text-2xl text-ink">{t.host.title}</h2>
            <p>
              {t.host.body}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet"
              >
                {t.host.link}
              </a>
              {t.host.end}
            </p>

            <h2 className="font-display text-2xl text-ink">
              {t.activity.title}
            </h2>
            <p>{t.activity.body}</p>

            <h2 className="font-display text-2xl text-ink">
              {t.intellectual.title}
            </h2>
            <p>{t.intellectual.body}</p>

            <h2 className="font-display text-2xl text-ink">{t.liability.title}</h2>
            <p>{t.liability.body}</p>

            <h2 className="font-display text-2xl text-ink">{t.data.title}</h2>
            <p>
              {t.data.before}
              <a
                href={pages.privacy[locale]}
                className="link-quiet"
              >
                {t.data.link}
              </a>
              {t.data.end}
            </p>

            <h2 className="font-display text-2xl text-ink">{t.credits.title}</h2>
            <p>
              {t.credits.before}
              <Todo>{t.credits.pending}</Todo>
              {t.credits.photos}
            </p>
          </Prose>
        </div>
      </Container>
    </>
  );
}
