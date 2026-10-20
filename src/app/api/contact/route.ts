import type { NextRequest } from "next/server";
import { site } from "@/lib/site";

type Payload = Record<string, unknown>;

const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_HITS;
}

function asString(value: unknown, max = 4000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

    if (rateLimited(ip)) {
      return Response.json(
        { ok: false, error: "Trop de demandes envoyées. Merci de réessayer plus tard." },
        { status: 429 },
      );
    }

    const data = (await request.json()) as Payload;

    // Honeypot : un champ caché rempli = robot.
    if (asString(data["site-web"])) {
      return Response.json({ ok: true });
    }

    const nom = asString(data.nom, 120);
    const email = asString(data.email, 200);
    const telephone = asString(data.telephone, 40);
    const age = asString(data.age, 80);
    const motif = asString(data.motif, 120);
    const preference = asString(data.preference, 40);
    const message = asString(data.message, 4000);
    const consent = data.consent === "on" || data.consent === true || data.consent === "true";

    // Erreurs renvoyées champ par champ : le formulaire peut ainsi signaler
    // le champ fautif plutôt qu'un message global.
    const champs: Record<string, string> = {};

    if (!nom) {
      champs.nom = "Merci d’indiquer votre nom et prénom.";
    }
    if (!email) {
      champs.email = "Merci d’indiquer votre adresse e-mail.";
    } else if (!isEmail(email)) {
      champs.email = "Cette adresse e-mail semble incomplète.";
    }
    if (!message) {
      champs.message = "Merci de décrire votre demande en quelques mots.";
    } else if (message.length < 10) {
      champs.message =
        "Quelques mots de plus aideront à orienter votre demande.";
    }
    if (
      (preference === "Téléphone" || preference === "SMS") &&
      !telephone
    ) {
      champs.telephone = `Un numéro de téléphone est nécessaire pour être recontacté${
        preference === "SMS" ? " par SMS" : ""
      }.`;
    }
    if (!consent) {
      champs.consent =
        "Merci d’accepter que vos informations soient utilisées pour vous recontacter.";
    }

    if (Object.keys(champs).length > 0) {
      return Response.json(
        {
          ok: false,
          error: "Merci de corriger les points signalés ci-dessous.",
          fields: champs,
        },
        { status: 422 },
      );
    }

    const summary = [
      `Nouvelle demande depuis ${site.url}`,
      "",
      `Nom : ${nom}`,
      `E-mail : ${email}`,
      `Téléphone : ${telephone || "—"}`,
      `Âge concerné : ${age || "—"}`,
      `Motif : ${motif || "—"}`,
      `Préférence de contact : ${preference || "—"}`,
      "",
      "Message :",
      message,
    ].join("\n");

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL ?? site.contact.email;
    const from = process.env.CONTACT_FROM_EMAIL ?? "site@psychomotriciennenantes.fr";

    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${site.name} — formulaire <${from}>`,
          to: [to],
          reply_to: email,
          subject: `Demande de contact — ${nom}${motif ? ` (${motif})` : ""}`,
          text: summary,
          html: `<pre style="font-family:ui-monospace,monospace;font-size:14px;white-space:pre-wrap">${escapeHtml(
            summary,
          )}</pre>`,
        }),
      });

      if (!res.ok) {
        const detail = await res.text();
        console.error("[contact] Échec de l’envoi via Resend:", res.status, detail);
        return Response.json(
          {
            ok: false,
            error:
              "L’envoi du message a échoué. Merci de m’appeler ou de m’écrire directement.",
          },
          { status: 502 },
        );
      }
    } else {
      // Aucun service d’envoi configuré : on journalise pour ne rien perdre.
      console.info("[contact] Demande reçue (aucun e-mail configuré) :\n" + summary);
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("[contact] Requête invalide:", error);
    return Response.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 },
    );
  }
}
