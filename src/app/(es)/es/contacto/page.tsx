import type { Metadata } from "next";
import { copy } from "@/i18n/copies/contact";
import { ContactPage } from "@/screens/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.es.meta.title,
  description: copy.es.meta.description,
  path: "/es/contacto",
  locale: "es",
});

export default function Page() {
  return <ContactPage locale="es" />;
}
