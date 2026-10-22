import type { Metadata } from "next";
import { copy } from "@/i18n/copies/contact";
import { ContactPage } from "@/screens/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.en.meta.title,
  description: copy.en.meta.description,
  path: "/en/contact",
  locale: "en",
});

export default function Page() {
  return <ContactPage locale="en" />;
}
