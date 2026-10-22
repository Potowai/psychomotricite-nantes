import type { Metadata } from "next";
import { copy } from "@/i18n/copies/home";
import { HomePage } from "@/screens/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.es.meta.title,
  description: copy.es.meta.description,
  path: "/es",
  locale: "es",
});

export default function Page() {
  return <HomePage locale="es" />;
}
