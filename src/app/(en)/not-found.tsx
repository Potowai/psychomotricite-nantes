import type { Metadata } from "next";
import { copy } from "@/i18n/copies/not-found";
import { NotFoundPage } from "@/screens/not-found";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.en.meta.title,
  description: copy.en.meta.description,
  path: "/en/404",
  locale: "en",
  noindex: true,
});

export default function NotFound() {
  return <NotFoundPage locale="en" />;
}
