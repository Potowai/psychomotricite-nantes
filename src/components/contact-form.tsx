"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { pages, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

type Status = "idle" | "draft";

type FieldName = "nom" | "telephone" | "email" | "message" | "consent";
type Errors = Partial<Record<FieldName, string>>;

/**
 * Brouillon prêt à envoyer : le corps du message et le lien `mailto:`.
 */
type Draft = {
  subject: string;
  /** Corps pré-rempli, éventuellement raccourci pour rester sous la limite des clients de messagerie. */
  body: string;
  /** Corps complet, affiché à l'écran et copiable. */
  full: string;
  href: string;
  truncated: boolean;
};

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

/** Valeurs stables des canaux : elles ne changent pas avec la langue. */
const CHANNEL_KEYS = ["phone", "sms", "email"] as const;
type ChannelKey = (typeof CHANNEL_KEYS)[number];

const copy: Record<
  Locale,
  {
    ageGroups: string[];
    motifs: string[];
    channels: Record<ChannelKey, string>;
    name: string;
    namePlaceholder: string;
    phone: string;
    optional: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    age: string;
    choose: string;
    reason: string;
    message: string;
    messagePlaceholder: string;
    preference: string;
    preferenceHint: string;
    consent: string;
    privacy: string;
    submit: string;
    another: string;
    errorTitle: string;
    orCall: string;
    /** Objet du message pré-rempli, dans la langue du formulaire. */
    subject: string;
    /** Étiquettes du brouillon pré-rempli, dans la langue du formulaire. */
    mailLabels: {
      name: string;
      email: string;
      phone: string;
      age: string;
      reason: string;
      preference: string;
      message: string;
    };
    draftTitle: string;
    draftText: string;
    draftTruncated: string;
    draftNoApp: string;
    reopenMail: string;
    copyMessage: string;
    copied: string;
    errName: string;
    errEmail: string;
    errEmailShort: string;
    errPhoneNeeded: string;
    errPhoneSms: string;
    errPhoneShort: string;
    errMessage: string;
    errMessageShort: string;
    errConsent: string;
  }
