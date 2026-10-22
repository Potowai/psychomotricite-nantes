import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "../globals.css";
import { SiteShell } from "@/components/site-shell";
import { buildMetadata } from "@/lib/seo";

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

export const metadata: Metadata = buildMetadata("en");

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfcfa" },
    { media: "(prefers-color-scheme: dark)", color: "#152a3c" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const sharedLayoutProps = [fraunces.variable, inter.variable].join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sharedLayoutProps} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-[4.5rem] lg:pb-0">
        <SiteShell locale="en">{children}</SiteShell>
      </body>
    </html>
  );
}
