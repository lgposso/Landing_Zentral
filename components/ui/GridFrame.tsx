import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { RevealItem, Stagger } from "./Reveal";

interface GridFrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * Rejilla enmarcada por hilos de 1px en el azul de marca.
 *
 * El truco es `gap-px` con el color de la línea puesto como fondo del
 * contenedor: los huecos de 1px entre celdas dejan ver ese fondo y componen
 * los divisores, sin tener que cuadrar bordes celda por celda ni lidiar con
 * las líneas dobles del borde compartido.
 *
 * Las celdas son negras y sin radio: en este sistema la separación la marca
 * la línea, no un relleno ni una sombra.
 */
export function GridFrame({ children, className }: GridFrameProps) {
  return (
    <Stagger
      className={cn(
        "grid gap-px border border-primary/25 bg-primary/25 sm:grid-cols-2",
        className,
      )}
    >
      {children}
    </Stagger>
  );
}

interface GridCellProps {
  children: ReactNode;
  className?: string;
}

/**
 * Celda de `GridFrame` con el contenido siempre a la vista.
 *
 * Para las celdas que ocultan su detalle hasta que se interactúa con ellas,
 * ver `ExpandableCell`. Ambas comparten fondo, padding y realce al pasar el
 * cursor, de modo que conviven en la misma página sin desentonar.
 */
export function GridCell({ children, className }: GridCellProps) {
  return (
    <RevealItem
      className={cn(
        // Con el contenedor de 1280px del spec, cada celda mide ~360px:
        // un padding mayor dejaría el texto en una columna demasiado estrecha.
        "zentral-spotlight flex flex-col bg-background p-8",
        "transition-colors duration-300 lg:p-9 lg:hover:bg-primary/[0.06]",
        className,
      )}
    >
      {children}
    </RevealItem>
  );
}
