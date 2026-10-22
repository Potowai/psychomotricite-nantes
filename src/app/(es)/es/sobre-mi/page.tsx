import type { Metadata } from "next";
import { copy } from "@/i18n/copies/about";
import { AboutPage } from "@/screens/about";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.es.meta.title,
  description: copy.es.meta.description,
  path: "/es/sobre-mi",
  locale: "es",
});

export default function Page() {
  return <AboutPage locale="es" />;
}
