import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { PrimaryCtaButton } from "@/components/cta/PrimaryCtaButton";
import { LineDiagram } from "@/components/network/LineDiagram";
import { StripMap } from "@/components/network/StripMap";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LineMark } from "@/components/ui/LineMark";
import { processSteps } from "@/config/content";
import { guideHref, guides } from "@/config/guides";
import { customServiceHref, customServices, localCopy } from "@/config/services";
import { customDevHref, siteConfig, whatsappHref } from "@/config/site";
import { lineStyles } from "@/lib/lines";
import { cn } from "@/lib/utils";
import type { CustomService } from "@/types";

interface CustomServicePageProps {
  service: CustomService;
  /** La prueba de que esto ya existe: los agentes de demostración o Zentral RIPS. */
  proof: ReactNode;
}

const line = lineStyles.custom;

/** Service con el área de servicio local, enlazado a la organización por @id. */
function ServiceSchema({ service }: { service: CustomService }) {
  const url = `${siteConfig.url}${customServiceHref(service.slug)}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#servicio`,
    name: service.heroTitle,
    serviceType: service.serviceType,
    description: service.heroSubtitle,
    url,
    provider: { "@id": `${siteConfig.url}/#organization` },
    isRelatedTo: { "@id": `${siteConfig.url}${customDevHref}#servicio` },
    areaServed: [
      {
        "@type": "City",
        name: "Barranquilla",
        containedInPlace: { "@type": "AdministrativeArea", name: "Atlántico" },
      },
      { "@type": "City", name: "Soledad" },
      { "@type": "City", name: "Puerto Colombia" },
      { "@type": "AdministrativeArea", name: "Atlántico" },
      { "@type": "Country", name: "Colombia" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: siteConfig.contact.phone,
      availableLanguage: "es",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/**
 * Plantilla de las formas de desarrollo a la medida con página propia
 * (agentes de IA, automatización). Va sobre la troncal azul, con la misma
 * gramática que /desarrollo-a-la-medida: letrero de andén, panel de
 * condiciones, franja del recorrido, diagrama de entregables y terminal.
 */
export function CustomServicePage({ service, proof }: CustomServicePageProps) {
  const href = customServiceHref(service.slug);
  const ctaHref = whatsappHref(service.ctaMessage);
  const relatedGuides = guides.filter((guide) =>
    guide.relatedServices.includes(service.slug),
  );
  const otherServices = customServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <BreadcrumbSchema
        segments={[
          { name: "Desarrollo a la medida", path: customDevHref },
          { name: service.name, path: href },
        ]}
      />
      <ServiceSchema service={service} />

      {/* Cabecera ---------------------------------------------------------- */}
      <section className="pb-16 pt-28 md:pb-24 md:pt-32">
        <Container>
          <nav aria-label="Ruta de navegación" className="text-sm text-muted">
            <Link href="/" className="hover:text-foreground hover:underline">
              Inicio
            </Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <Link href={customDevHref} className="hover:text-foreground hover:underline">
              Desarrollo a la medida
            </Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-foreground" aria-current="page">
              {service.name}
            </span>
          </nav>

          <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 lg:col-span-7">
              <div className="inline-flex max-w-full items-center gap-4 rounded-card border-[1.5px] border-border bg-surface py-4 pl-5 pr-6 md:gap-5 md:pr-8">
                <LineMark line="custom" size="xl" />
                <div className="min-w-0">
                  <h1 className="text-h2 text-foreground">{service.heroTitle}</h1>
                  <p className="mt-1 text-small font-semibold text-muted">
                    Desarrollo a la medida
                  </p>
                </div>
              </div>

              <p className="mt-10 max-w-[26ch] text-[clamp(1.5rem,1.15rem+1.2vw,2.125rem)] font-bold leading-[1.15] tracking-[-0.02em] text-foreground">
                {service.promise}
              </p>
              <p className="mt-6 max-w-[56ch] text-body text-muted">
                {service.heroSubtitle}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <PrimaryCtaButton
                  location={`${service.slug}-top`}
                  size="lg"
                  href={ctaHref}
                />
                <Button href="#como-trabajamos" variant="secondary" size="lg">
                  Cómo trabajamos
                </Button>
              </div>
            </div>

            <aside
              aria-label={`Condiciones: ${service.name}`}
              className="min-w-0 self-start rounded-card bg-surface p-7 md:p-9 lg:col-span-5 lg:mt-4"
            >
              <dl className="space-y-6">
                {service.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="zentral-label text-muted">{fact.label}</dt>
                    <dd className="mt-1 text-[1.25rem] font-extrabold leading-snug text-foreground">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </Container>
      </section>

      {/* La prueba: lo que ya existe -------------------------------------- */}
      {proof}

      {/* Qué es, para quién y cuándo no ------------------------------------ */}
      <section aria-labelledby="que-es" className="border-t border-border py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <h2 id="que-es" className="max-w-[22ch] text-h2 text-foreground">
              {service.whatItIs.title}
            </h2>
            <div className="mt-8 max-w-[62ch] space-y-5">
              {service.whatItIs.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="min-w-0 lg:col-span-5 lg:pt-3">
            <h2 className="text-h3 text-foreground">Para quién es</h2>
            <div className="mt-5 space-y-4">
              {service.whoItsFor.map((paragraph) => (
                <p key={paragraph} className="text-small text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            <h3 className="mt-10 text-[1.0625rem] font-extrabold text-foreground">
              Cuándo no conviene
            </h3>
            <p className="mt-3 text-small text-muted">{service.notFor}</p>
          </div>
        </Container>
      </section>

      {/* Cómo trabajamos --------------------------------------------------- */}
      <section
        id="como-trabajamos"
        aria-labelledby="como-trabajamos-title"
        className="scroll-mt-24 border-t border-border py-20 md:py-28"
      >
        <Container>
          <h2 id="como-trabajamos-title" className="text-h2 text-foreground">
            Cómo trabajamos
          </h2>
          <StripMap
            line="custom"
            mode="build"
            size="lg"
            as="h3"
            className="mt-14"
            stations={processSteps.map((step) => ({
              title: step.title,
              description: step.description,
              note: step.deliverable,
            }))}
          />
          <div className="mt-16 grid max-w-5xl gap-x-12 gap-y-5 md:grid-cols-3">
            {service.howWeImplementIt.map((paragraph) => (
              <p key={paragraph} className="text-small text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Qué te entregamos y con qué -------------------------------------- */}
      <section aria-labelledby="entregas" className="border-t border-border py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <h2 id="entregas" className="text-h2 text-foreground">
              Qué te entregamos
            </h2>
            <LineDiagram line="custom" className="mt-12" stations={service.deliverables} />
          </div>

          <aside
            aria-labelledby="tecnologia"
            className="min-w-0 self-start rounded-card bg-surface p-7 md:p-9 lg:sticky lg:top-28 lg:col-span-5"
          >
            <h2 id="tecnologia" className="text-h3 text-foreground">
              Con qué construimos
            </h2>
            <dl className="mt-6 space-y-6">
              {service.technologies.map((tech) => (
                <div key={tech.name}>
                  <dt className="text-[1.0625rem] font-extrabold leading-tight text-foreground">
                    {tech.name}
                  </dt>
                  <dd className="mt-1.5 text-small text-muted">{tech.description}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </Container>
      </section>

      {/* Plazo, inversión y la ciudad -------------------------------------- */}
      <section aria-labelledby="plazo" className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
            <div>
              <h2 id="plazo" className="text-h3 text-foreground">
                Plazo
              </h2>
              <p className="mt-4 max-w-[56ch] text-body text-muted">{service.timeline}</p>
            </div>
            <div>
              <h2 className="text-h3 text-foreground">Inversión</h2>
              <p className="mt-4 max-w-[56ch] text-body text-muted">{service.investment}</p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 rounded-card bg-surface p-7 md:p-10 lg:grid-cols-12 lg:gap-10">
            <h2 className="text-h2 text-foreground lg:col-span-5">{localCopy.title}</h2>
            <div className="space-y-4 lg:col-span-7">
              {localCopy.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Preguntas --------------------------------------------------------- */}
      <section aria-labelledby="preguntas" className="border-t border-border py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <h2 id="preguntas" className="text-h2 text-foreground lg:col-span-4">
            Preguntas frecuentes
          </h2>
          <div className="space-y-10 lg:col-span-8">
            {service.questions.map((item) => (
              <div key={item.question}>
                <h3 className="text-h3 text-foreground">{item.question}</h3>
                <p className="mt-3 max-w-[64ch] text-body text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Así se ve aplicado ------------------------------------------------ */}
      <section aria-labelledby="aplicado" className="border-t border-border py-20 md:py-28">
        <Container>
          <div className="max-w-[68ch]">
            <h2 id="aplicado" className="text-h2 text-foreground">
              Así se ve aplicado
            </h2>
            <div className="mt-8 flex gap-3 rounded-card border-[1.5px] border-border px-5 py-4">
              <Info
                className="mt-0.5 size-5 shrink-0 text-foreground"
                strokeWidth={2}
                aria-hidden="true"
              />
              <p className="text-small text-foreground">{service.appliedScenario.disclaimer}</p>
            </div>
            <div className="mt-8 space-y-5">
              {service.appliedScenario.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Para seguir leyendo ----------------------------------------------- */}
      <section aria-labelledby="seguir" className="border-t border-border py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <h2 id="seguir" className="text-h3 text-foreground lg:col-span-4">
            Para seguir leyendo
          </h2>
          <ul className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 lg:col-span-8">
            {relatedGuides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={guideHref(guide.slug)}
                  className="group inline-flex items-start gap-2 text-[1.0625rem] font-extrabold leading-snug text-foreground hover:underline"
                >
                  {guide.title}
                  <ArrowRight
                    className="mt-1 size-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </Link>
                <span className="mt-1 block text-[14px] text-muted">Guía</span>
              </li>
            ))}
            {otherServices.map((other) => (
              <li key={other.slug}>
                <Link
                  href={customServiceHref(other.slug)}
                  className="group inline-flex items-start gap-2 text-[1.0625rem] font-extrabold leading-snug text-foreground hover:underline"
                >
                  {other.heroTitle}
                  <ArrowRight
                    className="mt-1 size-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </Link>
                <span className="mt-1 block text-[14px] text-muted">También construimos</span>
              </li>
            ))}
            <li>
              <Link
                href={customDevHref}
                className="group inline-flex items-start gap-2 text-[1.0625rem] font-extrabold leading-snug text-foreground hover:underline"
              >
                Desarrollo de software a la medida
                <ArrowRight
                  className="mt-1 size-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                  strokeWidth={2.25}
                  aria-hidden="true"
                />
              </Link>
              <span className="mt-1 block text-[14px] text-muted">
                Cuando lo que necesitas es una aplicación completa
              </span>
            </li>
          </ul>
        </Container>
      </section>

      {/* Terminal ---------------------------------------------------------- */}
      <section aria-labelledby="conversacion" className="pb-20 md:pb-28">
        <Container>
          <div aria-hidden="true" className="flex items-center">
            <span className={cn("h-2 flex-1 rounded-l-full", line.bg)} />
            <span
              className={cn("block size-11 shrink-0 rounded-full border-[9px] bg-background", line.border)}
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-8">
              <h2 id="conversacion" className="text-h2 text-foreground">
                Cuéntanos qué quieres resolver.
              </h2>
              <p className="mt-5 max-w-[52ch] text-body text-muted">
                En una conversación de 30 minutos, en tu empresa o por
                videollamada, entendemos el proceso y te decimos si conviene
                construirlo, cómo lo haríamos y qué no haríamos.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <PrimaryCtaButton
                location={`${service.slug}-bottom`}
                size="lg"
                href={ctaHref}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
