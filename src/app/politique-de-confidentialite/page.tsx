import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero, Prose } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";
import { mailHref, site, telHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Politique de confidentialité",
  description: `Comment ${site.name}, ${site.role.toLowerCase()} à Nantes, traite vos données personnelles (RGPD).`,
  path: "/politique-de-confidentialite",
  noindex: true,
});

export default function ConfidentialitePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "Politique de confidentialité" },
        ]}
        eyebrow="Vos données"
        title="Politique de confidentialité."
        lead="Cette page explique quelles données sont collectées sur ce site, pourquoi, et quels sont vos droits."
      />

      <Container className="py-16 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <Prose>
            <h2 className="font-display text-2xl text-ink">
              Responsable du traitement
            </h2>
            <p>
              {site.name}, {site.role}, {site.address.street}, {site.address.postalCode}{" "}
              {site.address.city}.
              Contact :{" "}
              <a href={mailHref} className="link-quiet">
                {site.contact.email}
              </a>
              .
            </p>

            <h2 className="font-display text-2xl text-ink">
              Quelles données sont collectées ?
            </h2>
            <p>
              Le formulaire de contact permet de collecter : votre nom, votre
              adresse e-mail, votre numéro de téléphone (facultatif), l’âge de la
              personne concernée (facultatif), le motif de la demande
              (facultatif), votre préférence de contact et votre message.
            </p>
            <p>
              Aucune donnée de santé n’est demandée par le formulaire. Si vous
              choisissez d’en mentionner dans votre message, elles ne sont
              traitées que pour répondre à votre demande.
            </p>

            <h2 className="font-display text-2xl text-ink">
              Pourquoi et sur quelle base ?
            </h2>
            <p>
              Ces données servent uniquement à répondre à votre demande et à
              organiser, le cas échéant, un rendez-vous. Le traitement repose sur
              votre consentement, recueilli au moment de l’envoi du formulaire.
            </p>

            <h2 className="font-display text-2xl text-ink">
              Combien de temps sont-elles conservées ?
            </h2>
            <p>
              Les messages reçus sont conservés le temps nécessaire au traitement
              de votre demande, puis supprimés — en principe sous 12 mois, sauf
              relation de soin en cours, pour laquelle la conservation suit les
              obligations professionnelles applicables.
            </p>

            <h2 className="font-display text-2xl text-ink">
              Qui y a accès ?
            </h2>
            <p>
              Vos données ne sont ni vendues, ni cédées à des tiers. Elles peuvent
              être traitées par les prestataires techniques nécessaires au
              fonctionnement du site (hébergement, envoi d’e-mails), dans le
              respect du RGPD.
            </p>

            <h2 className="font-display text-2xl text-ink">Cookies</h2>
            <p>
              Ce site ne dépose pas de cookie publicitaire ni de traceur de suivi
              à des fins commerciales. La mesure d’audience repose sur Vercel Web
              Analytics et Vercel Speed Insights, deux outils sans cookie qui
              n’enregistrent aucune donnée personnelle : les statistiques sont
              agrégées et anonymes (pages consultées, provenance, type
              d’appareil, durée de chargement).
            </p>

            <h2 className="font-display text-2xl text-ink">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d’un droit d’accès, de
              rectification, d’effacement, de limitation et d’opposition sur vos
              données. Pour l’exercer, écrivez-moi à{" "}
              <a href={mailHref} className="link-quiet">
                {site.contact.email}
              </a>{" "}
              ou appelez-moi au{" "}
              <a href={telHref} className="link-quiet">
                {site.contact.phoneDisplay}
              </a>
              . Vous pouvez également introduire une réclamation auprès de la
              CNIL (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet"
              >
                cnil.fr
              </a>
              ).
            </p>

            <p>
              Pour en savoir plus sur l’éditeur du site, consultez les{" "}
              <Link href="/mentions-legales" className="link-quiet">
                mentions légales
              </Link>
              .
            </p>
          </Prose>
        </div>
      </Container>
    </>
  );
}
