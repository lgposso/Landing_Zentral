import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";

import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { servicePages } from "@/config/content";
import { ctaConfig } from "@/config/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/servicios/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <BreadcrumbSchema
        segments={[
          { name: "Soluciones", path: "/#soluciones" },
          { name: service.heroTitle, path: `/servicios/${service.slug}` },
        ]}
      />

      <Container className="py-20 lg:py-28">
        <nav aria-label="Ruta de navegación" className="text-sm text-muted">
          <Link href="/" className="hover:text-foreground">
            Inicio
          </Link>
          <span className="mx-2">›</span>
          <Link href="/#soluciones" className="hover:text-foreground">
            Soluciones
          </Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">{service.heroTitle}</span>
        </nav>

        <h1 className="mt-6 max-w-2xl text-h1 text-foreground">
          {service.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-body text-muted">
          {service.heroSubtitle}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
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

        <div className="mt-20 max-w-[720px] space-y-16">
          <section>
            <h2 className="text-h3 font-bold text-foreground">Qué es</h2>
            <div className="mt-4 space-y-4">
              {service.whatItIs.map((paragraph) => (
                <p key={paragraph} className="text-body text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-h3 font-bold text-foreground">
              A quién le sirve
            </h2>
            <div className="mt-4 space-y-4">
              {service.whoItsFor.map((paragraph) => (
                <p key={paragraph} className="text-body text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-h3 font-bold text-foreground">
              Cómo lo implementa Zentral
            </h2>
            <div className="mt-4 space-y-4">
              {service.howWeImplementIt.map((paragraph) => (
                <p key={paragraph} className="text-body text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-h3 font-bold text-foreground">
              Tecnologías concretas
            </h2>
            <div className="mt-6 space-y-6">
              {service.technologies.map((tech) => (
                <div key={tech.name}>
                  <p className="font-heading font-semibold text-foreground">
                    {tech.name}
                  </p>
                  <p className="mt-1 text-small text-muted">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-h3 font-bold text-foreground">
              Qué recibe el cliente
            </h2>
            <ul className="mt-4 space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-1 size-4 shrink-0 text-primary-hover"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span className="text-body text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-h3 font-bold text-foreground">
              Plazo y rango de inversión
            </h2>
            <div className="mt-4 space-y-4">
              <p className="text-body text-muted">{service.timeline}</p>
              <p className="text-body text-muted">{service.investmentRange}</p>
            </div>
          </section>

          <section>
            <h2 className="text-h3 font-bold text-foreground">
              Cómo se vería aplicado
            </h2>
            <p className="mt-4 rounded-lg border border-border bg-card px-5 py-4 text-small text-muted">
              {service.appliedScenario.disclaimer}
            </p>
            <div className="mt-6 space-y-4">
              {service.appliedScenario.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-20 border border-primary/25 px-8 py-16 text-center md:px-16">
          <h2 className="mx-auto max-w-2xl text-h2 text-foreground">
            ¿Este es el proceso que quieres resolver?
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
