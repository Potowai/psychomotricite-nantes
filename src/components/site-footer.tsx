import Link from "next/link";
import { LanguageSwitch } from "@/components/language-switch";
import { footerNav, pages, type Locale } from "@/lib/i18n";
import { fullAddress, mailHref, mapsUrl, site, telHref } from "@/lib/site";

const copy: Record<
  Locale,
  {
    role: string;
    line1: string;
    line2: string;
    otherSite: string;
    newWindow: string;
    practice: string;
    seeMap: string;
    receives: string;
    access: string;
    contact: string;
    plan: string;
    rights: string;
    legal: string;
    privacy: string;
    language: string;
    hours: string;
    phoneNote: string;
    fullAddressLabel: string;
    phoneLabel: string;
  }
> = {
  fr: {
    role: "Psychomotricienne D.E.",
    line1: "Bilan et séances de psychomotricité sur rendez-vous.",
    line2:
      "Consultations de psychomotricité pour adolescent.es et adultes, à Nantes et dans la métropole : Rezé, Saint-Herblain, Orvault, Saint-Sébastien-sur-Loire.",
    otherSite: "mon autre site, pour les parents et les enfants",
    newWindow: "nouvelle fenêtre",
    practice: "Le cabinet",
    seeMap: "Voir le plan d'accès",
    receives: "Reçoit",
    access: "Accès",
    contact: "Contact",
    plan: "Plan du site",
    rights: "Tous droits réservés.",
    legal: "Mentions légales",
    privacy: "Confidentialité",
    language: "Langue du site",
    hours: "du lundi au vendredi, sur rendez-vous",
    phoneNote: "Appel ou SMS",
    fullAddressLabel: "Adresse complète",
    phoneLabel: "Téléphone",
  },
  en: {
    role: "Psychomotor therapist (D.E.)",
    line1: "Psychomotor assessment and sessions by appointment.",
    line2:
      "Psychomotor therapy for teenagers and adults, in Nantes and around the city: Rezé, Saint-Herblain, Orvault, Saint-Sébastien-sur-Loire.",
    otherSite: "my other site, for parents and children",
    newWindow: "new window",
    practice: "The practice",
    seeMap: "See the map",
    receives: "Seen",
    access: "Access",
    contact: "Contact",
    plan: "Site map",
    rights: "All rights reserved.",
    legal: "Legal notice",
    privacy: "Privacy",
    language: "Site language",
    hours: "Monday to Friday, by appointment",
    phoneNote: "Call or text",
    fullAddressLabel: "Full address",
    phoneLabel: "Phone",
  },
  es: {
    role: "Psicomotricista D.E.",
    line1: "Balance y sesiones de psicomotricidad con cita previa.",
    line2:
      "Consultas de psicomotricidad para adolescentes y personas adultas, en Nantes y en su área metropolitana: Rezé, Saint-Herblain, Orvault, Saint-Sébastien-sur-Loire.",
    otherSite: "mi otro sitio, para las familias con hijos",
    newWindow: "ventana nueva",
    practice: "El consultorio",
    seeMap: "Ver el plano de acceso",
    receives: "Recibe",
    access: "Acceso",
    contact: "Contacto",
    plan: "Mapa del sitio",
    rights: "Todos los derechos reservados.",
    legal: "Aviso legal",
    privacy: "Privacidad",
    language: "Idioma del sitio",
    hours: "de lunes a viernes, con cita previa",
    phoneNote: "Llamada o SMS",
    fullAddressLabel: "Dirección completa",
    phoneLabel: "Teléfono",
  },
};

export function SiteFooter({ locale = "fr" }: { locale?: Locale }) {
  const year = 2026;
  const t = copy[locale];

  return (
    <footer className="bg-paper-2">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr] lg:gap-16">
          <div>
            <p className="font-display text-3xl text-ink">{site.name}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.2em] text-ink-3">
              {t.role}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-2">
              {t.line1}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-2">
              {t.line2}
            </p>
            <a
              href={site.otherSite.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 py-1 text-sm text-blue-deep link-quiet"
            >
              {site.otherSite.label}
              <span aria-hidden="true">↗</span>
              <span className="sr-only">({t.newWindow})</span>
            </a>
            <p className="mt-1 max-w-xs text-xs leading-relaxed text-ink-3">
              {t.otherSite}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-3">
              {t.practice}
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
              {t.seeMap}
            </a>
            <dl className="mt-6 space-y-2 text-sm text-ink-2">
              <div className="flex gap-2">
                <dt className="text-ink-3">{t.receives}</dt>
                <dd>{t.hours}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-ink-3">{t.access}</dt>
                <dd>{site.access.summary}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-3">
              {t.contact}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={telHref}
                  className="inline-flex py-1 text-ink-2 link-quiet tabular-nums"
                >
                  {site.contact.phoneDisplay}
                </a>
                <span className="ml-2 text-xs text-ink-3">{t.phoneNote}</span>
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

            <nav aria-label={t.plan} className="mt-8">
              <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                {footerNav(locale).flatMap((group) => group.items).map((item) => (
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
            © {year} {site.name} — {t.role}. {t.rights}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link
                href={pages.legal[locale]}
                className="inline-flex py-1.5 hover:text-ink-2"
              >
                {t.legal}
              </Link>
            </li>
            <li>
              <Link
                href={pages.privacy[locale]}
                className="inline-flex py-1.5 hover:text-ink-2"
              >
                {t.privacy}
              </Link>
            </li>
            <li>
              <LanguageSwitch locale={locale} tone="quiet" />
            </li>
          </ul>
        </div>
      </div>
      <p className="sr-only">
        {t.fullAddressLabel} : {fullAddress}. {t.phoneLabel} :{" "}
        {site.contact.phoneDisplay}.
      </p>
    </footer>
  );
}
