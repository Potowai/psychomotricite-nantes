"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

type FieldName = "nom" | "telephone" | "email" | "message" | "consent";
type Errors = Partial<Record<FieldName, string>>;

type Values = {
  nom: string;
  telephone: string;
  email: string;
  age: string;
  motif: string;
  message: string;
  preference: string;
  consent: boolean;
};

const ageGroups = [
  "Enfant (moins de 12 ans)",
  "Adolescent.e (12–17 ans)",
  "Jeune adulte (18–25 ans)",
  "Adulte (26–60 ans)",
  "Personne âgée (plus de 60 ans)",
  "Je préfère ne pas le préciser",
];

const motifs = [
  "Demande de bilan",
  "Suivi / séances",
  "Autre demande",
];

const channels = ["Téléphone", "SMS", "E-mail"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_MESSAGE = 10;

const fieldClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink-3/70 focus:border-blue focus:ring-2 focus:ring-blue/15";
const fieldClassError =
  "border-corail/70 focus:border-corail focus:ring-corail/20";
const labelClass = "block text-sm font-medium text-ink";

/** Ordre d'affichage du résumé d'erreurs, aligné sur l'ordre du formulaire. */
const FIELD_ORDER: FieldName[] = [
  "nom",
  "telephone",
  "email",
  "message",
  "consent",
];

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (!values.nom.trim()) {
    errors.nom = "Merci d’indiquer votre nom et prénom.";
  }

  if (!values.email.trim()) {
    errors.email = "Merci d’indiquer votre adresse e-mail.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Cette adresse e-mail semble incomplète.";
  }

  // Le téléphone n'est exigé que si l'on a choisi d'être recontacté par ce canal.
  if (
    (values.preference === "Téléphone" || values.preference === "SMS") &&
    !values.telephone.trim()
  ) {
    errors.telephone = `Un numéro de téléphone est nécessaire pour être recontacté${
      values.preference === "SMS" ? " par SMS" : ""
    }.`;
  } else if (values.telephone.trim() && values.telephone.replace(/\D/g, "").length < 6) {
    errors.telephone = "Ce numéro semble incomplet.";
  }

  if (!values.message.trim()) {
    errors.message = "Merci de décrire votre demande en quelques mots.";
  } else if (values.message.trim().length < MIN_MESSAGE) {
    errors.message = "Quelques mots de plus aideront à orienter votre demande.";
  }

  if (!values.consent) {
    errors.consent =
      "Merci d’accepter que vos informations soient utilisées pour vous recontacter.";
  }

  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm text-corail-deep">
      <svg
        aria-hidden="true"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="mt-0.5 shrink-0"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7.5v5M12 16.2v.1" />
      </svg>
      <span>{message}</span>
    </p>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState<Values>({
    nom: "",
    telephone: "",
    email: "",
    age: "",
    motif: "",
    message: "",
    preference: "E-mail",
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [focusSummary, setFocusSummary] = useState(0);

  // Le focus revient sur le résumé d'erreurs : il liste chaque champ fautif
  // et renvoie directement dessus.
  useEffect(() => {
    if (focusSummary > 0) {
      summaryRef.current?.focus();
    }
  }, [focusSummary]);

  // Un message d'erreur global (serveur) s'annonce sans déplacer le focus.
  useEffect(() => {
    if (status === "error" && error) {
      const node = formRef.current?.querySelector("[data-global-error]");
      node?.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [status, error]);

  useEffect(() => {
    if (status === "ok") {
      successRef.current?.focus();
    }
  }, [status]);

  function setValue<K extends keyof Values>(key: K, value: Values[K]) {
    const next = { ...values, [key]: value };
    setValues(next);
    // Les erreurs sont recalculées à chaque frappe ; l'affichage est ensuite
    // filtré champ par champ (champ touché ou formulaire déjà soumis).
    setErrors(validate(next));
  }

  function markTouched(field: FieldName, source?: Values) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(source ?? values));
  }

  function showError(field: FieldName) {
    return submitted || touched[field] ? errors[field] : undefined;
  }

  /**
   * Affiche les erreurs et déplace le focus vers le résumé : il liste chaque
   * champ fautif et renvoie directement dessus. C'est le motif retenu par
   * GOV.UK, plus lisible qu'un focus posé au hasard sur une liste de champs.
   */
  function announceErrors(found: Errors) {
    setErrors(found);
    setSubmitted(true);
    setFocusSummary((n) => n + 1);
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setSubmitted(true);
    setStatus("idle");
    setError(null);

    const found = validate(values);

    if (Object.keys(found).length > 0) {
      announceErrors(found);
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          consent: values.consent ? "on" : "",
        }),
      });
      const payload = (await res.json()) as {
        ok?: boolean;
        error?: string;
        fields?: Errors;
      };

      if (!res.ok || !payload.ok) {
        if (payload.fields && Object.keys(payload.fields).length > 0) {
          // Erreurs champ par champ : elles s'affichent sous les champs, et
          // le focus part sur le résumé qui les liste.
          setStatus("idle");
          setErrors((prev) => ({ ...prev, ...payload.fields }));
          setSubmitted(true);
          setFocusSummary((n) => n + 1);
          return;
        }
        throw new Error(payload.error ?? "L’envoi a échoué.");
      }

      setStatus("ok");
      form.reset();
      setValues({
        nom: "",
        telephone: "",
        email: "",
        age: "",
        motif: "",
        message: "",
        preference: "E-mail",
        consent: false,
      });
      setErrors({});
      setTouched({});
      setSubmitted(false);
      // Événement disponible pour un outil de mesure d’audience (GTM, Plausible…).
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("contact:submit", { detail: { motif: values.motif } }),
        );
      }
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Vous pouvez m’appeler directement.",
      );
    }
  }

  if (status === "ok") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-[2rem] border border-sage/40 bg-sage/10 p-8"
      >
        <p className="font-display text-2xl text-ink">Merci, c’est bien envoyé.</p>
        <p className="mt-3 leading-relaxed text-ink-2">
          Je vous réponds en général sous 24 à 48 heures ouvrées. Si votre
          demande est urgente, n’hésitez pas à m’appeler ou à m’envoyer un SMS
          au{" "}
          <a href={`tel:${site.contact.phoneHref}`} className="text-blue-deep link-quiet">
            {site.contact.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-ink/20 px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink/50"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  const errorList = submitted
    ? FIELD_ORDER.filter((field) => errors[field]).map((field) => ({
        field,
        message: errors[field] as string,
      }))
    : [];

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-[2rem] border border-line bg-paper-2/50 p-6 sm:p-8"
    >
      {errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="erreurs-formulaire"
          className="rounded-2xl border border-corail/40 bg-corail-soft/60 p-5"
        >
          <h3
            id="erreurs-formulaire"
            className="font-display text-lg leading-snug text-ink"
          >
            Le formulaire n’a pas pu être envoyé
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-ink-2">
            {errorList.map(({ field, message }) => (
              <li key={field}>
                <a href={`#${field}`} className="link-quiet">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {status === "error" && error && (
        <p
          data-global-error
          role="alert"
          className="rounded-xl border border-corail/40 bg-corail-soft/60 px-4 py-3 text-sm text-ink"
        >
          {error} Vous pouvez aussi m’appeler au{" "}
          <a href={`tel:${site.contact.phoneHref}`} className="link-quiet font-medium">
            {site.contact.phoneDisplay}
          </a>
          .
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className={labelClass}>
            Nom et prénom <span className="text-corail">*</span>
          </label>
          <input
            id="nom"
            name="nom"
            required
            autoComplete="name"
            value={values.nom}
            onChange={(e) => setValue("nom", e.target.value)}
            onBlur={() => markTouched("nom")}
            aria-invalid={showError("nom") ? true : undefined}
            aria-describedby={showError("nom") ? "nom-erreur" : undefined}
            className={`mt-2 ${fieldClass} ${showError("nom") ? fieldClassError : ""}`}
            placeholder="Votre nom"
          />
          <FieldError id="nom-erreur" message={showError("nom")} />
        </div>
        <div>
          <label htmlFor="telephone" className={labelClass}>
            Téléphone
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.telephone}
            onChange={(e) => setValue("telephone", e.target.value)}
            onBlur={() => markTouched("telephone")}
            aria-invalid={showError("telephone") ? true : undefined}
            aria-describedby={
              showError("telephone") ? "telephone-erreur" : undefined
            }
            className={`mt-2 ${fieldClass} ${
              showError("telephone") ? fieldClassError : ""
            }`}
            placeholder="Pour être rappelé.e"
          />
          <FieldError id="telephone-erreur" message={showError("telephone")} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          E-mail <span className="text-corail">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={(e) => setValue("email", e.target.value)}
          onBlur={() => markTouched("email")}
          aria-invalid={showError("email") ? true : undefined}
          aria-describedby={showError("email") ? "email-erreur" : undefined}
          className={`mt-2 ${fieldClass} ${
            showError("email") ? fieldClassError : ""
          }`}
          placeholder="vous@exemple.fr"
        />
        <FieldError id="email-erreur" message={showError("email")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="age" className={labelClass}>
            Âge de la personne concernée
          </label>
          <select
            id="age"
            name="age"
            value={values.age}
            onChange={(e) => setValue("age", e.target.value)}
            className={`mt-2 ${fieldClass}`}
          >
            <option value="" disabled>
              Choisir…
            </option>
            {ageGroups.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="motif" className={labelClass}>
            Motif de la demande
          </label>
          <select
            id="motif"
            name="motif"
            value={values.motif}
            onChange={(e) => setValue("motif", e.target.value)}
            className={`mt-2 ${fieldClass}`}
          >
            <option value="" disabled>
              Choisir…
            </option>
            {motifs.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Votre demande <span className="text-corail">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={(e) => setValue("message", e.target.value)}
          onBlur={() => markTouched("message")}
          aria-invalid={showError("message") ? true : undefined}
          aria-describedby={showError("message") ? "message-erreur" : undefined}
          className={`mt-2 resize-y ${fieldClass} ${
            showError("message") ? fieldClassError : ""
          }`}
          placeholder="Expliquez-moi en quelques mots votre situation ou votre question."
        />
        <FieldError id="message-erreur" message={showError("message")} />
      </div>

      <fieldset>
        <legend className={labelClass}>
          Comment préférez-vous être recontacté.e ?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {channels.map((c) => (
            <label
              key={c}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink-2 transition-colors has-checked:border-blue has-checked:text-ink"
            >
              <input
                type="radio"
                name="preference"
                value={c}
                checked={values.preference === c}
                onChange={() => {
                  const next = { ...values, preference: c };
                  setValues(next);
                  setErrors(validate(next));
                  // Choisir le téléphone ou le SMS rend le numéro nécessaire :
                  // on l'annonce sans attendre la soumission.
                  if (c === "Téléphone" || c === "SMS") {
                    setTouched((prev) => ({ ...prev, telephone: true }));
                  }
                }}
                className="accent-blue"
              />
              {c}
            </label>
          ))}
        </div>
        <p className="mt-2 text-xs text-ink-3">
          Par défaut, je réponds par e-mail. Un numéro de téléphone est
          nécessaire si vous choisissez le téléphone ou le SMS.
        </p>
      </fieldset>

      {/* Anti-spam (honeypot, invisible) */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="site-web">Site web</label>
        <input id="site-web" name="site-web" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label
          htmlFor="consent"
          className="flex items-start gap-3 text-sm text-ink-2"
        >
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            checked={values.consent}
            onChange={(e) => setValue("consent", e.target.checked)}
            onBlur={() => markTouched("consent")}
            aria-invalid={showError("consent") ? true : undefined}
            aria-describedby={showError("consent") ? "consent-erreur" : undefined}
            className="mt-1 accent-blue"
          />
          <span>
            J’accepte que mes informations soient utilisées pour être recontacté.e
            au sujet de ma demande. Aucune donnée n’est cédée à des tiers.{" "}
            <Link
              href="/politique-de-confidentialite"
              className="text-blue-deep link-quiet"
            >
              Politique de confidentialité
            </Link>
            .
          </span>
        </label>
        <FieldError id="consent-erreur" message={showError("consent")} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-ink px-6 py-4 text-sm text-paper transition-colors hover:bg-blue-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>

      <p className="text-center text-xs text-ink-3">
        Champs obligatoires marqués d’un <span className="text-corail">*</span>.
      </p>
    </form>
  );
}
