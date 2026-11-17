import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { PrimaryCtaButton } from "@/components/cta/PrimaryCtaButton";
import { Container } from "@/components/ui/Container";
import { guideHref, guides } from "@/config/guides";
import { customServiceHref, getCustomService } from "@/config/services";
import { siteConfig, whatsappHref } from "@/config/site";
import { lineStyles } from "@/lib/lines";
import { cn } from "@/lib/utils";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: { canonical: guideHref(guide.slug) },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.metaDescription,
      url: guideHref(guide.slug),
      publishedTime: guide.datePublished,
      modifiedTime: guide.lastModified,
    },
  };
}

const line = lineStyles.custom;

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const related = guide.relatedServices.map(getCustomService);
  const url = `${siteConfig.url}${guideHref(guide.slug)}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: guide.title,
    description: guide.metaDescription,
    url,
    mainEntityOfPage: url,
    inLanguage: "es-CO",
    datePublished: guide.datePublished,
    dateModified: guide.lastModified,
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    about: related.map((service) => ({
      "@id": `${siteConfig.url}${customServiceHref(service.slug)}#servicio`,
    })),
  };

  return (
    <>
      <BreadcrumbSchema
        segments={[
          { name: "Guías", path: "/guias" },
          { name: guide.title, path: guideHref(guide.slug) },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Container className="pb-20 pt-28 lg:pb-28 lg:pt-36">
        <nav aria-label="Ruta de navegación" className="text-sm text-muted">
          <Link href="/" className="hover:text-foreground hover:underline">
            Inicio
          </Link>
          <span className="mx-2" aria-hidden="true">›</span>
          <Link href="/guias" className="hover:text-foreground hover:underline">
            Guías
          </Link>
        </nav>

        <article className="mt-8 max-w-[720px]">
          <h1 className="text-h1 text-foreground">{guide.title}</h1>
          <p className="mt-4 text-[14px] text-muted">
            Zentral Solutions, Barranquilla ·{" "}
            <time dateTime={guide.lastModified}>
              Actualizada el{" "}
              {new Date(`${guide.lastModified}T12:00:00`).toLocaleDateString("es-CO", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
          <p className="mt-8 text-[1.25rem] leading-relaxed text-foreground">{guide.intro}</p>

          <div className="mt-14 space-y-12">
            {guide.sections.map((section) => (
              <section key={section.question}>
                <h2 className="text-h3 text-foreground">{section.question}</h2>
                <div className="mt-4 space-y-4">
                  {section.answer.map((paragraph) => (
                    <p key={paragraph} className="text-body text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        <div className="mt-20 max-w-[720px] border-t border-border pt-12">
          <p className="zentral-label text-foreground">Lo construimos</p>
          <ul className="mt-5 space-y-5">
            {related.map((service) => (
              <li key={service.slug}>
                <Link
                  href={customServiceHref(service.slug)}
                  className="group inline-flex items-start gap-2 text-[1.0625rem] font-extrabold leading-snug text-foreground hover:underline"
                >
                  {service.heroTitle}
                  <ArrowRight
                    className="mt-1 size-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </Link>
                <p className="mt-1 text-small text-muted">{service.summary}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 max-w-[720px]">
          <div aria-hidden="true" className="flex items-center">
            <span className={cn("h-2 flex-1 rounded-l-full", line.bg)} />
            <span
              className={cn("block size-11 shrink-0 rounded-full border-[9px] bg-background", line.border)}
            />
          </div>
          <h2 className="mt-10 text-h2 text-foreground">¿Quieres resolver esto en tu empresa?</h2>
          <p className="mt-4 max-w-[52ch] text-body text-muted">
            Una conversación de 30 minutos, en Barranquilla o por videollamada.
          </p>
          <div className="mt-8">
            <PrimaryCtaButton
              location={`guia-${guide.slug}`}
              size="lg"
              href={whatsappHref(related[0]?.ctaMessage ?? "Hola, quiero agendar una conversación")}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
