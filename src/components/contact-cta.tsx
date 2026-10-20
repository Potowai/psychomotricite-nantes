import Image from "next/image";
import Link from "next/link";
import figurePaper from "@/assets/images/figure-line-paper.png";
import washBleu from "@/assets/images/wash-bleu.png";
import { Container } from "@/components/ui";
import { mailHref, site, smsHref, telHref } from "@/lib/site";

export function CtaBand({
  title = "Parlons de votre demande",
  text = "Un doute, une question, une situation particulière ? Écrivez-moi ou appelez-moi : je vous proposerai un rendez-vous, ou je vous orienterai vers la personne la plus juste si ce n'est pas moi.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <Image
        src={washBleu}
        alt=""
        aria-hidden="true"
        sizes="640px"
        className="pointer-events-none absolute -left-28 -top-24 w-[640px] max-w-none opacity-25 mix-blend-screen"
      />
      <Image
        src={figurePaper}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 bottom-0 hidden h-[115%] w-auto opacity-[0.07] lg:block"
      />
      <Container className="relative grid gap-10 py-16 md:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <span
            aria-hidden="true"
            className="mb-5 block h-1.5 w-12 rounded-full bg-corail"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/50">
            Prendre rendez-vous
          </p>
          <h2 className="mt-4 max-w-xl text-display-5 leading-tight text-paper sm:text-[2.6rem]">
            {title}
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-paper/70">{text}</p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={telHref}
            className="group flex items-center justify-between gap-4 rounded-full bg-paper px-6 py-4 text-ink transition-colors hover:bg-blue-soft"
          >
            <span className="font-display text-xl">
              {site.contact.phoneDisplay}
            </span>
            <span className="text-xs uppercase tracking-widest text-azure-deep">
              Appeler
            </span>
          </a>
          <a
            href={smsHref}
            className="flex items-center justify-between gap-4 rounded-full border border-paper/30 px-6 py-4 text-paper transition-colors hover:border-azure/80"
          >
            <span className="font-display text-xl">Envoyer un SMS</span>
            <span aria-hidden="true">→</span>
          </a>
          <a
            href={mailHref}
            className="flex items-center justify-between gap-4 rounded-full border border-paper/30 px-6 py-4 text-paper transition-colors hover:border-azure/80"
          >
            <span className="text-sm">{site.contact.email}</span>
            <span aria-hidden="true">→</span>
          </a>
          <Link
            href="/contact"
            className="mt-1 inline-flex justify-center py-1 text-sm text-paper/60 underline underline-offset-4 transition-colors hover:text-paper"
          >
            Ou écrivez-moi via le formulaire
          </Link>
        </div>
      </Container>
    </section>
  );
}

/** Barre de contact fixe, uniquement sur mobile — maximise la conversion. */
export function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3 divide-x divide-line">
        <a
          href={telHref}
          className="flex flex-col items-center gap-1 py-3 text-xs text-ink-2"
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6.6 3h2.7l1.4 3.9-1.9 1.4a12.5 12.5 0 0 0 6.9 6.9l1.4-1.9 3.9 1.4v2.7A2 2 0 0 1 18.8 19 16 16 0 0 1 5 5.2 2 2 0 0 1 6.6 3z" />
          </svg>
          Appeler
        </a>
        <a
          href={smsHref}
          className="flex flex-col items-center gap-1 py-3 text-xs text-ink-2"
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.4 8.4 0 0 1-12.2 7.5L4 20.5l1.5-4.7A8.4 8.4 0 1 1 21 11.5z" />
          </svg>
          SMS
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center gap-1 bg-ink py-3 text-xs text-paper"
        >
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
            <path d="M8 3v4M16 3v4M3.5 10h17" />
          </svg>
          Rendez-vous
        </Link>
      </div>
    </div>
  );
}
