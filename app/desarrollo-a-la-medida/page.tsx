import type { Metadata } from "next";
import Link from "next/link";
import { Info } from "lucide-react";

import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { PrimaryCtaButton } from "@/components/cta/PrimaryCtaButton";
import { LineDiagram } from "@/components/network/LineDiagram";
import { StripMap } from "@/components/network/StripMap";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LineMark } from "@/components/ui/LineMark";
import {
  customDevFacts,
  customDevKinds,
  customDevPage,
  processSteps,
} from "@/config/content";
import { customDevHref } from "@/config/site";
import { OwnProducts } from "@/features/products/OwnProducts";
import { lineStyles } from "@/lib/lines";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: customDevPage.metaTitle },
  description: customDevPage.metaDescription,
  alternates: { canonical: customDevHref },
  openGraph: {
    title: customDevPage.metaTitle,
    description: customDevPage.metaDescription,
    url: customDevHref,
  },
};

const line = lineStyles.custom;

/**
 * La troncal: el desarrollo a la medida, lo principal de Zentral. Sigue la
 * plantilla de las páginas de producto (letrero de andén, franja del
 * recorrido, diagrama de línea, terminal), pero en lugar de un producto
 * funcionando, su panel de arriba reúne las condiciones del proyecto. Los
 * productos propios aparecen al final como prueba de cómo se construye.
 */
