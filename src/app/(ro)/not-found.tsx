import type { Metadata } from "next";
import { copy } from "@/i18n/copies/not-found";
import { NotFoundPage } from "@/screens/not-found";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ro.meta.title,
  description: copy.ro.meta.description,
  path: "/ro/404",
  locale: "ro",
  noindex: true,
});

export default function NotFound() {
  return <NotFoundPage locale="ro" />;
}
