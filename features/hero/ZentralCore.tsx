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

/** Radio desde el que salen los cables, alrededor del isotipo central. */
const CORE_R = 76;

/**
 * Caja donde se dibuja el isotipo (`public/isotipo-zentral2.svg`).
 *
 * Ese archivo tiene un viewBox de 600×550 con el dibujo (536×482) centrado en
 * él, así que con `xMidYMid meet` basta con respetar esa proporción: el trazo
 * queda centrado y ocupa ~116×104, holgado dentro de `CORE_R`.
 */
const LOGO_W = 130;
const LOGO_H = 119;

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

    // Punto de partida: justo fuera del isotipo, en la dirección del nodo.
    const startX = CX + dirX * CORE_R;
    const startY = CY + dirY * CORE_R;

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
          Diagrama del isotipo de Zentral como núcleo, conectado mediante líneas
          de datos a siete sistemas empresariales: CRM, ERP, WhatsApp, OpenAI,
          API, correo y dashboard.
        </desc>

        <defs>
          <linearGradient id="core-cable" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#27272A" stopOpacity="0.9" />
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

        {/* --- Núcleo: el isotipo de Zentral --- */}
        <g aria-hidden="true" style={depth(4)}>
          <circle
            cx={CX}
            cy={CY}
            r={78}
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

          <image
            href="/isotipo-zentral2.svg"
            x={CX - LOGO_W / 2}
            y={CY - LOGO_H / 2}
            width={LOGO_W}
            height={LOGO_H}
            preserveAspectRatio="xMidYMid meet"
          />
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
