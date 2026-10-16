import type { Metadata } from "next";
import Image from "next/image";
import cabinetExterieur from "@/assets/images/cabinet-exterieur.jpg";
import { ContactForm } from "@/components/contact-form";
import {
  Callout,
  Container,
  PageHero,
} from "@/components/ui";
import { JsonLd, breadcrumbSchema, localBusinessSchema } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import {
  fullAddress,
  mailHref,
  mapsUrl,
  site,
  smsHref,
  telHref,
} from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact & plan d’accès — cabinet à Nantes",
  description:
    "Prendre rendez-vous avec Manuela Edom, psychomotricienne à Nantes : 06 84 74 96 70 (appel ou SMS), medom@psychomotricite.com. Cabinet paramédical, 2 rue d’Allonville, 44000 Nantes, lundis et samedis.",
  path: "/contact",
});

const { latitude, longitude } = site.address.geo;
const bbox = [
  longitude - 0.005,
  latitude - 0.003,
  longitude + 0.005,
  latitude + 0.003,
].join("%2C");
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${latitude}%2C${longitude}`;

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
        lead="Le plus simple : un appel ou un SMS. Vous pouvez aussi m’écrire via le formulaire — je vous réponds en général sous 24 à 48 heures ouvrées."
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
            <p className="mt-1 text-sm text-ink-2">
              Idéal pour une première prise de contact
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
            <div className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-line">
              <Image
                src={cabinetExterieur}
                alt="Façade du cabinet paramédical, 2 rue d’Allonville à Nantes."
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xs uppercase tracking-[0.16em] text-ink-3">
                Horaires
              </h3>
              <p className="mt-3 text-ink-2">
                Consultations au cabinet les{" "}
                <strong className="font-semibold text-ink">lundis</strong> et{" "}
                <strong className="font-semibold text-ink">samedis</strong>, sur
                rendez-vous.
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.16em] text-ink-3">
                Accès
              </h3>
              <ul className="mt-3 space-y-1 text-ink-2">
                <li>{site.access.desk}</li>
                <li>{site.access.pmr}</li>
                <li>{site.access.parking}</li>
              </ul>
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
                    arrêt {t.stop}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="overflow-hidden rounded-[1.5rem] border border-line">
              <iframe
                title={`Plan d’accès au cabinet — ${fullAddress}`}
                src={mapSrc}
                loading="lazy"
                className="h-[320px] w-full"
              />
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-blue-deep"
            >
              Ouvrir l’itinéraire dans Google Maps
              <span aria-hidden="true">→</span>
            </a>
          </div>

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
