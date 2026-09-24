import type { ReactNode } from "react";

import { lineStyles, type LineId } from "@/lib/lines";
import { cn } from "@/lib/utils";

export interface Station {
  title: string;
  description?: string;
  /** Dato corto bajo la estación (p. ej. el entregable de una etapa). */
  note?: string;
}

interface StripMapProps {
  line: LineId;
  stations: Station[];
  /**
   * `draw`: la línea se traza al entrar en pantalla.
   * `build`: la línea está punteada (en construcción) y se vuelve sólida al
   * recorrerla. Es la línea a la medida.
   */
  mode?: "draw" | "build";
  /** Tamaño del nombre de cada estación. */
  size?: "sm" | "lg";
  /** Nivel de encabezado de los nombres de estación (h3 dentro de secciones). */
  as?: "h3" | "h4" | "p";
  className?: string;
  /** Contenido al final de la línea (p. ej. el enlace a la página). */
  terminus?: ReactNode;
}

/**
 * Mapa de franja: una línea recta con sus estaciones, como el esquema que va
 * sobre las puertas del vagón. Horizontal desde `md`, vertical en el celular.
 *
 * El trazo es decorativo; la lista ordenada lleva el contenido y el orden.
 */
export function StripMap({
  line,
  stations,
  mode = "draw",
  size = "sm",
  as: Heading = "p",
  className,
  terminus,
}: StripMapProps) {
  const style = lineStyles[line];
  const building = mode === "build";

  const columns =
    stations.length === 3
      ? "md:grid-cols-3"
      : stations.length === 5
        ? "md:grid-cols-5"
        : "md:grid-cols-4";

  // Línea en construcción: trazos del azul de Zentral con huecos.
  const dashedTrack = building
    ? {
        backgroundImage: `repeating-linear-gradient(90deg, ${style.color} 0 14px, transparent 14px 24px)`,
      }
    : undefined;
  const dashedTrackY = building
    ? {
        backgroundImage: `repeating-linear-gradient(180deg, ${style.color} 0 14px, transparent 14px 24px)`,
      }
    : undefined;

  return (
    <div className={cn("relative", className)}>
      {/* Trazo horizontal (md+) */}
      <div
        aria-hidden="true"
        className="strip-track absolute left-[14px] right-0 top-[11px] hidden h-2 overflow-hidden rounded-full md:block"
      >
        {building && (
          <div className="absolute inset-0 rounded-full" style={dashedTrack} />
        )}
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            style.bg,
            building ? "strip-build" : "strip-draw",
          )}
        />
        {/* Tren: recorre la franja cuando se señala la fila (ver globals.css). */}
        {!building && (
          <span className="strip-train">
            <span />
          </span>
        )}
      </div>

      {/* Trazo vertical (celular) */}
      <div
        aria-hidden="true"
        className="strip-track absolute bottom-0 left-[11px] top-[14px] w-2 md:hidden"
      >
        {building && (
          <div className="absolute inset-0 rounded-full" style={dashedTrackY} />
        )}
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            style.bg,
            building ? "strip-build-y" : "strip-draw-y",
          )}
        />
      </div>

      <ol
        className={cn(
          "relative grid gap-8 pl-12 md:gap-6 md:pl-0",
          columns,
          terminus ? "pb-2" : undefined,
        )}
      >
        {stations.map((station) => (
          <li key={station.title} className="relative md:pr-4">
            <span
              aria-hidden="true"
              className={cn(
                "absolute -left-12 top-0 block size-[30px] rounded-full border-[6px] bg-background md:static",
                style.border,
              )}
            />
            <Heading
              className={cn(
                "font-extrabold leading-tight text-foreground md:mt-5",
                size === "lg" ? "text-h3" : "text-[1.0625rem]",
                "pt-[3px] md:pt-0",
              )}
            >
              {station.title}
            </Heading>
            {station.description && (
              <p className="mt-2 max-w-[42ch] text-small text-muted">
                {station.description}
              </p>
            )}
            {station.note && (
              <p className="mt-3 text-[14px] font-bold text-foreground">
                {station.note}
              </p>
            )}
          </li>
        ))}
      </ol>

      {terminus && <div className="mt-8 pl-12 md:pl-0">{terminus}</div>}
    </div>
  );
}
