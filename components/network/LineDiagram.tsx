import { lineStyles, type LineId } from "@/lib/lines";
import { cn } from "@/lib/utils";

interface DiagramStation {
  title: string;
  description?: string;
}

interface LineDiagramProps {
  line: LineId;
  /** Estaciones en servicio: lo que el producto hace hoy. */
  stations: DiagramStation[];
  /** Tramo en construcción: lo que todavía no hace. */
  pending?: { title: string; stations: string[] };
  className?: string;
}

/**
 * Diagrama de línea vertical, como el que va dentro del vagón: las estaciones
 * en servicio sobre trazo sólido y, al final, el tramo en obra, punteado, con
 * lo que todavía no existe. Decir los límites en el mismo mapa que las
 * capacidades es la forma honesta de mostrarlos.
 */
export function LineDiagram({ line, stations, pending, className }: LineDiagramProps) {
  const style = lineStyles[line];

  return (
    <div className={cn("relative", className)}>
      <ol className="relative">
        {stations.map((station, index) => {
          const last = index === stations.length - 1 && !pending;
          return (
            <li key={station.title} className="relative pb-10 pl-14 last:pb-0">
              {/* Tramo sólido hasta la siguiente estación. */}
              {!last && (
                <span
                  aria-hidden="true"
                  className={cn("absolute bottom-0 left-[11px] top-[14px] w-2 rounded-full", style.bg)}
                />
              )}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-0 top-0 block size-[30px] rounded-full border-[6px] bg-background",
                  style.border,
                )}
              />
              <h3 className="pt-[3px] text-h3 text-foreground">{station.title}</h3>
              {station.description && (
                <p className="mt-2 max-w-[56ch] text-body text-muted">
                  {station.description}
                </p>
              )}
            </li>
          );
        })}
      </ol>

      {pending && pending.stations.length > 0 && (
        <div className="relative pl-14 pt-2">
          {/* Tramo en construcción: trazos con huecos, del color de la línea. */}
          <span
            aria-hidden="true"
            className="absolute left-[11px] top-0 h-full w-2"
            style={{
              backgroundImage: `repeating-linear-gradient(180deg, ${style.color} 0 12px, transparent 12px 22px)`,
            }}
          />
          <h3 className="pt-4 text-[1.25rem] font-extrabold leading-snug text-foreground">
            {pending.title}
          </h3>
          <ul className="mt-5 space-y-5 pb-2">
            {pending.stations.map((item) => (
              <li key={item} className="relative">
                {/* Estación por construir: anillo sólido y hueco, con el fondo
                    que tapa la punteada debajo. */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -left-[50px] top-0 z-10 block size-[18px] rounded-full border-4 bg-background",
                    style.border,
                  )}
                />
                <p className="max-w-[56ch] text-small text-muted">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
