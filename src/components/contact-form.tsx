"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

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
  "Suivi / séances régulières",
  "Douance (HPI, HQI/THQI)",
  "TSA, TDA-H, troubles dys",
  "Anxiété, burn out, épuisement",
  "Rapport au corps, image de soi",
  "Autre demande",
];

const channels = ["Téléphone", "SMS", "E-mail"];

const fieldClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink-3/70 focus:border-blue focus:ring-2 focus:ring-blue/15";
const labelClass = "block text-sm font-medium text-ink";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !payload.ok) {
        throw new Error(payload.error ?? "L’envoi a échoué.");
      }

      setStatus("ok");
      form.reset();
      // Événement disponible pour un outil de mesure d’audience (GTM, Plausible…).
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("contact:submit", { detail: { motif: data.motif } }),
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
      <div className="rounded-[2rem] border border-sage/40 bg-sage/10 p-8">
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

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-[2rem] border border-line bg-paper-2/50 p-6 sm:p-8"
    >
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
            className={`mt-2 ${fieldClass}`}
            placeholder="Votre nom"
          />
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
            className={`mt-2 ${fieldClass}`}
            placeholder="Pour être rappelé.e"
          />
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
          className={`mt-2 ${fieldClass}`}
          placeholder="vous@exemple.fr"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="age" className={labelClass}>
            Âge de la personne concernée
          </label>
          <select id="age" name="age" className={`mt-2 ${fieldClass}`} defaultValue="">
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
            className={`mt-2 ${fieldClass}`}
            defaultValue=""
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
          className={`mt-2 resize-y ${fieldClass}`}
          placeholder="Expliquez-moi en quelques mots votre situation ou votre question."
        />
      </div>

      <fieldset>
        <legend className={labelClass}>Comment préférez-vous être recontacté.e ?</legend>
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
                defaultChecked={c === "Téléphone"}
                className="accent-blue"
              />
              {c}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Anti-spam (honeypot, invisible) */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor="site-web">Site web</label>
        <input id="site-web" name="site-web" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-2">
        <input type="checkbox" name="consent" required className="mt-1 accent-blue" />
        <span>
          J’accepte que mes informations soient utilisées pour être recontacté.e
          au sujet de ma demande. Aucune donnée n’est cédée à des tiers.{" "}
          <a href="/politique-de-confidentialite" className="text-blue-deep link-quiet">
            Politique de confidentialité
          </a>
          .
        </span>
      </label>

      {status === "error" && error && (
        <p role="alert" className="rounded-xl border border-corail/40 bg-corail-soft/60 px-4 py-3 text-sm text-ink">
          {error} Vous pouvez aussi m’appeler au{" "}
          <a href={`tel:${site.contact.phoneHref}`} className="link-quiet font-medium">
            {site.contact.phoneDisplay}
          </a>
          .
        </p>
      )}

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
