import Image from "next/image";
import Link from "next/link";
import figurePaper from "@/assets/images/figure-line-paper.png";
import aquarelleChaude from "@/assets/images/aquarelle-chaude.png";
import { Container } from "@/components/ui";
import { pages, type Locale } from "@/lib/i18n";
import { mailHref, site, smsHref, telHref } from "@/lib/site";

const copy: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    text: string;
    call: string;
    sms: string;
    form: string;
    appointment: string;
  }
> = {
  fr: {
    eyebrow: "Prendre rendez-vous",
    title: "Parlons de votre demande",
    text: "Un doute, une question, une situation particulière ? Écrivez-moi ou appelez-moi : je vous proposerai un rendez-vous, ou je vous orienterai vers la personne la plus juste si ce n'est pas moi.",
    call: "Appeler",
    sms: "Envoyer un SMS",
    form: "Ou écrivez-moi via le formulaire",
    appointment: "Rendez-vous",
  },
  en: {
    eyebrow: "Book an appointment",
    title: "Let’s talk about what brings you here",
    text: "A question, a concern, a particular situation? Write to me or call me: I will suggest an appointment, or point you to whoever is best placed if that is not me.",
    call: "Call",
    sms: "Send a text",
    form: "Or write to me through the form",
    appointment: "Appointment",
  },
  es: {
    eyebrow: "Pedir cita",
    title: "Hablemos de su motivo de consulta",
    text: "¿Una duda, una pregunta, una situación particular? Escríbame o llámeme: le propondré una cita, o le orientaré hacia la persona más adecuada si esa no soy yo.",
    call: "Llamar",
    sms: "Enviar un SMS",
    form: "O escríbame por el formulario",
    appointment: "Cita",
  },
  ro: {
    eyebrow: "Programează o ședință",
    title: "Să vorbim despre cererea dumneavoastră",
    text: "O nelămurire, o întrebare, o situație aparte? Scrieți-mi sau sunați-mă: vă voi propune o ședință sau vă voi îndruma către persoana potrivită, dacă nu sunt eu.",
    call: "Sună",
    sms: "Trimite un SMS",
    form: "Sau scrieți-mi prin formular",
    appointment: "Ședință",
  },
  ar: {
    eyebrow: "احجز موعدًا",
    title: "لنتحدث عن طلبكم",
    text: "لديكم سؤال أو شك أو وضع خاص؟ راسلوني أو اتصلوا بي: سأقترح عليكم موعدًا، أو سأوجهكم إلى الشخص الأنسب إن لم أكن أنا.",
    call: "اتصل",
    sms: "أرسل رسالة نصية",
    form: "أو راسلوني عبر النموذج",
    appointment: "موعد",
  },
};

export function CtaBand({
  locale = "fr",
  title,
  text,
}: {
  locale?: Locale;
  title?: string;
  text?: string;
}) {
  const t = copy[locale];

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <Image
        src={aquarelleChaude}
        alt=""
        aria-hidden="true"
        sizes="460px"
        className="aquarelle-fade pointer-events-none absolute -start-24 -top-20 w-[460px] max-w-none opacity-30 mix-blend-screen"
      />
      <Image
        src={figurePaper}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -end-6 bottom-0 hidden h-[115%] w-auto opacity-[0.07] lg:block"
      />
      <Container className="relative grid gap-10 py-16 md:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <span
            aria-hidden="true"
            className="accent-gradient mb-5 block h-1.5 w-12 rounded-full"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/50">
            {t.eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl text-display-5 leading-tight text-paper sm:text-[2.6rem]">
            {title ?? t.title}
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-paper/70">
            {text ?? t.text}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={telHref}
            className="group flex items-center justify-between gap-4 rounded-full bg-paper px-6 py-4 text-ink transition-colors hover:bg-blue-soft"
          >
            <span className="font-display text-xl" dir="ltr">
              {site.contact.phoneDisplay}
            </span>
            <span className="text-xs uppercase tracking-widest text-azure-deep">
              {t.call}
            </span>
          </a>
          <a
            href={smsHref}
            className="flex items-center justify-between gap-4 rounded-full border border-paper/30 px-6 py-4 text-paper transition-colors hover:border-azure/80"
          >
            <span className="font-display text-xl">{t.sms}</span>
            <span aria-hidden="true" className="arrow">→</span>
          </a>
          <a
            href={mailHref}
            className="flex items-center justify-between gap-4 rounded-full border border-paper/30 px-6 py-4 text-paper transition-colors hover:border-azure/80"
          >
            <span className="text-sm">{site.contact.email}</span>
            <span aria-hidden="true" className="arrow">→</span>
          </a>
          <Link
            href={pages.contact[locale]}
            className="mt-1 inline-flex justify-center py-1 text-sm text-paper/60 underline underline-offset-4 transition-colors hover:text-paper"
          >
            {t.form}
          </Link>
        </div>
      </Container>
    </section>
  );
}

/** Barre de contact fixe, uniquement sur mobile — maximise la conversion. */
export function StickyContactBar({ locale = "fr" }: { locale?: Locale }) {
  const t = copy[locale];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper lg:hidden">
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
          {t.call}
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
          href={pages.contact[locale]}
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
          {t.appointment}
        </Link>
      </div>
    </div>
  );
}
