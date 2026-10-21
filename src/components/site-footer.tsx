import Link from "next/link";
import {
  footerNav,
  fullAddress,
  mailHref,
  mapsUrl,
  site,
  telHref,
} from "@/lib/site";

export function SiteFooter() {
  const year = 2026;

  return (
    <footer className="bg-paper-2">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">
          <div>
            <p className="font-display text-3xl text-ink">{site.name}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-ink-3">
              {site.role}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-2">
              Bilan et séances de psychomotricité sur rendez-vous.
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-2">
              Consultations de psychomotricité pour adolescent.es et adultes, à
              Nantes et dans la métropole : Rezé, Saint-Herblain, Orvault,
              Saint-Sébastien-sur-Loire.
            </p>
            <a
              href={site.otherSite.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 py-1 text-sm text-blue-deep link-quiet"
            >
              {site.otherSite.label}
              <span aria-hidden="true">↗</span>
              <span className="sr-only">(nouvelle fenêtre)</span>
            </a>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-3">
              Le cabinet
            </h2>
            <address className="mt-5 space-y-1 text-sm not-italic text-ink-2">
              <span className="block">{site.address.name}</span>
              <span className="block">{site.address.street}</span>
              <span className="block">
                {site.address.postalCode} {site.address.city}
              </span>
            </address>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex py-1 text-sm text-blue-deep link-quiet"
            >
              Voir le plan d&apos;accès
            </a>
            <dl className="mt-6 space-y-2 text-sm text-ink-2">
              <div className="flex gap-2">
                <dt className="text-ink-3">Reçoit</dt>
                <dd>{site.hours.display}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-ink-3">Accès</dt>
                <dd>{site.access.summary}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-3">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={telHref}
                  className="inline-flex py-1 text-ink-2 link-quiet tabular-nums"
                >
                  {site.contact.phoneDisplay}
                </a>
                <span className="ml-2 text-xs text-ink-3">
                  {site.contact.phoneNote}
                </span>
              </li>
              <li>
                <a
                  href={mailHref}
                  className="inline-flex break-all py-1 text-ink-2 link-quiet"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>

            <nav aria-label="Plan du site" className="mt-8">
              <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {footerNav.flatMap((group) => group.items).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex py-1 text-sm text-ink-2 transition-colors hover:text-blue-deep"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <hr className="rule mt-14" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} — {site.role}. Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link
                href="/mentions-legales"
                className="inline-flex py-1.5 hover:text-ink-2"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/politique-de-confidentialite"
                className="inline-flex py-1.5 hover:text-ink-2"
              >
                Confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="sr-only">
        Adresse complète : {fullAddress}. Téléphone : {site.contact.phoneDisplay}.
      </p>
    </footer>
  );
}
