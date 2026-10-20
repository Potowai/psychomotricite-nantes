import type { Metadata } from "next";
import { CtaBand } from "@/components/contact-cta";
import { DocumentLang } from "@/components/document-lang";
import { Callout, Container, Faq, PageHero, SectionTitle } from "@/components/ui";
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  medicalWebPageSchema,
  serviceSchema,
} from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { mailHref, site, smsHref, telHref } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "English-speaking psychomotor therapist in Nantes",
  description:
    "Manuela Edom is a state-certified psychomotor therapist (psychomotricienne D.E.) in Nantes who practices in English. Sessions for teenagers and adults, and children in specific situations — giftedness (HQI/THQI), ADHD, anxiety, burnout.",
  path: "/en",
  locale: "en_GB",
  languages: { "fr-FR": "/", en: "/en", "x-default": "/" },
});

const faqs = [
  {
    question: "Do you really practice in English?",
    answer:
      "Yes. French is my mother tongue and I work in English at a B2 level. Sessions can be held in either language, whichever feels more comfortable for you.",
  },
  {
    question: "Do I need a prescription or a diagnosis?",
    answer:
      "A medical prescription is required to start a psychomotor assessment or follow-up. A diagnosis is not required to get in touch: you can contact me simply because something feels heavy, without a diagnosis or a word for it. If another professional would be more appropriate, I will tell you and point you in the right direction.",
  },
  {
    question: "How much does a session cost, and is it reimbursed?",
    answer:
      `A follow-up session is €${site.pricing.suivi.amount}. The assessment (bilan) takes ${site.pricing.bilan.sessions} sessions and costs €${site.pricing.bilan.total} in total (€${site.pricing.bilan.unitAmount} per session); a session lasts about ${site.pricing.durationMinutes} minutes. Psychomotor therapy is not reimbursed by the French public health insurance. Some private health insurers (mutuelles), the MDPH and a few other schemes may contribute — we can talk it through.`,
  },
];

export default function EnglishPage() {
  return (
    <div lang="en">
      <DocumentLang lang="en" />
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "English" },
        ]}
        eyebrow="English"
        title="Psychomotor therapy in Nantes, in English."
        lead={`I am ${site.name.split(" ")[0]} ${site.name.split(" ")[1]}, a state-certified psychomotor therapist (psychomotricienne D.E.) practising in Nantes since ${site.practitioner.since}. I see teenagers and adults — and children in specific situations — and I practise in English as well as French.`}
      />

      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-14">
          <div>
            <SectionTitle
              eyebrow="First things first"
              title="What is psychomotor therapy?"
            />
            <div className="mt-6 space-y-5 text-lg leading-[1.75] text-ink-2">
              <p>
                Psychomotor therapy (psychomotricité) is a paramedical
                profession in France, recognised by a state diploma in the same
                way as speech therapy or physiotherapy. It looks at the links
                between what we feel in our body and what we carry in our mind.
              </p>
              <p>
                It is not only for children. Sessions are for anyone, from
                babies to older people. In private practice I work mainly with
                teenagers and adults who come because something has become
                difficult: anxiety, a body that will not settle, a feeling of
                being out of step, exhaustion, or simply a wish to understand
                themselves better.
              </p>
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="Who I work with" title="A body that speaks first." />
            <div className="mt-6 space-y-5 text-lg leading-[1.75] text-ink-2">
              <p>
                I have a close understanding of giftedness, and I very often see
                people who are HQI/THQI. I also work with people concerned by
                other forms of neurodivergence — autism (TSA), ADHD, and
                specific learning difficulties (troubles dys).
              </p>
              <p>
                Whether you already have a diagnosis or simply a feeling that
                something is off, you are welcome. There is no right reason and
                no right moment to get in touch. A medical prescription is
                required to start an assessment or follow-up; we can discuss
                this when you get in touch.
              </p>
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="How it works" title="What a session looks like." />
            <div className="mt-6 space-y-5 text-lg leading-[1.75] text-ink-2">
              <p>
                The first appointments are about meeting and clarifying what
                brings you here, at your pace and without judgement. If needed,
                a psychomotor assessment can be carried out; it is not a
                mandatory step before starting sessions. It offers a first
                picture of where you are in your body: fine and gross motor
                skills, your relationship with time and space, your sensory
                world.
              </p>
              <p>
                After that, sessions move between bodily mediation and talking:
                relaxation, breathing, movement, drawing, clay, therapeutic
                touch. A session lasts about {site.pricing.durationMinutes}{" "}
                minutes, usually once a week or every other week.
              </p>
            </div>
          </div>

          <Callout title="Practical information" tone="blue">
            <p>
              Multidisciplinary practice, {site.address.street},{" "}
              {site.address.postalCode} {site.address.city} — close to the city
              centre, in the Malakoff – Saint-Donatien neighbourhood.
            </p>
            <p className="mt-2">
              I see people at the practice{" "}
              <strong>Monday to Friday</strong>, by appointment. Bus 11 or 12
              (stop Casterneau, 1 min walk); C1 (stop Chalâtres, 10 min walk);
              tram line 1 (stop Moutonnerie, 20 min walk). The Super U Dalby car
              park offers 2 hours of free parking, an 8-minute walk away.
            </p>
            <p className="mt-3">
              <a href={telHref} className="link-quiet font-medium">
                {site.contact.phoneDisplay}
              </a>{" "}
              (call or SMS) ·{" "}
              <a href={mailHref} className="link-quiet font-medium">
                {site.contact.email}
              </a>{" "}
              ·{" "}
              <a href={smsHref} className="link-quiet font-medium">
                send a text
              </a>
            </p>
          </Callout>

          <div>
            <SectionTitle eyebrow="Questions" title="You might be wondering…" />
            <div className="mt-8">
              <Faq items={faqs} />
            </div>
          </div>
        </div>
      </Container>

      <CtaBand
        title="Shall we see if this is right for you?"
        text="Tell me a little about your situation by phone, text or the contact form. I will suggest an appointment, or point you to another professional if that would serve you better."
      />

      <JsonLd
        data={[
          serviceSchema({
            name: "Psychomotor therapy in English — Nantes",
            description:
              "English-speaking psychomotor therapy sessions in Nantes for teenagers and adults, and children in specific situations.",
            path: "/en",
          }),
          medicalWebPageSchema({
            name: "English-speaking psychomotor therapist in Nantes",
            description:
              "English-speaking psychomotor therapy in Nantes with Manuela Edom, psychomotricienne D.E.",
            path: "/en",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "English", path: "/en" },
          ]),
          faqSchema(faqs),
        ]}
      />
    </div>
  );
}
