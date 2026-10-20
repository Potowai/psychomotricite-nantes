"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "lang-banner-fermee";

type Suggestion = {
  message: string;
  action: string;
  href: string;
  lang: string;
  closeLabel: string;
};

const versAnglais: Suggestion = {
  message: "This site is also available in English.",
  action: "English",
  href: "/en",
  lang: "en",
  closeLabel: "Close this message",
};

const versFrancais: Suggestion = {
  message: "Ce site est aussi disponible en français.",
  action: "Français",
  href: "/",
  lang: "fr",
  closeLabel: "Fermer ce message",
};

const abonnes = new Set<() => void>();

function souscrire(callback: () => void) {
  abonnes.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    abonnes.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function fermerBanniere() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Stockage local indisponible : la bannière se referme pour cette visite.
  }
  for (const abonne of abonnes) abonne();
}

/**
 * Renvoie la suggestion à afficher, sous forme de clé stable : « en », « fr » ou
 * « » quand il'y a rien à proposer. Lue uniquement côté navigateur.
 */
function cleSuggestion(pathname: string, cheminDArrivee: string): string {
  try {
    if (window.localStorage.getItem(STORAGE_KEY) === "1") return "";
  } catch {
    return "";
  }

  // Une navigation à l'intérieur du site vaut choix explicite : on ne relance pas.
  if (pathname !== cheminDArrivee) return "";
  if (document.referrer.startsWith(window.location.origin)) return "";

  const preferences =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];
  const prefereFrancais = (preferences[0] ?? "").toLowerCase().startsWith("fr");
  const surPageAnglaise = pathname === "/en" || pathname.startsWith("/en/");

  if (surPageAnglaise) return prefereFrancais ? "fr" : "";
  return prefereFrancais ? "" : "en";
}

/**
 * Suggestion de l'autre version du site, selon la langue du navigateur.
 *
 * Au repos, elle tient dans un onglet rond de 44 px placé dans le coin de
 * l'écran : elle ne recouvre plus aucune ligne de contenu. Elle se déploie au
 * survol, au focus clavier ou au clic, et se referme d'elle-même.
 *
 * Jamais de redirection : Googlebot crawle depuis l'étranger, une redirection
 * par région l'enverrait vers la version anglaise et sortirait tout le site
 * français de l'index.
 */
export function LanguageBanner() {
  const pathname = usePathname();
  const cheminDArrivee = useRef(pathname);
  const [survol, setSurvol] = useState(false);
  const [verrouille, setVerrouille] = useState(false);
  const refBouton = useRef<HTMLButtonElement>(null);

  const cle = useSyncExternalStore(
    souscrire,
    () => cleSuggestion(pathname, cheminDArrivee.current),
    () => "",
  );

  const suggestion =
    cle === "en" ? versAnglais : cle === "fr" ? versFrancais : null;

  // Survol ou clic : le panneau se déploie. Le clavier passe par le bouton,
  // qui reste un vrai bouton à bascule (Entrée / Espace).
  const ouvert = survol || verrouille;

  useEffect(() => {
    if (!suggestion) return;
    const surEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVerrouille(false);
        setSurvol(false);
        refBouton.current?.focus();
      }
    };
    window.addEventListener("keydown", surEscape);
    return () => window.removeEventListener("keydown", surEscape);
  }, [suggestion]);

  if (!suggestion) return null;

  return (
    <aside
      lang={suggestion.lang}
      aria-label="Suggestion de langue"
      className="pointer-events-none fixed right-3 bottom-20 z-40 sm:right-4 lg:bottom-6"
    >
      <div
        className="relative"
        onMouseEnter={() => setSurvol(true)}
        onMouseLeave={() => setSurvol(false)}
      >
        {/* Version déployée : positionnée au-dessus de l'onglet, hors flux,
            pour ne jamais pousser ni recouvrir le contenu de la page. */}
        <div
          inert={!ouvert}
          aria-hidden={!ouvert}
          className={`absolute right-0 bottom-[calc(100%+0.5rem)] flex w-max max-w-[min(20rem,calc(100vw-1.5rem))] items-center gap-2 rounded-full border border-line bg-paper/95 py-1.5 pl-4 pr-1.5 shadow-lg backdrop-blur-md transition-all duration-300 ${
            ouvert
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }`}
        >
          <p className="text-xs text-ink-2 sm:text-sm">{suggestion.message}</p>
          <Link
            href={suggestion.href}
            className="whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-paper transition-colors hover:bg-blue-deep"
          >
            {suggestion.action}
          </Link>
          <button
            type="button"
            onClick={fermerBanniere}
            aria-label={suggestion.closeLabel}
            className="flex size-7 shrink-0 items-center justify-center rounded-full text-ink-3 transition-colors hover:bg-paper-3 hover:text-ink"
          >
            <svg
              aria-hidden="true"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Onglet compact : la seule chose visible au repos */}
        <button
          ref={refBouton}
          type="button"
          onClick={() => setVerrouille((v) => !v)}
          aria-expanded={ouvert}
          aria-label={`${suggestion.message} ${suggestion.action}`}
          className="pointer-events-auto flex size-11 items-center justify-center rounded-full border border-line bg-paper/95 text-ink shadow-lg backdrop-blur-md transition-all duration-300 hover:border-ink/30 focus-visible:border-ink/30"
        >
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3.6 9h16.8M3.6 15h16.8" />
            <path d="M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
