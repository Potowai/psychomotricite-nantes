"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, pages, type Locale } from "@/lib/i18n";
import { LanguageMenu } from "@/components/language-switch";
import { site, telHref } from "@/lib/site";

const labels: Record<
  Locale,
  {
    role: string;
    home: string;
    book: string;
    call: string;
    menu: string;
    close: string;
    nav: string;
    mobileNav: string;
    language: string;
  }
> = {
  fr: {
    role: "Psychomotricienne D.E.",
    home: "accueil",
    book: "Prendre rendez-vous",
    call: "Appeler",
    menu: "Ouvrir le menu",
    close: "Fermer le menu",
    nav: "Navigation principale",
    mobileNav: "Navigation mobile",
    language: "Langue du site",
  },
  en: {
    role: "Psychomotor therapist (D.E.)",
    home: "home",
    book: "Book an appointment",
    call: "Call",
    menu: "Open menu",
    close: "Close menu",
    nav: "Main navigation",
    mobileNav: "Mobile navigation",
    language: "Site language",
  },
  es: {
    role: "Psicomotricista D.E.",
    home: "inicio",
    book: "Pedir cita",
    call: "Llamar",
    menu: "Abrir el menú",
    close: "Cerrar el menú",
    nav: "Navegación principal",
    mobileNav: "Navegación móvil",
    language: "Idioma del sitio",
  },
  ro: {
    role: "Psihomotricistă D.E.",
    home: "acasă",
    book: "Programează o ședință",
    call: "Sună",
    menu: "Deschide meniul",
    close: "Închide meniul",
    nav: "Navigare principală",
    mobileNav: "Navigare mobilă",
    language: "Limba site-ului",
  },
  ar: {
    role: "أخصائية العلاج النفسي الحركي",
    home: "الرئيسية",
    book: "احجز موعدًا",
    call: "اتصل",
    menu: "فتح القائمة",
    close: "إغلاق القائمة",
    nav: "التنقل الرئيسي",
    mobileNav: "التنقل على الهاتف",
    language: "لغة الموقع",
  },
};

function Wordmark({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  return (
    <Link
      href={pages.home[locale]}
      className="group inline-flex flex-col leading-none"
      aria-label={`${site.name} · ${labels[locale].home}`}
    >
      <span className="font-display whitespace-nowrap text-xl tracking-tight text-ink transition-colors group-hover:text-blue-deep sm:text-2xl xl:text-[1.75rem]">
        {site.name}
      </span>
      {!compact && (
        <span className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ink-3">
          {labels[locale].role}
        </span>
      )}
    </Link>
  );
}

export function SiteHeader({ locale = "fr" }: { locale?: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const copy = labels[locale];
  const nav = mainNav(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        open
          ? "border-line/70 bg-paper"
          : scrolled
            ? "border-line/70 bg-paper/85 backdrop-blur-md"
            : "border-transparent bg-paper/0"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4 py-4 xl:gap-6">
        <Wordmark locale={locale} />

        <nav aria-label={copy.nav} className="hidden lg:block">
          <ul className="flex items-center gap-5 xl:gap-7">
            {nav
              .filter((item) => item.href !== pages.home[locale])
              .map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative inline-flex py-2 text-sm transition-colors ${
                        active ? "text-blue-deep" : "text-ink-2 hover:text-ink"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute bottom-1.5 start-0 h-px bg-blue transition-all duration-300 ${
                          active ? "w-full" : "w-0"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageMenu locale={locale} />
          <a
            href={telHref}
            dir="ltr"
            className="hidden py-2 text-sm text-ink-2 tabular-nums transition-colors hover:text-blue-deep xl:inline-flex"
          >
            {site.contact.phoneDisplay}
          </a>
          <Link
            href={pages.contact[locale]}
            className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-blue-deep"
          >
            {copy.book}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? copy.close : copy.menu}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute start-0 block h-px w-5 bg-ink transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute start-0 block h-px w-5 bg-ink transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line/70 bg-paper lg:hidden">
          <nav aria-label={copy.mobileNav} className="container-page py-6">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line/50 py-3.5 font-display text-2xl text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={telHref}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full border border-ink px-5 py-3 text-ink"
              >
                {copy.call} · <span dir="ltr">{site.contact.phoneDisplay}</span>
              </a>
              <Link
                href={pages.contact[locale]}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-full bg-ink px-5 py-3 text-paper"
              >
                {copy.book}
              </Link>
            </div>
            <LanguageMenu
              locale={locale}
              placement="above"
              className="mt-6 border-t border-line/60 pt-4"
            />
          </nav>
        </div>
      )}
    </header>
  );
}