> = {
  fr: {
    ageGroups: [
      "Enfant (moins de 12 ans)",
      "Adolescent.e (12–17 ans)",
      "Jeune adulte (18–25 ans)",
      "Adulte (26–60 ans)",
      "Personne âgée (plus de 60 ans)",
      "Je préfère ne pas le préciser",
    ],
    motifs: ["Demande de bilan", "Suivi / séances", "Autre demande"],
    channels: { phone: "Téléphone", sms: "SMS", email: "E-mail" },
    name: "Nom et prénom",
    namePlaceholder: "Votre nom",
    phone: "Téléphone",
    optional: "(facultatif)",
    phonePlaceholder: "Pour être rappelé.e",
    email: "E-mail",
    emailPlaceholder: "vous@exemple.fr",
    age: "Âge de la personne",
    choose: "Choisir…",
    reason: "Motif de la demande",
    message: "Votre demande",
    messagePlaceholder:
      "Expliquez-moi en quelques mots votre situation ou votre question.",
    preference: "Comment préférez-vous être recontacté.e ?",
    preferenceHint:
      "Par défaut, je réponds par e-mail. Un numéro de téléphone est nécessaire si vous choisissez le téléphone ou le SMS.",
    consent:
      "J’accepte que mes informations soient utilisées pour être recontacté.e au sujet de ma demande. Aucune donnée n’est cédée à des tiers.",
    privacy: "Politique de confidentialité",
    submit: "Ouvrir ma messagerie",
    another: "Écrire un autre message",
    errorTitle: "Le formulaire n’a pas pu être envoyé",
    orCall: "Vous pouvez aussi m’appeler ou m’envoyer un SMS au",
    subject: "Demande de contact · {name}",
    mailLabels: {
      name: "Nom",
      email: "E-mail",
      phone: "Téléphone",
      age: "Âge de la personne",
      reason: "Motif",
      preference: "Préférence de contact",
      message: "Message",
    },
    draftTitle: "Votre messagerie s’ouvre",
    draftText:
      "Le message a été pré-rempli dans votre application de messagerie. Il ne reste plus qu’à cliquer sur « Envoyer » pour qu’il me parvienne.",
    draftTruncated:
      "Votre message était trop long pour être pré-rempli en entier : il a été raccourci. Le texte complet reste ci-dessous, à copier dans votre messagerie si besoin.",
    draftNoApp:
      "Aucune fenêtre ne s’est ouverte ? Copiez le message ci-dessous et envoyez-le à",
    reopenMail: "Rouvrir ma messagerie",
    copyMessage: "Copier le message",
    copied: "Message copié dans le presse-papiers.",
    errName: "Merci d’indiquer votre nom et prénom.",
    errEmail: "Merci d’indiquer votre adresse e-mail.",
    errEmailShort: "Cette adresse e-mail semble incomplète.",
    errPhoneNeeded: "Un numéro de téléphone est nécessaire pour être recontacté.",
    errPhoneSms: "Un numéro de téléphone est nécessaire pour être recontacté par SMS.",
    errPhoneShort: "Ce numéro semble incomplet.",
    errMessage: "Merci de décrire votre demande en quelques mots.",
    errMessageShort:
      "Quelques mots de plus aideront à orienter votre demande.",
    errConsent:
      "Merci d’accepter que vos informations soient utilisées pour vous recontacter.",
  },
  en: {
    ageGroups: [
      "Child (under 12)",
      "Teenager (12–17)",
      "Young adult (18–25)",
      "Adult (26–60)",
      "Older adult (over 60)",
      "I would rather not say",
    ],
    motifs: [
      "Assessment request",
      "Follow-up / sessions",
      "Another request",
    ],
    channels: { phone: "Phone", sms: "Text message", email: "E-mail" },
    name: "First and last name",
    namePlaceholder: "Your name",
    phone: "Phone",
    optional: "(optional)",
    phonePlaceholder: "To call you back",
    email: "E-mail",
    emailPlaceholder: "you@example.com",
    age: "Age of the person",
    choose: "Choose…",
    reason: "Reason for the request",
    message: "Your message",
    messagePlaceholder:
      "Tell me in a few words about your situation or your question.",
    preference: "How would you prefer to be contacted?",
    preferenceHint:
      "By default I answer by e-mail. A phone number is needed if you choose phone or text message.",
    consent:
      "I agree that my information is used to contact me about my request. No data is passed on to third parties.",
    privacy: "Privacy policy",
    submit: "Open my e-mail app",
    another: "Write another message",
    errorTitle: "The form could not be sent",
    orCall: "You can also call or text me on",
    subject: "Contact request · {name}",
    mailLabels: {
      name: "Name",
      email: "E-mail",
      phone: "Phone",
      age: "Age of the person",
      reason: "Reason",
      preference: "Preferred contact",
      message: "Message",
    },
    draftTitle: "Your e-mail app is opening",
    draftText:
      "The message has been pre-filled in your e-mail application. All you have to do is click “Send” for it to reach me.",
    draftTruncated:
      "Your message was too long to be pre-filled in full, so it has been shortened. The complete text is below, ready to be copied into your e-mail app.",
    draftNoApp:
      "Did no window open? Copy the message below and send it to",
    reopenMail: "Open my e-mail app again",
    copyMessage: "Copy the message",
    copied: "Message copied to the clipboard.",
    errName: "Please enter your first and last name.",
    errEmail: "Please enter your e-mail address.",
    errEmailShort: "This e-mail address looks incomplete.",
    errPhoneNeeded: "A phone number is needed to call you back.",
    errPhoneSms: "A phone number is needed to reach you by text message.",
    errPhoneShort: "This number looks incomplete.",
    errMessage: "Please describe your request in a few words.",
    errMessageShort: "A few more words will help me point you in the right direction.",
    errConsent:
      "Please agree that your information is used to contact you.",
  },
  es: {
    ageGroups: [
      "Niño/a (menos de 12 años)",
      "Adolescente (12–17 años)",
      "Joven adulto (18–25 años)",
      "Persona adulta (26–60 años)",
      "Persona mayor (más de 60 años)",
      "Prefiero no precisarlo",
    ],
    motifs: [
      "Solicitud de balance",
      "Seguimiento / sesiones",
      "Otra solicitud",
    ],
    channels: { phone: "Teléfono", sms: "SMS", email: "Correo electrónico" },
    name: "Nombre y apellidos",
    namePlaceholder: "Su nombre",
    phone: "Teléfono",
    optional: "(opcional)",
    phonePlaceholder: "Para que le llamen",
    email: "Correo electrónico",
    emailPlaceholder: "usted@ejemplo.com",
    age: "Edad de la persona",
    choose: "Elegir…",
    reason: "Motivo de la solicitud",
    message: "Su solicitud",
    messagePlaceholder:
      "Cuénteme en pocas palabras su situación o su pregunta.",
    preference: "¿Cómo prefiere que le contacten?",
    preferenceHint:
      "Por defecto respondo por correo electrónico. Se necesita un número de teléfono si elige teléfono o SMS.",
    consent:
      "Acepto que mis datos se utilicen para que me contacten en relación con mi solicitud. Ningún dato se cede a terceros.",
    privacy: "Política de privacidad",
    submit: "Abrir mi correo",
    another: "Escribir otro mensaje",
    errorTitle: "No se ha podido enviar el formulario",
    orCall: "También puede llamarme o enviarme un SMS al",
    subject: "Solicitud de contacto · {name}",
    mailLabels: {
      name: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono",
      age: "Edad de la persona",
      reason: "Motivo",
      preference: "Preferencia de contacto",
      message: "Mensaje",
    },
    draftTitle: "Se está abriendo su correo",
    draftText:
      "El mensaje se ha rellenado en su aplicación de correo. Solo tiene que pulsar «Enviar» para que me llegue.",
    draftTruncated:
      "Su mensaje era demasiado largo para rellenarse por completo, así que se ha acortado. El texto completo está abajo, listo para copiarlo en su correo.",
    draftNoApp:
      "¿No se ha abierto ninguna ventana? Copie el mensaje de abajo y envíelo a",
    reopenMail: "Volver a abrir mi correo",
    copyMessage: "Copiar el mensaje",
    copied: "Mensaje copiado al portapapeles.",
    errName: "Indique su nombre y apellidos, por favor.",
    errEmail: "Indique su dirección de correo electrónico, por favor.",
    errEmailShort: "Esta dirección de correo parece incompleta.",
    errPhoneNeeded: "Se necesita un número de teléfono para poder contactarle.",
    errPhoneSms:
      "Se necesita un número de teléfono para poder escribirle por SMS.",
    errPhoneShort: "Este número parece incompleto.",
    errMessage: "Describa su solicitud en unas pocas palabras, por favor.",
    errMessageShort:
      "Unas palabras más me ayudarán a orientarle correctamente.",
    errConsent:
      "Acepte que sus datos se utilicen para poder volver a contactarle.",
  },
  ro: {
    ageGroups: [
      "Copil (sub 12 ani)",
      "Adolescent (12–17 ani)",
      "Tânăr adult (18–25 ani)",
      "Adult (26–60 ani)",
      "Persoană vârstnică (peste 60 ani)",
      "Prefer să nu precizez",
    ],
    motifs: ["Cerere de bilanț", "Urmărire / ședințe", "Altă cerere"],
    channels: { phone: "Telefon", sms: "SMS", email: "E-mail" },
    name: "Nume și prenume",
    namePlaceholder: "Numele dumneavoastră",
    phone: "Telefon",
    optional: "(opțional)",
    phonePlaceholder: "Pentru a vă contacta",
    email: "E-mail",
    emailPlaceholder: "nume@exemplu.ro",
    age: "Vârsta persoanei",
    choose: "Alegeți…",
    reason: "Motivul cererii",
    message: "Cererea dumneavoastră",
    messagePlaceholder:
      "Descrieți-mi în câteva cuvinte situația sau întrebarea dumneavoastră.",
    preference: "Cum preferați să fiți contactat(ă)?",
    preferenceHint:
      "În mod implicit, răspund prin e-mail. Un număr de telefon este necesar dacă alegeți telefonul sau SMS-ul.",
    consent:
      "Accept ca datele mele să fie folosite pentru a fi contactat(ă) în legătură cu cererea mea. Nicio dată nu este transmisă terților.",
    privacy: "Politica de confidențialitate",
    submit: "Deschideți aplicația de e-mail",
    another: "Scrieți alt mesaj",
    errorTitle: "Formularul nu a putut fi trimis",
    orCall: "Mă puteți suna sau trimite un SMS la",
    subject: "Cerere de contact · {name}",
    mailLabels: {
      name: "Nume",
      email: "E-mail",
      phone: "Telefon",
      age: "Vârsta persoanei",
      reason: "Motiv",
      preference: "Preferință de contact",
      message: "Mesaj",
    },
    draftTitle: "Se deschide aplicația de e-mail",
    draftText:
      "Mesajul a fost precompletat în aplicația dumneavoastră de e-mail. Mai rămâne doar să apăsați «Trimite» pentru a-mi ajunge.",
    draftTruncated:
      "Mesajul era prea lung pentru a fi precompletat integral, așa că a fost scurtat. Textul complet este mai jos, gata de copiat în aplicația de e-mail.",
    draftNoApp:
      "Nu s-a deschis nicio fereastră? Copiați mesajul de mai jos și trimiteți-l la",
    reopenMail: "Redeschideți aplicația de e-mail",
    copyMessage: "Copiați mesajul",
    copied: "Mesaj copiat în clipboard.",
    errName: "Vă rog să indicați numele și prenumele.",
    errEmail: "Vă rog să indicați adresa de e-mail.",
    errEmailShort: "Această adresă de e-mail pare incompletă.",
    errPhoneNeeded: "Un număr de telefon este necesar pentru a vă putea contacta.",
    errPhoneSms:
      "Un număr de telefon este necesar pentru a vă putea scrie prin SMS.",
    errPhoneShort: "Acest număr pare incomplet.",
    errMessage: "Vă rog să descrieți cererea în câteva cuvinte.",
    errMessageShort:
      "Câteva cuvinte în plus mă vor ajuta să vă orientez mai bine.",
    errConsent:
      "Vă rog să acceptați ca datele dumneavoastră să fie folosite pentru a vă contacta.",
  },
  ar: {
    ageGroups: [
      "طفل (أقل من 12 سنة)",
      "مراهق (12–17 سنة)",
      "شاب بالغ (18–25 سنة)",
      "بالغ (26–60 سنة)",
      "شخص مسن (أكثر من 60 سنة)",
      "أفضل عدم التحديد",
    ],
    motifs: ["طلب تقييم", "متابعة / جلسات", "طلب آخر"],
    channels: { phone: "الهاتف", sms: "رسالة نصية", email: "البريد الإلكتروني" },
    name: "الاسم واللقب",
    namePlaceholder: "اسمكم",
    phone: "الهاتف",
    optional: "(اختياري)",
    phonePlaceholder: "ليتم الاتصال بكم",
    email: "البريد الإلكتروني",
    emailPlaceholder: "name@example.com",
    age: "عمر الشخص",
    choose: "اختر…",
    reason: "سبب الطلب",
    message: "طلبكم",
    messagePlaceholder:
      "صفوا لي في بضع كلمات وضعكم أو سؤالكم.",
    preference: "كيف تفضلون أن نتواصل معكم؟",
    preferenceHint:
      "أجيب افتراضيًا بالبريد الإلكتروني. يلزم رقم هاتف إذا اخترتم الهاتف أو الرسالة النصية.",
    consent:
      "أوافق على استخدام معلوماتي للتواصل معي بخصوص طلبي. لا تُنقل أي بيانات إلى أطراف ثالثة.",
    privacy: "سياسة الخصوصية",
    submit: "فتح تطبيق البريد",
    another: "كتابة رسالة أخرى",
    errorTitle: "تعذر إرسال النموذج",
    orCall: "يمكنكم أيضًا الاتصال بي أو إرسال رسالة نصية إلى",
    subject: "طلب تواصل · {name}",
    mailLabels: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      age: "عمر الشخص",
      reason: "السبب",
      preference: "تفضيل التواصل",
      message: "الرسالة",
    },
    draftTitle: "يُفتح تطبيق البريد لديكم",
    draftText:
      "تمت تعبئة الرسالة مسبقًا في تطبيق البريد لديكم. كل ما عليكم فعله هو الضغط على «إرسال» لتصل إليّ.",
    draftTruncated:
      "كانت رسالتكم أطول من أن تُعبأ بالكامل، لذا تم اختصارها. النص الكامل أدناه، جاهز للنسخ إلى تطبيق البريد.",
    draftNoApp:
      "لم تُفتح أي نافذة؟ انسخوا الرسالة أدناه وأرسلوها إلى",
    reopenMail: "إعادة فتح تطبيق البريد",
    copyMessage: "نسخ الرسالة",
    copied: "تم نسخ الرسالة إلى الحافظة.",
    errName: "يرجى إدخال الاسم واللقب.",
    errEmail: "يرجى إدخال عنوان البريد الإلكتروني.",
    errEmailShort: "يبدو عنوان البريد الإلكتروني غير مكتمل.",
    errPhoneNeeded: "يلزم رقم هاتف للاتصال بكم.",
    errPhoneSms: "يلزم رقم هاتف للتواصل معكم عبر رسالة نصية.",
    errPhoneShort: "يبدو هذا الرقم غير مكتمل.",
    errMessage: "يرجى وصف طلبكم في بضع كلمات.",
    errMessageShort:
      "بضع كلمات إضافية ستساعدني على توجيهكم بشكل أفضل.",
    errConsent:
      "يرجى الموافقة على استخدام معلوماتكم للتواصل معكم.",
  },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_MESSAGE = 10;

const fieldClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink-3/70 focus:border-blue focus:ring-2 focus:ring-blue/15";
const fieldClassError =
  "border-alert/70 focus:border-alert focus:ring-alert/20";
const labelClass = "block text-sm font-medium text-ink";

/** Ordre d'affichage du résumé d'erreurs, aligné sur l'ordre du formulaire. */
const FIELD_ORDER: FieldName[] = [
  "nom",
  "telephone",
  "email",
  "message",
  "consent",
];

function validate(values: Values, t: (typeof copy)["fr"]): Errors {
  const errors: Errors = {};

  if (!values.nom.trim()) {
    errors.nom = t.errName;
  }

  if (!values.email.trim()) {
    errors.email = t.errEmail;
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = t.errEmailShort;
  }

  // Le téléphone n'est exigé que si l'on a choisi d'être recontacté par ce canal.
  if (
    (values.preference === "phone" || values.preference === "sms") &&
    !values.telephone.trim()
  ) {
    errors.telephone =
      values.preference === "sms" ? t.errPhoneSms : t.errPhoneNeeded;
  } else if (
    values.telephone.trim() &&
    values.telephone.replace(/\D/g, "").length < 6
  ) {
    errors.telephone = t.errPhoneShort;
  }

  if (!values.message.trim()) {
    errors.message = t.errMessage;
  } else if (values.message.trim().length < MIN_MESSAGE) {
    errors.message = t.errMessageShort;
  }

  if (!values.consent) {
    errors.consent = t.errConsent;
  }

  return errors;
}

