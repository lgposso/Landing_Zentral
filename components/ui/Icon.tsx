import {
  ArrowRight,
  Boxes,
  Check,
  ClipboardList,
  Code,
  Compass,
  Gauge,
  Handshake,
  HardHat,
  Headset,
  Layers,
  LayoutDashboard,
  Mail,
  Menu,
  MessageCircle,
  MessagesSquare,
  PanelsTopLeft,
  ShoppingCart,
  Sparkles,
  Stethoscope,
  Truck,
  Unplug,
  Users,
  Waypoints,
  Webhook,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";

import type { IconKey } from "@/types";

/**
 * Registro central de iconos.
 *
 * El copy en `config/content.ts` guarda una clave de texto en vez de un
 * componente, de modo que el contenido sigue siendo serializable y puede
 * cruzar la frontera servidor/cliente sin problemas.
 *
 * Nota de marca (§4 del spec): sin robots, cerebros ni engranajes.
 */
export const iconRegistry: Record<string, LucideIcon> = {
  // Nodos del Zentral Core
  users: Users,
  boxes: Boxes,
  messageCircle: MessageCircle,
  sparkles: Sparkles,
  webhook: Webhook,
  mail: Mail,
  layoutDashboard: LayoutDashboard,

  // Problema
  clipboardList: ClipboardList,
  unplug: Unplug,
  layers: Layers,
  compass: Compass,

  // Soluciones
  workflow: Workflow,
  messagesSquare: MessagesSquare,
  waypoints: Waypoints,
  code: Code,
  gauge: Gauge,
  panels: PanelsTopLeft,

  // Casos de uso
  truck: Truck,
  stethoscope: Stethoscope,
  hardHat: HardHat,
  shoppingCart: ShoppingCart,
  handshake: Handshake,
  headset: Headset,

  // Interfaz
  arrowRight: ArrowRight,
  check: Check,
  menu: Menu,
  close: X,
};

interface IconProps {
  name: IconKey;
  className?: string;
  strokeWidth?: number;
}

/** Renderiza un icono del registro. Decorativo por defecto: el significado
 *  siempre lo aporta el texto contiguo, nunca el icono. */
export function Icon({ name, className, strokeWidth = 1.5 }: IconProps) {
  const LucideComponent = iconRegistry[name];
  if (!LucideComponent) return null;

  return (
    <LucideComponent
      className={className}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    />
  );
}
