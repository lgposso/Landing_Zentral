"use client";

import { useId, useState, type ReactNode } from "react";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";
import { RevealItem } from "./Reveal";

interface ExpandableCellProps {
  /** Marca siempre visible sobre el título: un icono o un número. */
  marker: ReactNode;
  title: string;
  /** Detalle que se revela al pasar el cursor o al pulsar el botón. */
  children: ReactNode;
}

/**
 * Celda que sólo muestra marca y título hasta que se interactúa con ella.
 *
 * Escritorio: se despliega al pasar el cursor.
 * Móvil: se despliega con el botón `+` (no hay hover que valga).
 *
 * Detalles que importan:
 *
 * - El despliegue anima `grid-template-rows` de `0fr` a `1fr`. Es la única
 *   forma de animar hacia una altura automática sin medirla en JavaScript ni
 *   fijar un máximo a ojo.
 * - La celda tiene altura mínima y el contenido va anclado abajo
 *   (`justify-end`), así que al crecer el detalle empuja marca y título hacia
 *   arriba en vez de estirar la fila. Las celdas nunca cambian de tamaño.
 * - El detalle sigue en el DOM aunque esté colapsado: los lectores de pantalla
 *   lo leen siempre. Sólo está recortado visualmente.
 * - El botón existe en todos los tamaños, pero en escritorio es invisible
 *   hasta que recibe el cursor o el foco. Así quien navega con teclado también
 *   puede desplegar la celda, cosa que un hover puro no permitiría.
 */
export function ExpandableCell({ marker, title, children }: ExpandableCellProps) {
  const [open, setOpen] = useState(false);
  const detailId = useId();

  return (
    <RevealItem
      className={cn(
        "zentral-spotlight group relative flex flex-col justify-end",
        "bg-background p-8 transition-colors duration-300",
        "lg:min-h-[320px] lg:p-9 lg:hover:bg-primary/[0.06]",
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={detailId}
        className={cn(
          "absolute right-6 top-6 inline-flex size-9 items-center justify-center",
          "rounded-full border border-border text-primary-hover",
          "transition-[opacity,border-color] duration-300 hover:border-primary",
          "lg:opacity-0 lg:group-hover:opacity-100 lg:focus-visible:opacity-100",
        )}
      >
        <Plus
          className={cn(
            "size-4 transition-transform duration-300",
            open && "rotate-45 lg:rotate-0",
          )}
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <span className="sr-only">
          {open ? `Ocultar detalle de ${title}` : `Ver detalle de ${title}`}
        </span>
      </button>

      {marker}

      <h3 className="mt-7 text-2xl tracking-tight text-foreground">{title}</h3>

      <div
        id={detailId}
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          // En escritorio manda el cursor (o el foco), no el estado del botón.
          "lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] lg:group-focus-within:grid-rows-[1fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="pt-5">{children}</div>
        </div>
      </div>
    </RevealItem>
  );
}
