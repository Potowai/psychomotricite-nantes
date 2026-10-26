import type { Metadata } from "next";
import { copy } from "@/i18n/copies/about";
import { AboutPage } from "@/screens/about";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ar.meta.title,
  description: copy.ar.meta.description,
  path: "/ar/about",
  locale: "ar",
});

export default function Page() {
  return <AboutPage locale="ar" />;
}
