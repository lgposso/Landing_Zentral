import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { LineMark } from "@/components/ui/LineMark";
import { products, productHref } from "@/config/products";
import { lineStyles, type LineId } from "@/lib/lines";
import { cn } from "@/lib/utils";

/* --------------------------------------------------------------------------
 * Zentral Core: el mapa de la red.
 *
 * El isotipo es el intercambiador y cada producto una línea que sale de él
 * hasta su terminal. El trazo es SVG decorativo (aria-hidden); lo que se lee
 * y se pulsa son los rótulos HTML de cada terminal, que son enlaces reales a
 * /productos/[slug]. Así el texto queda nítido a cualquier escala y el mapa
 * funciona con teclado y lector de pantalla.
 *
 * Hay dos geometrías del mismo mapa: una apaisada desde `md` y otra vertical
 * para el celular, donde las líneas bajan en haz y se abren una a una. Solo
 * una está en el árbol de accesibilidad a la vez (la otra va con display:none).
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
  routes: RouteGeometry[];
}

/* 840×560. Las cuatro líneas salen en diagonal a 45° y corren en horizontal
   hasta los bordes; la línea a la medida baja, punteada: está por construir. */
const WIDE: Geometry = {
  width: 840,
  height: 560,
  hub: { cx: 420, cy: 260, r: 46, logo: 58 },
  routes: [
    {
      line: "loyalty",
      d: "M 387 227 L 310 150 L 40 150",
      terminus: [40, 150],
      ticks: [
        { x: 236, y: 150, dir: "down" },
        { x: 138, y: 150, dir: "down" },
      ],
      label: { x: 40, y: 124, placement: "above-left" },
    },
    {
      line: "rips",
      d: "M 453 227 L 530 150 L 800 150",
      terminus: [800, 150],
      ticks: [
        { x: 604, y: 150, dir: "down" },
        { x: 702, y: 150, dir: "down" },
      ],
      label: { x: 800, y: 124, placement: "above-right" },
    },
    {
      line: "sports",
      d: "M 387 293 L 310 370 L 40 370",
      terminus: [40, 370],
      ticks: [
        { x: 236, y: 370, dir: "up" },
        { x: 138, y: 370, dir: "up" },
      ],
      label: { x: 40, y: 396, placement: "below-left" },
    },
    {
      line: "control",
      d: "M 453 293 L 530 370 L 800 370",
      terminus: [800, 370],
      ticks: [
        { x: 604, y: 370, dir: "up" },
        { x: 702, y: 370, dir: "up" },
      ],
      label: { x: 800, y: 396, placement: "below-right" },
    },
    {
      line: "custom",
      d: "M 420 306 L 420 470",
      terminus: [420, 470],
      label: { x: 420, y: 494, placement: "below-center" },
    },
  ],
};

/* 360×520. Las líneas bajan en haz desde el intercambiador y se abren en
   orden: la de más a la derecha sale primero, así ninguna cruza a otra. */
const TALL: Geometry = {
  width: 360,
  height: 520,
  hub: { cx: 64, cy: 52, r: 40, logo: 50 },
  routes: [
    {
      line: "loyalty",
      d: "M 84 52 L 84 126 L 108 150 L 146 150",
      terminus: [146, 150],
      label: { x: 164, y: 150, placement: "side" },
    },
    {
      line: "rips",
      d: "M 74 52 L 74 212 L 98 236 L 146 236",
      terminus: [146, 236],
      label: { x: 164, y: 236, placement: "side" },
    },
    {
      line: "sports",
      d: "M 64 52 L 64 298 L 88 322 L 146 322",
      terminus: [146, 322],
      label: { x: 164, y: 322, placement: "side" },
    },
    {
      line: "control",
      d: "M 54 52 L 54 384 L 78 408 L 146 408",
      terminus: [146, 408],
      label: { x: 164, y: 408, placement: "side" },
    },
    {
      line: "custom",
      d: "M 44 52 L 44 470 L 68 494 L 146 494",
      terminus: [146, 494],
      label: { x: 164, y: 494, placement: "side" },
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
  href: "/#a-la-medida",
  name: "Tu proyecto",
  sector: "Desarrollo a la medida",
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
 *  asoma hacia el lado contrario al rótulo. */
function Tick({ x, y, dir }: { x: number; y: number; dir: "up" | "down" }) {
  const length = 20;
  return (
    <rect
      x={x - 2.5}
      y={dir === "down" ? y - 5 : y - length + 5}
      width={5}
      height={length}
      rx={2.5}
      fill="var(--color-background)"
    />
  );
}

function MapLayer({ geometry, className }: { geometry: Geometry; className?: string }) {
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
          const dashed = route.line === "custom";
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
                strokeWidth={compact ? 7 : 12}
                // Remate recto en la punteada: el redondo taparía los huecos.
                strokeLinecap={dashed ? "butt" : "round"}
                strokeLinejoin="round"
                {...(dashed ? { "data-dashed": "" } : {})}
                // La punteada se mide en unidades de `pathLength`: la vertical
                // del celular es tres veces más larga, así que sus tramos van
                // más cortos para que el ritmo se vea igual.
                style={dashed ? { strokeDasharray: compact ? "2.2 1.8" : "6 5" } : undefined}
              />

              <path
                className="route-bold"
                d={route.d}
                fill="none"
                stroke={color}
                strokeWidth={compact ? 11 : 17}
                strokeLinecap={dashed ? "butt" : "round"}
                strokeLinejoin="round"
                pathLength={100}
                style={dashed ? { strokeDasharray: compact ? "2.2 1.8" : "6 5" } : undefined}
              />

              <g className="route-stop">
                {route.ticks?.map((tick) => (
                  <Tick key={`${tick.x}-${tick.y}`} {...tick} />
                ))}
                <circle
                  cx={route.terminus[0]}
                  cy={route.terminus[1]}
                  r={compact ? 8 : 12}
                  fill="var(--color-background)"
                  stroke={color}
                  strokeWidth={compact ? 5 : 8}
                />
              </g>

              {!dashed && (
                <path
                  className="route-train"
                  d={route.d}
                  pathLength={100}
                  fill="none"
                  stroke="var(--color-foreground)"
                  strokeWidth={compact ? 3 : 4.5}
                  strokeLinecap="round"
                />
              )}
              <path
                className="route-express"
                d={route.d}
                pathLength={100}
                fill="none"
                stroke="var(--color-foreground)"
                strokeWidth={compact ? 3 : 5.5}
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
                  <LineMark line={route.line} size="sm" />
                  <span className="text-[15px] font-extrabold leading-tight text-foreground lg:text-[18px]">
                    {stop.name}
                  </span>
                  <ArrowUpRight
                    className="size-4 text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                </span>
                <span className="mt-0.5 text-[13px] leading-snug text-muted lg:text-[15px]">
                  {stop.sector}
                </span>
                <span className="text-[13px] font-bold leading-snug text-foreground lg:text-[14px]">
                  {stop.fact}
                </span>
              </Link>
          );
        })}
    </div>
  );
}

interface NetworkMapProps {
  className?: string;
}

export function NetworkMap({ className }: NetworkMapProps) {
  return (
    <nav aria-label="Productos Zentral" className={cn("select-none", className)}>
      <MapLayer geometry={TALL} className="mx-auto max-w-[420px] md:hidden" />
      <MapLayer geometry={WIDE} className="hidden md:block" />
    </nav>
  );
}
