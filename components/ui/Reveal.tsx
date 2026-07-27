"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cardItem, createFadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Retardo en segundos, para escalonar a mano. */
  delay?: number;
  /**
   * Anima al montar en vez de esperar a que el bloque entre en pantalla.
   * Úsalo en el contenido sobre el pliegue: el `IntersectionObserver` de
   * `whileInView` resuelve de forma asíncrona y retrasaría el LCP.
   */
  immediate?: boolean;
}

/**
 * Fade Up de 0.6s con easeOut (§11).
 * `MotionProvider` ya honra `prefers-reduced-motion` de forma global.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  immediate = false,
}: RevealProps) {
  const variants = createFadeUp(delay);

  if (immediate) {
    return (
      <motion.div
        className={className}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

/** Contenedor que escalona a sus `RevealItem` cada 0.08s (§11). */
export function Stagger({ children, className }: Omit<RevealProps, "delay">) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

/** Hijo de `Stagger`: entra subiendo 30px. */
export function RevealItem({ children, className }: Omit<RevealProps, "delay">) {
  return (
    <motion.div className={className} variants={cardItem}>
      {children}
    </motion.div>
  );
}
