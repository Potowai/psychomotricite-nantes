import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import figureLineInk from "@/assets/images/figure-line-ink.png";
import { Container, Eyebrow } from "@/components/ui";
import { mainNav, telHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page introuvable",
  description:
    "La page que vous cherchez n'existe pas ou a été déplacée. Retrouvez les rubriques du site de Manuela Edom, psychomotricienne à Nantes.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <Image
        src={figureLineInk}
        alt=""
        aria-hidden
        className="mb-8 h-40 w-auto opacity-70"
      />
      <Eyebrow>Erreur 404</Eyebrow>
      <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
        Cette page s’est peut-être perdue en chemin.
      </h1>
      <p className="mt-5 max-w-xl text-lg text-ink-2">
        La page que vous cherchez n’existe pas ou a été déplacée. Vous pouvez
        reprendre depuis l’accueil, ou m’appeler directement au{" "}
        <a href={telHref} className="link-quiet">
          {site.contact.phoneDisplay}
        </a>
        .
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:bg-blue-deep"
        >
          Retour à l’accueil
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-ink"
        >
          Prendre rendez-vous
        </Link>
      </div>

      <nav className="mt-14 w-full max-w-2xl border-t border-line pt-8">
        <p className="eyebrow">Rubriques</p>
        <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3">
          {mainNav
            .filter((item) => item.href !== "/")
            .map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink-2 transition hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </Container>
  );
}
