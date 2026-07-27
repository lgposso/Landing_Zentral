import { cn } from "@/lib/utils";
import type { SectionCopy } from "@/types";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  copy: SectionCopy;
  className?: string;
}

/**
 * Encabezado de sección a dos tonos: la primera línea en blanco y la segunda
 * en azul.
 *
 * El azul de acento es `primary-hover` (#3B82F6), no `primary` (#2563EB):
 * sobre el fondo negro el primario da 3.2:1 de contraste y el hover 4.8:1, así
 * que sólo este último cumple AA con holgura para texto.
 */
export function SectionHeading({ copy, className }: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <h2 className={cn("text-h2")}>
        <span className="block text-foreground">{copy.title}</span>
        <span className="block text-primary-hover">{copy.titleAccent}</span>
      </h2>

      <p className="mt-7 max-w-sm text-small text-muted">{copy.subtitle}</p>
    </Reveal>
  );
}
