import type { Metadata } from "next";
import { copy } from "@/i18n/copies/not-found";
import { NotFoundPage } from "@/screens/not-found";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: copy.ar.meta.title,
  description: copy.ar.meta.description,
  path: "/ar/404",
  locale: "ar",
  noindex: true,
});

export default function NotFound() {
  return <NotFoundPage locale="ar" />;
}
