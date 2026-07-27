import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Contenedor maestro del sitio.
 *
 * Grid del §7 del spec: ancho máximo 1280px con padding lateral de 24px en
 * móvil, 48px en tablet y 96px en escritorio.
 *
 * Estos dos valores —`max-w` y el padding— gobiernan el ancho de todo el
 * sitio: cambiarlos aquí lo cambia en todas las secciones.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-6 md:px-12 lg:px-24",
        className,
      )}
    >
      {children}
    </div>
  );
}
