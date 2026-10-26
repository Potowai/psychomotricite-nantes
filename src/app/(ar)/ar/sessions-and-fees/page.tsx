import type { Metadata } from "next";
import { copy } from "@/i18n/copies/sessions";
import { SessionsPage } from "@/screens/sessions";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ar.meta.title,
  description: copy.ar.meta.description,
  path: "/ar/sessions-and-fees",
  locale: "ar",
});

export default function Page() {
  return <SessionsPage locale="ar" />;
}