export default function DesarrolloALaMedidaPage() {
  return (
    <>
      <BreadcrumbSchema
        segments={[{ name: "Desarrollo a la medida", path: customDevHref }]}
      />

      {/* Cabecera ---------------------------------------------------------- */}
      <section className="pb-16 pt-28 md:pb-24 md:pt-32">
        <Container>
          <nav aria-label="Ruta de navegación" className="text-sm text-muted">
            <Link href="/" className="hover:text-foreground hover:underline">
              Inicio
            </Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-foreground" aria-current="page">
              Desarrollo a la medida
            </span>
          </nav>

          <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 lg:col-span-7">
              {/* Letrero de andén de la troncal. */}
              <div className="inline-flex max-w-full items-center gap-4 rounded-card border-[1.5px] border-border bg-surface py-4 pl-5 pr-6 md:gap-5 md:pr-8">
                <LineMark line="custom" size="xl" />
                <div className="min-w-0">
                  <h1 className="text-h1 text-foreground">
                    {customDevPage.heroTitle}
                  </h1>
                  <p className="mt-1 text-small font-semibold text-muted">
                    Para empresas en Colombia
                  </p>
                </div>
              </div>

              <p className="mt-10 max-w-[26ch] text-[clamp(1.5rem,1.15rem+1.2vw,2.125rem)] font-bold leading-[1.15] tracking-[-0.02em] text-foreground">
                El proceso que distingue a tu empresa, en software que es tuyo.
              </p>
              <p className="mt-6 max-w-[52ch] text-body text-muted">
                {customDevPage.heroSubtitle}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <PrimaryCtaButton location="a-la-medida-top" size="lg" />
                <Button href="#como-trabajamos" variant="secondary" size="lg">
                  Cómo trabajamos
                </Button>
              </div>
            </div>

            {/* Panel informativo, como el de un andén: las condiciones. */}
            <aside
              aria-label="Condiciones del desarrollo a la medida"
              className="min-w-0 self-start rounded-card bg-surface p-7 md:p-9 lg:col-span-5 lg:mt-4"
            >
              <dl className="space-y-6">
                {customDevFacts.map((fact) => (
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

      {/* Cómo trabajamos: la línea se construye por tramos ------------------ */}
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
            {customDevPage.howWeImplementIt.map((paragraph) => (
              <p key={paragraph} className="text-small text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Qué es y qué construimos ------------------------------------------ */}
      <section
        aria-labelledby="que-es"
        className="border-t border-border py-20 md:py-28"
      >
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 id="que-es" className="max-w-[20ch] text-h2 text-foreground">
              Para lo que no encaja en ninguna herramienta.
            </h2>
            <div className="mt-8 max-w-[62ch] space-y-5">
              {customDevPage.whatItIs.map((paragraph) => (
                <p key={paragraph} className="text-body text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-3">
            <h2 className="text-h3 text-foreground">Qué construimos</h2>
            <dl className="mt-6 space-y-7">
              {customDevKinds.map((kind) => (
                <div key={kind.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className={cn("mt-1 block size-5 shrink-0 rounded-full border-[5px] bg-background", line.border)}
                  />
                  <div>
                    <dt className="text-[1.0625rem] font-extrabold leading-tight text-foreground">
                      {kind.title}
                    </dt>
                    <dd className="mt-1.5 text-small text-muted">
                      {kind.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Para quién y qué te entregamos ------------------------------------ */}
      <section
        aria-labelledby="para-quien"
        className="border-t border-border py-20 md:py-28"
      >
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <h2 id="para-quien" className="text-h2 text-foreground">
              Para quién es
            </h2>
            <div className="mt-8 max-w-[62ch] space-y-5">
              {customDevPage.whoItsFor.map((paragraph) => (
                <p key={paragraph} className="text-body text-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="mt-20 text-h2 text-foreground">Qué te entregamos</h2>
            <LineDiagram
              line="custom"
              className="mt-12"
              stations={customDevPage.deliverables}
            />
          </div>

          <aside
            aria-labelledby="tecnologia"
            className="min-w-0 self-start rounded-card bg-surface p-7 md:p-9 lg:sticky lg:top-28 lg:col-span-5"
          >
            <h2 id="tecnologia" className="text-h3 text-foreground">
              Con qué construimos
            </h2>
            <dl className="mt-6 space-y-6">
              {customDevPage.technologies.map((tech) => (
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

      {/* Plazo, inversión y un escenario típico ----------------------------- */}
      <section
        aria-labelledby="plazo"
        className="border-t border-border py-20 md:py-28"
      >
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
            <div>
              <h2 id="plazo" className="text-h3 text-foreground">
                Plazo
              </h2>
              <p className="mt-4 max-w-[56ch] text-body text-muted">
                {customDevPage.timeline}
              </p>
            </div>
            <div>
              <h2 className="text-h3 text-foreground">Inversión</h2>
              <p className="mt-4 max-w-[56ch] text-body text-muted">
                {customDevPage.investmentRange}
              </p>
            </div>
          </div>

          <div className="mt-20 max-w-[68ch]">
            <h2 className="text-h2 text-foreground">Así se ve aplicado</h2>
            {/* Aviso de servicio: el escenario es ilustrativo, no un cliente. */}
            <div className="mt-8 flex gap-3 rounded-card border-[1.5px] border-border px-5 py-4">
              <Info
                className="mt-0.5 size-5 shrink-0 text-foreground"
                strokeWidth={2}
                aria-hidden="true"
              />
              <p className="text-small text-foreground">
                {customDevPage.appliedScenario.disclaimer}
              </p>
            </div>
            <div className="mt-8 space-y-5">
              {customDevPage.appliedScenario.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Productos propios: secundarios, como prueba ---------------------- */}
      <section
        aria-labelledby="productos-propios"
        className="border-t border-border py-16 md:py-20"
      >
        <Container>
          <OwnProducts headingId="productos-propios" />
        </Container>
      </section>

      {/* Terminal: la troncal llega hasta aquí ------------------------------ */}
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
                Cuéntanos qué necesitas construir.
              </h2>
              <p className="mt-5 max-w-[52ch] text-body text-muted">
                En una conversación de 30 minutos entendemos el problema y te
                decimos si conviene construirlo, cómo lo haríamos y qué no haríamos.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <PrimaryCtaButton location="a-la-medida-bottom" size="lg" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
