import type { Metadata } from "next";
import { copy } from "@/i18n/copies/contact";
import { ContactPage } from "@/screens/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ro.meta.title,
  description: copy.ro.meta.description,
  path: "/ro/contact",
  locale: "ro",
});

export default function Page() {
  return <ContactPage locale="ro" />;
}
