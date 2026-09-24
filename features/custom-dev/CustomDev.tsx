import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { StripMap } from "@/components/network/StripMap";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  customDevCopy,
  customDevFacts,
  customDevKinds,
  processSteps,
  techGroups,
} from "@/config/content";

/**
 * Desarrollo a la medida: la línea que se construye para el cliente. Llega
 * punteada, como las líneas en obra de un mapa de metro, y se vuelve sólida a
 * medida que se recorre su proceso.
 */
export function CustomDev() {
  return (
    <Section id="a-la-medida" className="border-t border-border">
      <SectionHeading copy={customDevCopy} id="a-la-medida-title" />

      <StripMap
        line="custom"
        mode="build"
        size="lg"
        as="h3"
        className="mt-16 md:mt-20"
        stations={processSteps.map((step) => ({
          title: step.title,
          description: step.description,
          note: step.deliverable,
        }))}
      />

      <div className="mt-20 grid grid-cols-1 gap-12 md:mt-24 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <h3 className="text-h3 text-foreground">Qué construimos</h3>
          <dl className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {customDevKinds.map((kind) => (
              <div key={kind.title}>
                <dt className="text-[1.0625rem] font-extrabold leading-tight text-foreground">
                  {kind.title}
                </dt>
                <dd className="mt-2 text-small text-muted">{kind.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Panel informativo, como el de un andén: los datos duros juntos. */}
        <aside
          aria-label="Condiciones del desarrollo a la medida"
          className="rounded-card bg-surface p-7 md:p-9 lg:col-span-5"
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
            <div>
              <dt className="zentral-label text-muted">Con qué construimos</dt>
              <dd className="mt-2 space-y-1 text-[15px] font-semibold text-foreground">
                {techGroups.map((group) => (
                  <p key={group.category}>{group.items.join(", ")}</p>
                ))}
              </dd>
            </div>
          </dl>

          <Link
            href="/servicios/software-a-la-medida"
            className="group mt-8 inline-flex items-center gap-2 text-small font-bold text-link hover:underline"
          >
            Cómo trabajamos un desarrollo a la medida
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
              strokeWidth={2.25}
              aria-hidden="true"
            />
          </Link>
        </aside>
      </div>
    </Section>
  );
}
