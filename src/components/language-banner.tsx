"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useSyncExternalStore } from "react";

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
 * « » quand il n'y a rien à proposer. Lue uniquement côté navigateur.
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
 * Propose l'autre version du site selon la langue du navigateur. Jamais de
 * redirection : Googlebot crawle depuis l'étranger, une redirection par région
 * l'enverrait vers la version anglaise et sortirait tout le site français de
 * l'index.
 */
export function LanguageBanner() {
  const pathname = usePathname();
  const cheminDArrivee = useRef(pathname);

  const cle = useSyncExternalStore(
    souscrire,
    () => cleSuggestion(pathname, cheminDArrivee.current),
    () => "",
  );

  const suggestion =
    cle === "en" ? versAnglais : cle === "fr" ? versFrancais : null;

  if (!suggestion) return null;

  return (
    <aside
      lang={suggestion.lang}
      aria-label={suggestion.message}
      className="pointer-events-none fixed inset-x-0 bottom-16 z-40 flex justify-center px-4 lg:bottom-6"
    >
      <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-line bg-paper/95 py-1.5 pl-4 pr-1.5 shadow-lg backdrop-blur-md">
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
    </aside>
  );
}