/**
 * Longueur maximale de l'URI `mailto:`. Au-delà, les clients de messagerie
 * (Outlook sur Windows en premier) tronquent l'URI et le message arrive
 * mutilé : on raccourcit donc le corps jusqu'à ce que l'URI entière tienne.
 * 1 800 laisse une marge sous la limite usuelle de 2 000 caractères.
 */
const MAX_HREF = 1800;

function mailtoHref(subject: string, body: string): string {
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

/**
 * Construit le brouillon : le corps du message, en clair, et le lien
 * `mailto:` qui l'ouvre dans l'application de messagerie du visiteur.
 */
function buildDraft(
  values: Values,
  t: (typeof copy)["fr"],
): Draft {
  const L = t.mailLabels;
  const lines = [
    `${L.name} : ${values.nom.trim()}`,
    `${L.email} : ${values.email.trim()}`,
    `${L.phone} : ${values.telephone.trim() || "—"}`,
    `${L.age} : ${values.age || "—"}`,
    `${L.reason} : ${values.motif || "—"}`,
    `${L.preference} : ${t.channels[values.preference as ChannelKey] ?? values.preference}`,
    "",
    `${L.message} :`,
    values.message.trim(),
  ];

  const full = lines.join("\n");
  const subject = t.subject.replace("{name}", values.nom.trim());

  let body = full;
  let href = mailtoHref(subject, body);
  while (href.length > MAX_HREF && body.length > 240) {
    body = `${body.slice(0, body.length - 120).trimEnd()}…`;
    href = mailtoHref(subject, body);
  }
  const truncated = body !== full;

  return { subject, body, full, truncated, href };
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm text-alert">
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

export function ContactForm({ locale = "fr" }: { locale?: Locale }) {
  const t = copy[locale];
  const [status, setStatus] = useState<Status>("idle");
  const [draft, setDraft] = useState<Draft | null>(null);
  const [copied, setCopied] = useState(false);
  const [values, setValues] = useState<Values>({
    nom: "",
    telephone: "",
    email: "",
    age: "",
    motif: "",
    message: "",
    preference: "email",
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const summaryRef = useRef<HTMLDivElement>(null);
  const draftRef = useRef<HTMLDivElement>(null);
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
    if (status === "draft") {
      draftRef.current?.focus();
    }
  }, [status]);

  function setValue<K extends keyof Values>(key: K, value: Values[K]) {
    const next = { ...values, [key]: value };
    setValues(next);
    // Les erreurs sont recalculées à chaque frappe ; l'affichage est ensuite
    // filtré champ par champ (champ touché ou formulaire déjà soumis).
    setErrors(validate(next, t));
  }

  function markTouched(field: FieldName, source?: Values) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(source ?? values, t));
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

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);

    const found = validate(values, t);

    if (Object.keys(found).length > 0) {
      announceErrors(found);
      return;
    }

    const built = buildDraft(values, t);
    setDraft(built);
    setStatus("draft");

    // Le lien part du geste de l'utilisateur : la navigation doit rester
    // dans la même tâche, sinon certains navigateurs la bloquent.
    window.location.href = built.href;

    // Événement disponible pour un outil de mesure d’audience (GTM, Plausible…).
    window.dispatchEvent(
      new CustomEvent("contact:submit", { detail: { motif: values.motif } }),
    );
  }

  async function copyDraft() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.full);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  if (status === "draft" && draft) {
    return (
      <div
        ref={draftRef}
        tabIndex={-1}
        role="status"
        className="rounded-[2rem] border border-blue/40 bg-blue-soft p-8"
      >
        <p className="font-display text-2xl text-ink">{t.draftTitle}</p>
        <p className="mt-3 leading-relaxed text-ink-2">{t.draftText}</p>

        {draft.truncated && (
          <p className="mt-4 rounded-xl border border-ink/10 bg-paper/70 p-3 text-sm text-ink-2">
            {t.draftTruncated}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={draft.href}
            className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-blue-deep"
          >
            {t.reopenMail}
          </a>
          <button
            type="button"
            onClick={copyDraft}
            className="rounded-full border border-ink/20 px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink/50"
          >
            {t.copyMessage}
          </button>
        </div>

        <p aria-live="polite" className="mt-3 min-h-5 text-sm text-ink-2">
          {copied ? t.copied : ""}
        </p>

        <p className="mt-3 text-sm text-ink-2">
          {t.draftNoApp}{" "}
          <a href={`mailto:${site.contact.email}`} className="link-quiet font-medium">
            {site.contact.email}
          </a>
        </p>
        <p className="mt-2 text-sm text-ink-2">
          {t.orCall}{" "}
          <a href={`tel:${site.contact.phoneHref}`} className="link-quiet font-medium">
            <span dir="ltr">{site.contact.phoneDisplay}</span>
          </a>
          .
        </p>

        <pre className="mt-5 max-h-64 overflow-auto whitespace-pre-wrap rounded-xl border border-line bg-paper p-4 text-sm text-ink-2">
          {draft.full}
        </pre>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setDraft(null);
            setCopied(false);
          }}
          className="mt-6 rounded-full border border-ink/20 px-5 py-2.5 text-sm text-ink transition-colors hover:border-ink/50"
        >
          {t.another}
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
      className="space-y-5 rounded-[2rem] border border-line bg-paper-2 p-6 sm:p-8"
    >
      {errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="erreurs-formulaire"
          className="rounded-2xl border border-alert/40 bg-alert-soft p-5"
        >
          <h3
            id="erreurs-formulaire"
            className="font-display text-lg leading-snug text-ink"
          >
            {t.errorTitle}
          </h3>
          <ul className="mt-2 list-disc space-y-1 ps-5 text-sm text-ink-2">
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

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className={labelClass}>
            {t.name}
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
            placeholder={t.namePlaceholder}
          />
          <FieldError id="nom-erreur" message={showError("nom")} />
        </div>
        <div>
          <label htmlFor="telephone" className={labelClass}>
            {t.phone}{" "}
            <span className="font-normal text-ink-2">{t.optional}</span>
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
            placeholder={t.phonePlaceholder}
          />
          <FieldError id="telephone-erreur" message={showError("telephone")} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          {t.email}
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
          placeholder={t.emailPlaceholder}
        />
        <FieldError id="email-erreur" message={showError("email")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="age" className={labelClass}>
            {t.age}{" "}
            <span className="font-normal text-ink-2">{t.optional}</span>
          </label>
          <select
            id="age"
            name="age"
            value={values.age}
            onChange={(e) => setValue("age", e.target.value)}
            className={`mt-2 ${fieldClass}`}
          >
            <option value="" disabled>
              {t.choose}
            </option>
            {t.ageGroups.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="motif" className={labelClass}>
            {t.reason}{" "}
            <span className="font-normal text-ink-2">{t.optional}</span>
          </label>
          <select
            id="motif"
            name="motif"
            value={values.motif}
            onChange={(e) => setValue("motif", e.target.value)}
            className={`mt-2 ${fieldClass}`}
          >
            <option value="" disabled>
              {t.choose}
            </option>
            {t.motifs.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {t.message}
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
          placeholder={t.messagePlaceholder}
        />
        <FieldError id="message-erreur" message={showError("message")} />
      </div>

      <fieldset>
        <legend className={labelClass}>{t.preference}</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {CHANNEL_KEYS.map((key) => (
            <label
              key={key}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink-2 transition-colors has-checked:border-blue has-checked:text-ink"
            >
              <input
                type="radio"
                name="preference"
                value={key}
                checked={values.preference === key}
                onChange={() => {
                  const next = { ...values, preference: key };
                  setValues(next);
                  setErrors(validate(next, t));
                  // Choisir le téléphone ou le SMS rend le numéro nécessaire :
                  // on l'annonce sans attendre la soumission.
                  if (key === "phone" || key === "sms") {
                    setTouched((prev) => ({ ...prev, telephone: true }));
                  }
                }}
                className="accent-blue"
              />
              {t.channels[key]}
            </label>
          ))}
        </div>
        <p className="mt-2 text-xs text-ink-3">{t.preferenceHint}</p>
      </fieldset>

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
            {t.consent}{" "}
            <Link
              href={pages.privacy[locale]}
              className="text-blue-deep link-quiet"
            >
              {t.privacy}
            </Link>
            .
          </span>
        </label>
        <FieldError id="consent-erreur" message={showError("consent")} />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-ink px-6 py-4 text-sm text-paper transition-colors hover:bg-blue-deep"
      >
        {t.submit}
      </button>
    </form>
  );
}
