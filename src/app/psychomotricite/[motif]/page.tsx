import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/contact-cta";
import { Callout, Container, Faq, PageHero, SectionTitle } from "@/components/ui";
import { articlesFor } from "@/content/blog";
import { getMotif, motifs } from "@/content/motifs";
import { formatDate } from "@/lib/format";
import {
  JsonLd,
  breadcrumbSchema,
  faqSchema,
  medicalWebPageSchema,
  serviceSchema,
} from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return motifs.map((motif) => ({ motif: motif.slug }));
}

export async function generateMetadata(
  props: PageProps<"/psychomotricite/[motif]">,
): Promise<Metadata> {
  const { motif: slug } = await props.params;
  const motif = getMotif(slug);
  if (!motif) return {};
  return pageMetadata({
    title: motif.metaTitle,
    description: motif.metaDescription,
    path: `/psychomotricite/${motif.slug}`,
  });
}

export default async function MotifPage(
  props: PageProps<"/psychomotricite/[motif]">,
) {
  const { motif: slug } = await props.params;
  const motif = getMotif(slug);
  if (!motif) notFound();

  const path = `/psychomotricite/${motif.slug}`;
  const others = motifs.filter((m) => m.slug !== motif.slug);
  const related = motif.related
    ? articlesFor().filter((a) => motif.related?.includes(a.slug))
    : [];

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Accueil", href: "/" },
          { label: "La psychomotricité", href: "/psychomotricite" },
          { label: motif.label },
        ]}
        eyebrow="Motif de consultation"
        title={motif.title}
        lead={motif.lead}
      />

      <Container className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-14">
          {motif.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-[1.9rem] leading-tight text-ink sm:text-[2.2rem]">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-5 text-lg leading-[1.75] text-ink-2">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {section.items && (
                <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-ink-2">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azure"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {motif.note && (
            <Callout title={motif.note.title} tone={motif.note.tone}>
              <p>{motif.note.text}</p>
            </Callout>
          )}

          <div>
            <SectionTitle
              eyebrow="Questions fréquentes"
              title="Vous vous demandez peut-être…"
            />
            <div className="mt-8">
              <Faq items={motif.faq} />
            </div>
          </div>

          {related.length > 0 && (
            <div className="rounded-[1.75rem] border border-line bg-paper-2/60 p-7 sm:p-9">
              <p className="eyebrow">À lire</p>
              <ul className="mt-5 space-y-5">
                {related.map((article) => (
                  <li key={article.slug}>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="group block"
                    >
                      <p className="text-xs text-ink-3">
                        {formatDate(article.date)} · {article.readingMinutes} min
                        de lecture
                      </p>
                      <p className="mt-1 font-display text-xl leading-snug text-ink group-hover:text-azure-deep">
                        {article.title}
                      </p>
                      <p className="mt-1.5 text-ink-2">{article.description}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border-t border-line pt-8">
            <p className="eyebrow">Autres motifs de consultation</p>
            <ul className="mt-5 flex flex-wrap gap-3">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/psychomotricite/${other.slug}`}
                    className="inline-block rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink-2 transition-colors hover:border-azure/40 hover:text-azure-deep"
                  >
                    {other.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-ink-2">
              Votre situation ne figure pas ici ? Elle n’en est pas moins
              légitime —{" "}
              <Link href="/contact" className="text-blue-deep link-quiet">
                écrivez-moi ou appelez-moi
              </Link>{" "}
              pour m’expliquer votre demande.
            </p>
          </div>
        </div>
      </Container>

      <CtaBand
        title="Parlons de votre situation."
        text="N’hésitez pas à me contacter pour m’expliquer votre demande : je vous proposerai un rendez-vous, ou je vous réorienterai vers un.e autre professionnel.le si besoin."
      />

      <JsonLd
        data={[
          serviceSchema({
            name: `${motif.label} — psychomotricité`,
            description: motif.metaDescription,
            path,
          }),
          medicalWebPageSchema({
            name: motif.metaTitle,
            description: motif.metaDescription,
            path,
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "La psychomotricité", path: "/psychomotricite" },
            { name: motif.label, path },
          ]),
          faqSchema(motif.faq),
        ]}
      />
    </>
  );
}
