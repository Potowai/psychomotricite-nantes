import { AnalyticsEvents } from "@/components/analytics-events";
import { LanguageBanner } from "@/components/language-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyContactBar } from "@/components/contact-cta";
import { Umami } from "@/components/umami";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { type Locale } from "@/lib/i18n";
import { speedInsightsEnabled, vercelAnalyticsEnabled } from "@/lib/analytics";
import { JsonLd, localBusinessSchema, personSchema, websiteSchema } from "@/lib/jsonld";

const skipLink: Record<Locale, string> = {
  fr: "Aller au contenu principal",
  en: "Skip to main content",
  es: "Ir al contenido principal",
};

/**
 * Corps commun aux trois racines de langue : en-tête, bandeau de langue,
 * contenu, pied de page et barre de contact mobile.
 */
export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
      >
        {skipLink[locale]}
      </a>
      <SiteHeader locale={locale} />
      {/* Placée juste après l'en-tête : l'onglet de langue reste ainsi
          accessible tôt au clavier, sans parcourir toute la page. */}
      <LanguageBanner />
      <main id="contenu" className="flex-1">
        {children}
      </main>
      <SiteFooter locale={locale} />
      <StickyContactBar locale={locale} />
      <AnalyticsEvents />
      {vercelAnalyticsEnabled && <Analytics />}
      {speedInsightsEnabled && <SpeedInsights />}
      <Umami />
      <JsonLd
        data={[localBusinessSchema(), personSchema(), websiteSchema()]}
      />
    </>
  );
}
