import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, Prose } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { fullAddress, mailHref, site, telHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Mentions légales",
  description: `Mentions légales du site de ${site.name}, ${site.role.toLowerCase()} à Nantes.`,
  path: "/mentions-legales",
  noindex: true,
});

function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-ochre/15 px-1.5 py-0.5 text-ink-2">
      {children}
    </span>
  );
}

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]}
        eyebrow="Informations légales"
        title="Mentions légales."
      />

      <Container className="py-16 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <Prose>
            <h2 className="font-display text-2xl text-ink">Éditeur du site</h2>
            <p>
              {site.name}, {site.role} (diplôme d’État de psychomotricien.ne).
              <br />
              {fullAddress}
              <br />
              Téléphone :{" "}
              <a href={telHref} className="link-quiet">
                {site.contact.phoneDisplay}
              </a>
              <br />
              E-mail :{" "}
              <a href={mailHref} className="link-quiet">
                {site.contact.email}
              </a>
            </p>
            <p>
              Numéro d’identification (SIRET) : <Todo>[à compléter]</Todo>
              <br />
              Numéro ADELI / RPPS : <Todo>[à compléter]</Todo>
              <br />
              Directrice de la publication : {site.name}
            </p>

            <h2 className="font-display text-2xl text-ink">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, États-Unis —{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet"
              >
                vercel.com
              </a>
              .
            </p>

            <h2 className="font-display text-2xl text-ink">
              Activité et cadre légal
            </h2>
            <p>
              La psychomotricité est une profession paramédicale reconnue par un
              diplôme d’État. Les compétences des psychomotricien.nes sont
              encadrées par le décret n°88-659 du 6 mai 1988.
            </p>

            <h2 className="font-display text-2xl text-ink">
              Propriété intellectuelle
            </h2>
            <p>
              L’ensemble des contenus de ce site (textes, images, éléments
              graphiques) est protégé par le droit d’auteur. Toute reproduction
              ou représentation, totale ou partielle, sans autorisation écrite
              préalable est interdite.
            </p>

            <h2 className="font-display text-2xl text-ink">
              Responsabilité
            </h2>
            <p>
              Les informations publiées sur ce site ont une valeur informative et
              ne remplacent en aucun cas une consultation ni un avis médical. En
              cas d’urgence, contactez le 15 ou le 3114 (prévention du suicide,
              24h/24 et gratuit).
            </p>

            <h2 className="font-display text-2xl text-ink">
              Données personnelles
            </h2>
            <p>
              Le traitement des données personnelles est décrit dans la{" "}
              <Link
                href="/politique-de-confidentialite"
                className="link-quiet"
              >
                politique de confidentialité
              </Link>
              .
            </p>

            <h2 className="font-display text-2xl text-ink">Crédits</h2>
            <p>
              Conception et développement du site : <Todo>[à compléter]</Todo>.
              Photographies : {site.name}, sauf mention contraire. Portrait : ©
              Fabrice Rault.
            </p>
          </Prose>
        </div>
      </Container>
    </>
  );
}
