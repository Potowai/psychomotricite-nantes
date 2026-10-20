import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyContactBar } from "@/components/contact-cta";
import { AnalyticsEvents } from "@/components/analytics-events";
import { LanguageBanner } from "@/components/language-banner";
import { Umami } from "@/components/umami";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLd, localBusinessSchema, personSchema, websiteSchema } from "@/lib/jsonld";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role} à Nantes`,
    template: `%s — ${site.name}, psychomotricienne à Nantes`,
  },
  description: site.description,
  applicationName: `${site.name} — ${site.role}`,
  authors: [{ name: site.name, url: `${site.url}/qui-suis-je` }],
  creator: site.name,
  publisher: site.name,
  category: "Santé",
  // Renseignées par variables d'environnement après vérification du domaine
  // dans Search Console / Bing Webmaster Tools — rien n'est émis si absentes.
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? {
          other: {
            "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
          },
        }
      : {}),
  },
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: `${site.name} — ${site.role}`,
    title: `${site.name} — ${site.role} à Nantes`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role} à Nantes`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, address: true, email: true },
  other: {
    "geo.region": "FR-44",
    "geo.placename": "Nantes",
    "geo.position": `${site.address.geo.latitude};${site.address.geo.longitude}`,
    ICBM: `${site.address.geo.latitude}, ${site.address.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfaf6" },
    { media: "(prefers-color-scheme: dark)", color: "#17252e" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const sharedLayoutProps = [fraunces.variable, inter.variable].join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${sharedLayoutProps} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-14 lg:pb-0">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
        >
          Aller au contenu principal
        </a>
        <SiteHeader />
        {/* Placée juste après l'en-tête : l'onglet de langue reste ainsi
            accessible tôt au clavier, sans parcourir toute la page. */}
        <LanguageBanner />
        <main id="contenu" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <StickyContactBar />
        <AnalyticsEvents />
        <Analytics />
        <SpeedInsights />
        <Umami />
        <JsonLd
          data={[localBusinessSchema(), personSchema(), websiteSchema()]}
        />
      </body>
    </html>
  );
}
