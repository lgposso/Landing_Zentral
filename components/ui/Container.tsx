import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Contenedor maestro: 1280px de ancho máximo, 20px de margen en el celular,
 * 40px en tableta y 64px en escritorio. Cambiarlo aquí lo cambia en todo el
 * sitio.
 */
export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-5 md:px-10 lg:px-16",
        className,
      )}
    >
      {children}
    </div>
  );
}
