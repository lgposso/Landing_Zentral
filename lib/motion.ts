import type { Variants } from "framer-motion";

/**
 * Variantes de animación compartidas (§11 del spec).
 *
 * Se centralizan aquí para que ninguna sección reinvente su propia curva:
 *   - Hero:  Fade Up, 0.6s, easeOut
 *   - Cards: translateY 30px, stagger 0.08
 *
 * Todas animan únicamente `opacity` y `transform`, que el navegador resuelve
 * en el compositor (sin reflow) — requisito para sostener INP < 200ms.
 */

/** Fade Up de 0.6s con easeOut. `delay` permite escalonar a mano los bloques
 *  del hero, donde el orden de lectura importa más que un stagger uniforme. */
export function createFadeUp(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  };
}

/** Contenedor que escalona la entrada de sus hijos. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

/** Hijo de un grid de cards: sube 30px al entrar. */
export const cardItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/** Configuración estándar de `whileInView`: anima una sola vez, con un
 *  margen que dispara la animación justo antes de que la sección entre. */
export const viewportOnce = { once: true, margin: "-80px" } as const;
