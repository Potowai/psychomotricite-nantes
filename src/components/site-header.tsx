"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, site, telHref } from "@/lib/site";

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex flex-col leading-none"
      aria-label={`${site.name} — accueil`}
    >
      <span className="font-display text-2xl tracking-tight text-ink transition-colors group-hover:text-blue-deep sm:text-[1.75rem]">
        {site.name}
      </span>
      {!compact && (
        <span className="mt-1 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-ink-3">
          {site.role}
        </span>
      )}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        scrolled || open
          ? "border-line/70 bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-paper/0"
      }`}
    >
      <div className="container-page flex items-center justify-between gap-6 py-4">
        <Wordmark />

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {mainNav
              .filter((item) => item.href !== "/")
              .map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative text-sm transition-colors ${
                        active
                          ? "text-blue-deep"
                          : "text-ink-2 hover:text-ink"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-1.5 left-0 h-px bg-blue transition-all duration-300 ${
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
          <a
            href={telHref}
            className="text-sm text-ink-2 tabular-nums transition-colors hover:text-blue-deep"
          >
            {site.contact.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-blue-deep"
          >
            Prendre rendez-vous
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-ink transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-ink transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-line/70 bg-paper lg:hidden">
          <nav aria-label="Navigation mobile" className="container-page py-6">
            <ul className="flex flex-col gap-1">
              {mainNav.map((item) => (
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
                Appeler — {site.contact.phoneDisplay}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center rounded-full bg-ink px-5 py-3 text-paper"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
