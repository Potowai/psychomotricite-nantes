import type { Metadata } from "next";
import { copy } from "@/i18n/copies/sessions";
import { SessionsPage } from "@/screens/sessions";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ro.meta.title,
  description: copy.ro.meta.description,
  path: "/ro/consultatii-si-tarife",
  locale: "ro",
});

export default function Page() {
  return <SessionsPage locale="ro" />;
}
