import type { ReactNode } from "react";
import type { SectionCopy } from "@/types";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

interface SplitSectionProps {
  id: string;
  copy: SectionCopy;
  children: ReactNode;
}

/**
 * Forma estándar de sección: el título ancla la columna izquierda y el
 * contenido ocupa la rejilla de la derecha.
 *
 * Repetirla en todas las secciones es intencional — da al sitio una cadencia
 * reconocible al hacer scroll, en lugar de un layout distinto cada vez.
 */
export function SplitSection({ id, copy, children }: SplitSectionProps) {
  return (
    <Section id={id}>
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        {/* El título se queda fijo mientras la rejilla pasa: en las secciones
            de seis celdas eso convierte el hueco de la columna izquierda en
            algo intencional en lugar de un vacío. */}
        <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
          <SectionHeading copy={copy} />
        </div>

        <div className="lg:col-span-8">{children}</div>
      </div>
    </Section>
  );
}
