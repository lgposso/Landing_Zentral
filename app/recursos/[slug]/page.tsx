import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { resourceArticles, servicePages } from "@/config/content";
import { ctaConfig } from "@/config/site";

interface ResourceArticleProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ResourceArticleProps): Promise<Metadata> {
  const { slug } = await params;
  const article = resourceArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.metaDescription,
    alternates: {
      canonical: `/recursos/${article.slug}`,
    },
  };
}

export default async function ResourceArticlePage({
  params,
}: ResourceArticleProps) {
  const { slug } = await params;
  const article = resourceArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = article.relatedServices
    .map((serviceSlug) => servicePages.find((s) => s.slug === serviceSlug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  return (
    <>
      <BreadcrumbSchema
        segments={[
          { name: "Recursos", path: "/recursos" },
          { name: article.title, path: `/recursos/${article.slug}` },
        ]}
      />

      <Container className="py-20 lg:py-28">
        <nav aria-label="Ruta de navegación" className="text-sm text-muted">
          <Link href="/" className="hover:text-foreground">
            Inicio
          </Link>
          <span className="mx-2">›</span>
          <Link href="/recursos" className="hover:text-foreground">
            Recursos
          </Link>
        </nav>

        <h1 className="mt-6 max-w-2xl text-h1 text-foreground">
          {article.title}
        </h1>
        <p className="mt-6 max-w-2xl text-body text-muted">{article.intro}</p>

        <div className="mt-16 max-w-[720px] space-y-12">
          {article.sections.map((section) => (
            <section key={section.question}>
              <h3 className="text-h3 font-bold text-foreground">
                {section.question}
              </h3>
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

        {related.length > 0 && (
          <div className="mt-20 max-w-[720px] border-t border-border pt-12">
            <p className="zentral-label text-foreground">
              Servicios relacionados
            </p>
            <ul className="mt-5 space-y-3">
              {related.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="inline-flex items-center gap-2 text-body text-primary-hover transition-colors duration-200 hover:text-foreground"
                  >
                    {service.heroTitle}
                    <ArrowRight className="size-4" strokeWidth={2} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-20 border border-primary/25 px-8 py-16 text-center md:px-16">
          <h2 className="mx-auto max-w-2xl text-h2 text-foreground">
            ¿Quieres resolver esto en tu empresa?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button
              href={ctaConfig.primary.href}
              isExternal={ctaConfig.primary.isExternal}
              size="lg"
            >
              {ctaConfig.primary.label}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
