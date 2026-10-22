"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  locales,
  localeLabel,
  localeShort,
  pathInLocale,
  type Locale,
} from "@/lib/i18n";

const ariaLabel: Record<Locale, string> = {
  fr: "Langue du site",
  en: "Site language",
  es: "Idioma del sitio",
};

const changeLabel: Record<Locale, string> = {
  fr: "Changer de langue",
  en: "Change language",
  es: "Cambiar de idioma",
};

function GlobeIcon() {
  return (
    <svg
      aria-hidden="true"
      width="19"
      height="19"
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
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  );
}

/**
 * Sélecteur de langue : un bouton, et un menu qui mène à la page équivalente
 * dans chaque langue — jamais à l'accueil. Les liens sont de vrais liens,
 * donc lisibles par un moteur de recherche comme par un lecteur d'écran.
 *
 * Le menu se ferme au clic dehors, à la touche Échap, et rend le focus au
 * bouton quand il se referme.
 */
export function LanguageMenu({
  locale = "fr",
  className = "",
  placement = "below",
}: {
  locale?: Locale;
  className?: string;
  /** « above » ouvre le menu vers le haut — utile dans le menu mobile, où la
      place manque en bas d'écran. */
  placement?: "below" | "above";
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${changeLabel[locale]} — ${ariaLabel[locale]}`}
        className="flex size-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink/40 hover:bg-paper-2 focus-visible:border-ink/40"
      >
        <GlobeIcon />
      </button>

      {open && (
        <ul
          className={`absolute right-0 z-50 w-max min-w-[11rem] overflow-hidden rounded-2xl border border-line bg-paper p-1.5 shadow-[var(--shadow-lift)] ${
            placement === "above" ? "bottom-[calc(100%+0.5rem)]" : "top-[calc(100%+0.5rem)]"
          }`}
          aria-label={ariaLabel[locale]}
        >
          {locales.map((code) => {
            const active = code === locale;
            return (
              <li key={code}>
                <Link
                  href={pathInLocale(pathname, code)}
                  hrefLang={code}
                  lang={code}
                  aria-current={active ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                    active
                      ? "bg-blue-soft/60 font-medium text-ink"
                      : "text-ink-2 hover:bg-paper-2 hover:text-ink"
                  }`}
                >
                  <span>
                    <span className="mr-2 text-xs tracking-wide text-ink-3">
                      {localeShort[code]}
                    </span>
                    {localeLabel[code]}
                  </span>
                  {active ? <CheckIcon /> : null}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/**
 * Version textuelle, pour le pied de page : les trois liens restent visibles
 * et-followables par les moteurs de recherche.
 */
export function LanguageSwitch({
  locale = "fr",
  className = "",
  tone = "light",
}: {
  locale?: Locale;
  className?: string;
  tone?: "light" | "quiet";
}) {
  const pathname = usePathname();

  return (
    <nav aria-label={ariaLabel[locale]} className={className}>
      <ul className="flex items-center gap-1">
        {locales.map((code) => {
          const active = code === locale;
          return (
            <li key={code}>
              <Link
                href={pathInLocale(pathname, code)}
                hrefLang={code}
                lang={code}
                aria-current={active ? "page" : undefined}
                className={`inline-flex min-h-9 items-center px-1.5 text-xs font-medium tracking-wide transition-colors ${
                  tone === "quiet"
                    ? active
                      ? "text-ink-2"
                      : "text-ink-3 hover:text-ink-2"
                    : active
                      ? "text-ink underline decoration-azure decoration-2 underline-offset-4"
                      : "text-ink-3 hover:text-ink"
                }`}
              >
                {localeShort[code]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
