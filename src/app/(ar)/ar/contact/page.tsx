import type { Metadata } from "next";
import { copy } from "@/i18n/copies/contact";
import { ContactPage } from "@/screens/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ar.meta.title,
  description: copy.ar.meta.description,
  path: "/ar/contact",
  locale: "ar",
});

export default function Page() {
  return <ContactPage locale="ar" />;
}
