import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpecimenProps {
  children: ReactNode;
  /** Rótulo obligatorio: qué es y que los datos son de ejemplo. */
  caption: string;
  className?: string;
}

/**
 * Muestra de producto con datos de ejemplo. Es una representación del
 * producto funcionando, no una captura: el rótulo lo dice siempre, debajo y
 * fuera de la pieza, para que nadie confunda los datos con clientes reales.
 * El contenido va oculto a lectores de pantalla y el rótulo lo describe.
 */
export function Specimen({ children, caption, className }: SpecimenProps) {
  return (
    <figure className={cn("w-full", className)}>
      <div aria-hidden="true" className="select-none">
        {children}
      </div>
      <figcaption className="mt-4 text-[13px] text-muted">{caption}</figcaption>
    </figure>
  );
}
