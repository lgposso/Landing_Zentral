import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { LineMark } from "@/components/ui/LineMark";
import { products, productHref } from "@/config/products";
import { customDevHref } from "@/config/site";
import { lineStyles, type LineId } from "@/lib/lines";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
 * Zentral Core: el mapa de la red.
 *
 * El isotipo es el intercambiador. De él sale la troncal, el desarrollo a la
 * medida, que es lo principal de Zentral: azul, sólida y bastante más gruesa
 * que las demás, con el único rótulo completo. Los productos propios son
 * ramales delgados que salen del mismo intercambiador y solo dicen su nombre.
 * El trazo es SVG decorativo (aria-hidden); lo que se lee y se pulsa son los
 * rótulos HTML de cada terminal, que son enlaces reales. Así el texto queda
 * nítido a cualquier escala y el mapa funciona con teclado y lector de
 * pantalla.
 *
 * Hay dos geometrías del mismo mapa: una apaisada desde `md` y otra vertical
 * para el celular, donde la troncal baja como espina y los ramales se abren a
 * la derecha. Solo una está en el árbol de accesibilidad a la vez (la otra va
 * con display:none). Cada una ordena sus rutas como se leen: en la apaisada
 * la troncal va primero; en la vertical, de arriba abajo.
 * ----------------------------------------------------------------------- */

type LabelPlacement =
  | "above-left"
  | "above-right"
  | "below-left"
  | "below-right"
  | "below-center"
  | "side";

interface RouteGeometry {
  line: LineId;
  /** Trazado desde el intercambiador hacia la terminal. */
  d: string;
  terminus: [number, number];
  /** Paradas intermedias (marcas perpendiculares). */
  ticks?: { x: number; y: number; dir: "up" | "down" }[];
  label: { x: number; y: number; placement: LabelPlacement };
}

interface Geometry {
  width: number;
  height: number;
  hub: { cx: number; cy: number; r: number; logo: number };
  /** Grosor de los ramales; la troncal va más gruesa (ver `TRUNK_SCALE`). */
  stroke: number;
  routes: RouteGeometry[];
}

/** Cuánto más gruesa es la troncal que un ramal: los productos son
 *  secundarios y el trazo lo dice antes que cualquier texto. */
const TRUNK_SCALE = 2.25;

/* 840×560. El intercambiador a la izquierda; la troncal corre recta hasta el
   borde derecho y los dos ramales salen a 45° y corren en horizontal, un
   tramo más cortos que ella. */
const WIDE: Geometry = {
  width: 840,
  height: 560,
  hub: { cx: 118, cy: 280, r: 46, logo: 58 },
  stroke: 8,
  routes: [
    {
      line: "custom",
      d: "M 164 280 L 800 280",
      terminus: [800, 280],
      ticks: [
        { x: 380, y: 280, dir: "up" },
        { x: 560, y: 280, dir: "up" },
      ],
      label: { x: 800, y: 312, placement: "below-right" },
    },
    {
      line: "rips",
      d: "M 151 247 L 288 110 L 690 110",
      terminus: [690, 110],
      ticks: [
        { x: 420, y: 110, dir: "down" },
        { x: 550, y: 110, dir: "down" },
      ],
      label: { x: 690, y: 96, placement: "above-right" },
    },
    {
      line: "loyalty",
      d: "M 151 313 L 288 450 L 690 450",
      terminus: [690, 450],
      ticks: [
        { x: 420, y: 450, dir: "up" },
        { x: 550, y: 450, dir: "up" },
      ],
      label: { x: 690, y: 466, placement: "below-right" },
    },
  ],
};

/* 360×420. Las líneas bajan en haz desde el intercambiador y se abren en
   orden: la de más a la derecha sale primero, así ninguna cruza a otra. La
   troncal va por fuera, a la izquierda, y es la que llega más lejos. */
const TALL: Geometry = {
  width: 360,
  height: 420,
  hub: { cx: 64, cy: 52, r: 40, logo: 50 },
  stroke: 5,
  routes: [
    {
      line: "rips",
      d: "M 88 52 L 88 126 L 112 150 L 146 150",
      terminus: [146, 150],
      label: { x: 164, y: 150, placement: "side" },
    },
    {
      line: "loyalty",
      d: "M 75 52 L 75 238 L 99 262 L 146 262",
      terminus: [146, 262],
      label: { x: 164, y: 262, placement: "side" },
    },
    {
      line: "custom",
      d: "M 58 52 L 58 350 L 82 374 L 146 374",
      terminus: [146, 374],
      label: { x: 164, y: 374, placement: "side" },
    },
  ],
};

/* -------------------------------------------------------------------------- */

interface Stop {
  line: LineId;
  href: string;
  name: string;
  sector: string;
  fact: string;
}

const customStop: Stop = {
  line: "custom",
  href: customDevHref,
  name: "A la medida",
  sector: "Software para tu operación",
  fact: "El código es tuyo",
};

const stops: Record<LineId, Stop> = {
  ...(Object.fromEntries(
    products.map((product) => [
      product.slug,
      {
        line: product.slug,
        href: productHref(product.slug),
        name: product.name,
        sector: product.sector,
        fact: product.coreFact,
      },
    ]),
  ) as Record<Exclude<LineId, "custom">, Stop>),
  custom: customStop,
};

const placementClasses: Record<LabelPlacement, string> = {
  "above-left": "-translate-y-full text-left",
  "above-right": "-translate-x-full -translate-y-full text-right items-end",
  "below-left": "text-left",
  "below-right": "-translate-x-full text-right items-end",
  "below-center": "-translate-x-1/2 text-center items-center",
  side: "-translate-y-1/2 text-left",
};

const pct = (value: number, total: number) => `${((value / total) * 100).toFixed(3)}%`;

