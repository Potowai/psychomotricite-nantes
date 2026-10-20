import type { Metadata } from "next";
import { CabinetMap } from "@/components/cabinet-map";
import { ContactForm } from "@/components/contact-form";
import {
  Callout,
  Container,
  PageHero,
  PhotoPlaceholder,
} from "@/components/ui";
import { JsonLd, breadcrumbSchema, localBusinessSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { mailHref, site, smsHref, telHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact & plan d’accès à Nantes",
  description:
    "Prendre rendez-vous avec Manuela Edom, psychomotricienne à Nantes : 06 84 74 96 70 (appel ou SMS), medom@psychomotricite.com. Cabinet pluridisciplinaire, 4 rue de la Mitrie, 44000 Nantes, du lundi au vendredi.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Contact" },
        ]}
        eyebrow="Contact & rendez-vous"
        title="Prendre rendez-vous."
        lead="Vous pouvez me contacter par mail, SMS ou appel. Vous pouvez aussi m’écrire via le formulaire : je vous réponds en général sous 24 à 48 h ouvrées."
      />

      {/* Coordonnées en évidence */}
      <section className="border-b border-line bg-paper-2/60">
        <Container className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          <a
            href={telHref}
            className="group bg-paper p-7 transition-colors hover:bg-white"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-ink-3">
              Téléphone
            </p>
            <p className="mt-3 font-display text-2xl text-ink tabular-nums">
              {site.contact.phoneDisplay}
            </p>
            <p className="mt-1 text-sm text-ink-2">{site.contact.phoneNote}</p>
          </a>
          <a
            href={smsHref}
            className="group bg-paper p-7 transition-colors hover:bg-white"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-ink-3">
              Envoyer un SMS
            </p>
            <p className="mt-3 font-display text-2xl text-ink">
              Message direct
            </p>
          </a>
          <a
            href={mailHref}
            className="group bg-paper p-7 transition-colors hover:bg-white"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-ink-3">
              E-mail
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
            <h2 className="font-display text-2xl text-ink">Le cabinet</h2>
            <address className="mt-4 space-y-1 not-italic text-ink-2">
              <span className="block">{site.address.name}</span>
              <span className="block">{site.address.street}</span>
              <span className="block">
                {site.address.postalCode} {site.address.city}
              </span>
            </address>
            <p className="mt-3 text-ink-2">
              Situé à proximité du centre-ville, quartier Malakoff –
              Saint-Donatien.
            </p>
            <PhotoPlaceholder
              className="mt-6 rounded-[1.5rem]"
              ratio="4 / 3"
              title="Façade du nouveau cabinet, au 4 rue de la Mitrie"
              note="Photo couleur de la nouvelle façade à venir."
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xs uppercase tracking-[0.16em] text-ink-3">
                Horaires
              </h3>
              <p className="mt-3 text-ink-2">
                Consultations au cabinet{" "}
                <strong className="font-semibold text-ink">
                  du lundi au vendredi
                </strong>
                , sur rendez-vous.
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.16em] text-ink-3">
                Stationnement
              </h3>
              <p className="mt-3 text-ink-2">{site.access.parking}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.16em] text-ink-3">
              Transports en commun
            </h3>
            <ul className="mt-3 space-y-2 text-ink-2">
              {site.access.transit.map((t) => (
                <li key={t.line} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-blue" />
                  <span>
                    <strong className="font-medium text-ink">{t.line}</strong> —
                    arrêt {t.stop} · {t.walk}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <CabinetMap />

          <Callout title="Autre site" tone="sage">
            <p>
              Mon autre site internet, pour les parents et les enfants :{" "}
              <a
                href={site.otherSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-deep link-quiet"
              >
                {site.otherSite.label}
              </a>
              .
            </p>
          </Callout>
        </div>

        {/* Formulaire */}
        <div>
          <h2 className="font-display text-[2rem] leading-tight text-ink">
            Écrivez-moi
          </h2>
          <p className="mt-3 text-ink-2">
            Expliquez-moi votre demande en quelques mots : je vous proposerai un
            rendez-vous, ou je vous orienterai vers la personne la plus juste si
            ce n’est pas moi.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </Container>

      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
    </>
  );
}
