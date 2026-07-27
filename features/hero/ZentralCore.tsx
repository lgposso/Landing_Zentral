"use client";

import { useRef } from "react";

import { iconRegistry } from "@/components/ui/Icon";
import { coreNodes } from "@/config/content";
import { usePointerParallax } from "@/hooks/usePointerParallax";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/* --------------------------------------------------------------------------
 * Geometría del diagrama.
 *
 * Todo se calcula a partir de estas constantes: mover el centro o el radio
 * reacomoda nodos, cables y etiquetas de forma consistente.
 * ----------------------------------------------------------------------- */

const VIEW_W = 640;
const VIEW_H = 600;
const CX = VIEW_W / 2;
const CY = VIEW_H / 2;

/** Órbita elíptica: más ancha que alta, para aprovechar el formato. */
const ORBIT_RX = 235;
const ORBIT_RY = 215;

/** Semiancho del cubo central. */
const CUBE = 52;

const NODE_H = 40;
const NODE_PAD_X = 15;
const ICON_SIZE = 16;
const ICON_GAP = 9;
/** Ancho aproximado de un carácter de Inter a 13px, para dimensionar cápsulas. */
const CHAR_W = 7.1;

const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

interface NodeGeometry {
  label: string;
  icon: string;
  /** Centro de la cápsula. */
  x: number;
  y: number;
  width: number;
  /** Trazado curvo desde el borde del cubo hasta el borde de la cápsula. */
  path: string;
}

function buildNodes(): NodeGeometry[] {
  return coreNodes.map((node) => {
    const angle = toRadians(node.angle);
    const dirX = Math.cos(angle);
    const dirY = Math.sin(angle);

    const x = CX + ORBIT_RX * dirX;
    const y = CY + ORBIT_RY * dirY;

    const width =
      NODE_PAD_X * 2 + ICON_SIZE + ICON_GAP + node.label.length * CHAR_W;
    const halfW = width / 2;
    const halfH = NODE_H / 2;

    // Punto de partida: justo fuera del cubo, en la dirección del nodo.
    const startX = CX + dirX * (CUBE + 12);
    const startY = CY + dirY * (CUBE + 12);

    // Punto de llegada: intersección de la recta con la elipse que envuelve
    // la cápsula, para que el cable toque el borde y no el centro.
    const reach =
      1 /
      Math.sqrt((dirX / (halfW + 8)) ** 2 + (dirY / (halfH + 8)) ** 2);
    const endX = x - dirX * reach;
    const endY = y - dirY * reach;

    // Curva suave: el punto de control se desplaza perpendicular a la recta,
    // lo justo para que el conjunto no parezca una rueda de radios.
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;
    const bow = 16;
    const ctrlX = midX + -dirY * bow;
    const ctrlY = midY + dirX * bow;

    return {
      label: node.label,
      icon: node.icon,
      x,
      y,
      width,
      path: `M ${startX.toFixed(1)} ${startY.toFixed(1)} Q ${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${endX.toFixed(1)} ${endY.toFixed(1)}`,
    };
  });
}

const NODES = buildNodes();

/** Hexágono exterior del cubo isométrico. */
const CUBE_HEX = [
  [0, -CUBE],
  [CUBE * 0.866, -CUBE / 2],
  [CUBE * 0.866, CUBE / 2],
  [0, CUBE],
  [-CUBE * 0.866, CUBE / 2],
  [-CUBE * 0.866, -CUBE / 2],
]
  .map(([x, y]) => `${(CX + x).toFixed(1)},${(CY + y).toFixed(1)}`)
  .join(" ");

/* -------------------------------------------------------------------------- */

