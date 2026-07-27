"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

/**
 * `reducedMotion="user"` hace que Framer Motion desactive automáticamente las
 * animaciones de transform cuando el sistema del usuario pide reducirlas,
 * conservando sólo los cambios de opacidad. Es el requisito de accesibilidad
 * del §12 resuelto en un solo punto, en vez de sección por sección.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