/** Parada intermedia: una muesca del color del fondo que corta la línea y
 *  asoma hacia el lado contrario al rótulo. Se mide con el grosor del trazo
 *  para que corte igual la troncal que un ramal. */
function Tick({
  x,
  y,
  dir,
  stroke,
}: {
  x: number;
  y: number;
  dir: "up" | "down";
  stroke: number;
}) {
  const length = stroke + 8;
  const inset = stroke / 2 - 1;
  return (
    <rect
      x={x - 2.5}
      y={dir === "down" ? y - inset : y + inset - length}
      width={5}
      height={length}
      rx={2.5}
      fill="var(--color-background)"
    />
  );
}

function MapLayer({
  geometry,
  productDetail,
  className,
}: {
  geometry: Geometry;
  productDetail: boolean;
  className?: string;
}) {
  const { width, height, hub } = geometry;
  const compact = geometry === TALL;

  return (
    <div
      className={cn("network relative w-full", className)}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="absolute inset-0 size-full overflow-visible"
        aria-hidden="true"
      >
        {geometry.routes.map((route, index) => {
          const color = lineStyles[route.line].color;
          const trunk = route.line === "custom";
          const stroke = trunk ? geometry.stroke * TRUNK_SCALE : geometry.stroke;
          const style = { "--i": index } as CSSProperties;

          return (
            <g
              key={route.line}
              className="network-route"
              data-route={route.line}
              style={style}
            >
              <path
                className="route-line"
                d={route.d}
                pathLength={100}
                fill="none"
                stroke={color}
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                className="route-bold"
                d={route.d}
                fill="none"
                stroke={color}
                strokeWidth={stroke * 1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={100}
              />

              <g className="route-stop">
                {route.ticks?.map((tick) => (
                  <Tick key={`${tick.x}-${tick.y}`} {...tick} stroke={stroke} />
                ))}
                <circle
                  cx={route.terminus[0]}
                  cy={route.terminus[1]}
                  r={stroke}
                  fill="var(--color-background)"
                  stroke={color}
                  strokeWidth={stroke * (2 / 3)}
                />
              </g>

              <path
                className="route-train"
                d={route.d}
                pathLength={100}
                fill="none"
                stroke="var(--color-foreground)"
                strokeWidth={stroke * 0.38}
                strokeLinecap="round"
              />
              <path
                className="route-express"
                d={route.d}
                pathLength={100}
                fill="none"
                stroke="var(--color-foreground)"
                strokeWidth={stroke * 0.46}
                strokeLinecap="round"
              />
            </g>
          );
        })}

        {/* Intercambiador: el isotipo dentro de un anillo claro. */}
        <g
          className="network-hub"
          style={{ transformOrigin: `${hub.cx}px ${hub.cy}px` }}
        >
          <circle
            cx={hub.cx}
            cy={hub.cy}
            r={hub.r}
            fill="var(--color-background)"
            stroke="var(--color-foreground)"
            strokeWidth={compact ? 6 : 9}
          />
          <image
            href="/isotipo-zentral2.svg"
            x={hub.cx - hub.logo / 2}
            y={hub.cy - (hub.logo * 550) / 600 / 2}
            width={hub.logo}
            height={(hub.logo * 550) / 600}
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
      </svg>

      {geometry.routes.map((route, index) => {
          const stop = stops[route.line];
          // Fuera de /productos, los ramales solo dicen su nombre: el rótulo
          // completo es de la troncal.
          const full = route.line === "custom" || productDetail;
          const style = {
            left: pct(route.label.x, width),
            top: pct(route.label.y, height),
            "--i": index,
          } as CSSProperties;

          return (
              <Link
                key={route.line}
                href={stop.href}
                data-line={route.line}
                style={style}
                className={cn(
                  // w-max: sin él, un rótulo pegado al borde derecho se encoge
                  // contra ese borde y parte cada palabra en una línea.
                  "network-label group absolute flex w-max max-w-[17rem] flex-col rounded-button p-2",
                  "outline-offset-0 transition-opacity",
                  placementClasses[route.label.placement],
                )}
              >
                <span
                  className={cn(
                    "flex items-center gap-2",
                    route.label.placement.endsWith("right") && "flex-row-reverse",
                  )}
                >
                  <LineMark line={route.line} size={full ? "sm" : "xs"} />
                  <span
                    className={cn(
                      "leading-tight",
                      full
                        ? "text-[15px] font-extrabold text-foreground lg:text-[18px]"
                        : "text-[14px] font-bold text-muted transition-colors duration-200 group-hover:text-foreground group-focus-visible:text-foreground lg:text-[16px]",
                    )}
                  >
                    {stop.name}
                  </span>
                  <ArrowUpRight
                    className="size-4 text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </span>
                {full && (
                  <>
                    <span className="mt-0.5 text-[13px] leading-snug text-muted lg:text-[15px]">
                      {stop.sector}
                    </span>
                    <span className="text-[13px] font-bold leading-snug text-foreground lg:text-[14px]">
                      {stop.fact}
                    </span>
                  </>
                )}
              </Link>
          );
        })}
    </div>
  );
}

interface NetworkMapProps {
  /** true en /productos: ahí los ramales llevan su rótulo completo (sector y
   *  dato), porque la página es de ellos. */
  productDetail?: boolean;
  className?: string;
}

export function NetworkMap({ productDetail = false, className }: NetworkMapProps) {
  return (
    <nav aria-label="Líneas de Zentral" className={cn("select-none", className)}>
      <MapLayer
        geometry={TALL}
        productDetail={productDetail}
        className="mx-auto max-w-[420px] md:hidden"
      />
      <MapLayer geometry={WIDE} productDetail={productDetail} className="hidden md:block" />
    </nav>
  );
}
