import type { Metadata } from "next";
import { copy } from "@/i18n/copies/sessions";
import { SessionsPage } from "@/screens/sessions";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.en.meta.title,
  description: copy.en.meta.description,
  path: "/en/sessions-and-fees",
  locale: "en",
});

export default function Page() {
  return <SessionsPage locale="en" />;
}
