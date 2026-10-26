import { type Locale } from "./i18n";

const intlLocale: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-GB",
  es: "es-ES",
  ro: "ro-RO",
  ar: "ar-MA",
};

/** « 2026-03-04 » -> « 4 mars 2026 » (ou « 4 March 2026 », « 4 de marzo de 2026 ») */
export function formatDate(iso: string, locale: Locale = "fr"): string {
  return new Intl.DateTimeFormat(intlLocale[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(iso));
}