export function ZentralCore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointer = usePointerParallax(containerRef);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Parallax "muy sutil" (§11): el cubo se mueve menos que los nodos, lo que
  // genera una sensación de profundidad sin distraer.
  const depth = (strength: number) => ({
    transform: `translate(${(pointer.x * strength).toFixed(2)}px, ${(pointer.y * strength).toFixed(2)}px)`,
    transition: "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
  });

  return (
    <div ref={containerRef} className="relative w-full select-none">
      {/* Resplandor de fondo. Vive fuera del SVG para poder difuminarse sin
          coste de filtro SVG en cada repintado. */}
      <div
        className="zentral-glow pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 blur-2xl"
        aria-hidden="true"
      />

      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="relative w-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-labelledby="core-title core-desc"
      >
        <title id="core-title">Zentral Core</title>
        <desc id="core-desc">
          Diagrama de un núcleo central conectado mediante líneas de datos a
          siete sistemas empresariales: CRM, ERP, WhatsApp, OpenAI, API, correo
          y dashboard.
        </desc>

        <defs>
          <linearGradient id="core-cable" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#27272A" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="core-face" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.06" />
          </linearGradient>

          <filter id="core-blur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
        </defs>

        {/* --- Órbitas guía: apenas visibles, dan estructura al conjunto --- */}
        <g aria-hidden="true" style={depth(6)}>
          <ellipse
            cx={CX}
            cy={CY}
            rx={ORBIT_RX}
            ry={ORBIT_RY}
            fill="none"
            stroke="#27272A"
            strokeWidth="1"
            strokeDasharray="2 8"
            opacity="0.7"
          />
          <ellipse
            cx={CX}
            cy={CY}
            rx={ORBIT_RX * 0.58}
            ry={ORBIT_RY * 0.58}
            fill="none"
            stroke="#27272A"
            strokeWidth="1"
            opacity="0.45"
          />
        </g>

        {/* --- Cables --- */}
        <g aria-hidden="true" style={depth(9)}>
          {NODES.map((node, index) => (
            <path
              key={`cable-${node.label}`}
              id={`core-cable-${index}`}
              d={node.path}
              fill="none"
              stroke="url(#core-cable)"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          ))}

          {/* Pulsos de datos recorriendo los cables. Alternan de sentido para
              sugerir que la integración va en ambas direcciones. Se omiten por
              completo si el usuario pidió reducir la animación. */}
          {!prefersReducedMotion &&
            NODES.map((node, index) => {
              const inbound = index % 2 === 1;
              return (
                <circle key={`pulse-${node.label}`} r="2.6" fill="#3B82F6">
                  <animateMotion
                    dur={`${3.2 + (index % 3) * 0.55}s`}
                    begin={`${index * 0.42}s`}
                    repeatCount="indefinite"
                    calcMode="linear"
                    keyPoints={inbound ? "1;0" : "0;1"}
                    keyTimes="0;1"
                  >
                    <mpath href={`#core-cable-${index}`} />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.15;0.85;1"
                    dur={`${3.2 + (index % 3) * 0.55}s`}
                    begin={`${index * 0.42}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}
        </g>

        {/* --- Núcleo: cubo isométrico en wireframe --- */}
        <g aria-hidden="true" style={depth(4)}>
          <circle
            cx={CX}
            cy={CY}
            r={CUBE * 1.45}
            fill="#2563EB"
            opacity="0.22"
            filter="url(#core-blur)"
          >
            {!prefersReducedMotion && (
              <animate
                attributeName="opacity"
                values="0.16;0.34;0.16"
                dur="4.5s"
                repeatCount="indefinite"
              />
            )}
          </circle>

          <polygon
            points={CUBE_HEX}
            fill="url(#core-face)"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Las tres aristas internas que convierten el hexágono en un cubo. */}
          <g stroke="#3B82F6" strokeWidth="1.25" opacity="0.85">
            <line x1={CX} y1={CY} x2={CX} y2={CY - CUBE} />
            <line x1={CX} y1={CY} x2={CX + CUBE * 0.866} y2={CY + CUBE / 2} />
            <line x1={CX} y1={CY} x2={CX - CUBE * 0.866} y2={CY + CUBE / 2} />
          </g>

          <circle cx={CX} cy={CY} r="3" fill="#ffffff" />
        </g>

        {/* --- Nodos --- */}
        <g style={depth(14)}>
          {NODES.map((node) => {
            const IconComponent = iconRegistry[node.icon];
            const left = node.x - node.width / 2;
            const top = node.y - NODE_H / 2;

            return (
              <g key={node.label}>
                <rect
                  x={left}
                  y={top}
                  width={node.width}
                  height={NODE_H}
                  rx={NODE_H / 2}
                  fill="#171717"
                  stroke="#27272A"
                  strokeWidth="1"
                />

                {IconComponent && (
                  <g
                    transform={`translate(${left + NODE_PAD_X}, ${node.y - ICON_SIZE / 2})`}
                    className="text-primary-hover"
                  >
                    <IconComponent
                      width={ICON_SIZE}
                      height={ICON_SIZE}
                      strokeWidth={1.6}
                      stroke="currentColor"
                    />
                  </g>
                )}

                <text
                  x={left + NODE_PAD_X + ICON_SIZE + ICON_GAP}
                  y={node.y}
                  dominantBaseline="central"
                  className="fill-muted font-sans"
                  fontSize="13"
                  fontWeight="500"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
