import Image from "next/image";
import Link from "next/link";
import figureLineInk from "@/assets/images/figure-line-ink.png";
import { Container, Eyebrow } from "@/components/ui";
import { copy } from "@/i18n/copies/not-found";
import { mainNav, pages, type Locale } from "@/lib/i18n";
import { telHref, site } from "@/lib/site";

export function NotFoundPage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <Image
        src={figureLineInk}
        alt=""
        aria-hidden
        className="mb-8 h-40 w-auto opacity-70"
      />
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h1 className="mt-4 max-w-2xl font-display text-display-3 leading-tight text-ink sm:text-5xl">
        {t.title}
      </h1>
      <p className="mt-5 max-w-xl text-lg text-ink-2">
        {t.bodyBefore}{" "}
        <a href={telHref} className="link-quiet">
          {site.contact.phoneDisplay}
        </a>
        {t.bodyAfter}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={pages.home[locale]}
          className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:bg-blue-deep"
        >
          {t.backHome}
        </Link>
        <Link
          href={pages.contact[locale]}
          className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition hover:border-ink"
        >
          {t.book}
        </Link>
      </div>

      <nav className="mt-14 w-full max-w-2xl border-t border-line pt-8">
        <p className="eyebrow">{t.sections}</p>
        <ul className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3">
          {mainNav(locale)
            .filter((item) => item.href !== pages.home[locale])
            .map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink-2 transition hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </Container>
  );
}
