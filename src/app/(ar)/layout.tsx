import type { Metadata, Viewport } from "next";
import {
  Cinzel,
  Quattrocento_Sans,
  Noto_Naskh_Arabic,
  Noto_Sans_Arabic,
} from "next/font/google";
import "../globals.css";
import { SiteShell } from "@/components/site-shell";
import { buildMetadata } from "@/lib/seo";

const cinzel = Cinzel({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600"],
});

const quattrocento = Quattrocento_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-quattrocento",
  display: "swap",
});

const arabicSans = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic-sans",
  display: "swap",
});

const arabicDisplay = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic-display",
  display: "swap",
});

export const metadata: Metadata = buildMetadata("ar");

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf8f1" },
    { media: "(prefers-color-scheme: dark)", color: "#151313" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const sharedLayoutProps = [
  cinzel.variable,
  quattrocento.variable,
  arabicSans.variable,
  arabicDisplay.variable,
].join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-scroll-behavior="smooth"
      className={`${sharedLayoutProps} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-[4.5rem] lg:pb-0">
        <SiteShell locale="ar">{children}</SiteShell>
      </body>
    </html>
  );
}
