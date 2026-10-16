import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import washBleu from "@/assets/images/wash-bleu.png";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-page ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-xs text-ink-3">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-ink-2">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink-2">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && (
              <span aria-hidden="true" className="text-line">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/**
 * En-tête de page intérieure : fil d'Ariane, surtitre, titre, chapô,
 * et éventuellement un visuel vertical (la figure au trait).
 */
export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  children,
}: {
  breadcrumbs?: { label: string; href?: string }[];
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  image?: StaticImageData;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line/70 paper-grain">
      <Image
        src={washBleu}
        alt=""
        aria-hidden="true"
        sizes="560px"
        className="pointer-events-none absolute -right-24 -top-28 hidden w-[560px] max-w-none opacity-70 mix-blend-multiply lg:block"
      />
      <Container className="relative grid gap-12 py-14 md:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div className="animate-fade-up">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          {eyebrow && (
            <p className="eyebrow mt-8">{eyebrow}</p>
          )}
          <h1 className="mt-4 text-[2.6rem] leading-[1.02] sm:text-[3.4rem] lg:text-[4rem]">
            {title}
          </h1>
          {lead && (
            <div className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">
              {lead}
            </div>
          )}
          {children && <div className="mt-9">{children}</div>}
        </div>

        {image && (
          <div className="relative hidden justify-self-end lg:block">
            <Image
              src={image}
              alt={imageAlt ?? ""}
              className="h-auto w-[min(340px,26vw)] opacity-90"
              preload
            />
          </div>
        )}
      </Container>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-[2rem] leading-tight sm:text-[2.5rem]">{title}</h2>
    </div>
  );
}

/** Bloc de texte long, mesures confortables. */
export function Prose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`space-y-6 text-[1.075rem] leading-[1.75] text-ink-2 [&_strong]:font-semibold [&_strong]:text-ink ${className}`}
    >
      {children}
    </div>
  );
}

export function Callout({
  title,
  children,
  tone = "blue",
}: {
  title?: string;
  children: ReactNode;
  tone?: "blue" | "terracotta" | "sage";
}) {
  const tones = {
    blue: "border-azure/30 bg-blue-soft/60",
    terracotta: "border-corail/30 bg-corail-soft/60",
    sage: "border-sage/30 bg-sage-soft/60",
  } as const;
  return (
    <aside className={`rounded-2xl border p-6 sm:p-7 ${tones[tone]}`}>
      {title && (
        <p className="font-display text-xl text-ink">{title}</p>
      )}
      <div className="mt-2 space-y-3 text-[1.02rem] leading-relaxed text-ink-2">
        {children}
      </div>
    </aside>
  );
}

export function Faq({
  items,
}: {
  items: { question: string; answer: ReactNode }[];
}) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.question} className="group py-1">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg text-ink marker:hidden [&::-webkit-details-marker]:hidden">
            <span className="font-display text-xl leading-snug">
              {item.question}
            </span>
            <span
              aria-hidden="true"
              className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-azure/40 bg-blue-soft/50 text-azure-deep transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="pb-6 pr-12 leading-relaxed text-ink-2">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

/**
 * Emplacement photo : bloc de remplacement clairement identifiable, à utiliser
 * tant que les photographies définitives ne sont pas fournies. Le libellé
 * indique précisément quel cliché produire.
 */
export function PhotoPlaceholder({
  title,
  note,
  ratio = "4 / 5",
  className = "",
}: {
  title: string;
  note?: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <figure
      className={`flex w-full min-w-0 max-w-full flex-col items-center justify-center gap-4 self-start rounded-2xl border border-dashed border-azure/45 bg-blue-soft/40 p-8 text-center ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span
        aria-hidden="true"
        className="grid h-12 w-12 place-items-center rounded-full border border-azure/40 bg-paper text-azure-deep"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h.7l.9-1.5A1.5 1.5 0 0 1 9.4 3.8h5.2a1.5 1.5 0 0 1 1.3.7l.9 1.5h.7A2.5 2.5 0 0 1 20 8.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5z" />
          <circle cx="12" cy="12.3" r="3.3" />
        </svg>
      </span>
      <figcaption className="max-w-xs">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-azure-deep">
          Photo à fournir
        </span>
        <p className="mt-2 font-display text-lg leading-snug text-ink">
          {title}
        </p>
        {note && (
          <p className="mt-2 text-sm leading-relaxed text-ink-2">{note}</p>
        )}
      </figcaption>
    </figure>
  );
}
