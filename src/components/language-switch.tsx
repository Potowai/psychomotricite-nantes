"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  locales,
  localeShort,
  pathInLocale,
  type Locale,
} from "@/lib/i18n";

const ariaLabel: Record<Locale, string> = {
  fr: "Langue du site",
  en: "Site language",
  es: "Idioma del sitio",
};

/**
 * Sélecteur de langue : il mène toujours à la page équivalente dans l'autre
 * langue, jamais à l'accueil. Les liens sont de vrais liens, donc lisibles
 * par un moteur de recherche comme par un lecteur d'écran.
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
