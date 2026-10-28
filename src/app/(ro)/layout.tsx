import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import "../globals.css";
import { SiteShell } from "@/components/site-shell";
import { buildMetadata } from "@/lib/seo";

const cinzel = Cinzel({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = buildMetadata("ro");

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf8f1" },
    { media: "(prefers-color-scheme: dark)", color: "#151313" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const sharedLayoutProps = [cinzel.variable, inter.variable].join(" ");

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      data-scroll-behavior="smooth"
      className={`${sharedLayoutProps} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-[4.5rem] lg:pb-0">
        <SiteShell locale="ro">{children}</SiteShell>
      </body>
    </html>
  );
}
