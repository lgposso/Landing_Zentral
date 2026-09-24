import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceConnections, servicesCopy } from "@/config/content";

/**
 * Los servicios de apoyo como el tablero de conexiones de una estación:
 * ramales en gris que salen de la red principal. Compactos, pero cada uno
 * lleva a su página completa en /servicios.
 */
export function ServicesStrip() {
  return (
    <Section id="servicios" className="border-t border-border">
      <SectionHeading copy={servicesCopy} id="servicios-title" />

      <ul className="mt-14 grid gap-x-10 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
        {serviceConnections.map((service) => (
          <li key={service.slug}>
            <Link
              href={`/servicios/${service.slug}`}
              className="group -mx-3 flex gap-4 rounded-card px-3 py-5 transition-colors duration-200 hover:bg-surface"
            >
              {/* Conexión: el anillo gris de un transbordo. */}
              <span
                aria-hidden="true"
                className="mt-1 block size-5 shrink-0 rounded-full border-[5px] border-line-neutral bg-background"
              />
              <span>
                <span className="flex items-center gap-2 text-[1.0625rem] font-extrabold leading-tight text-foreground">
                  {service.title}
                  <ArrowRight
                    className="size-4 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-foreground motion-reduce:transform-none"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-1.5 block text-small text-muted">
                  {service.description}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
