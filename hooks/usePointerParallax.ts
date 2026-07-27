"use client";

import { useEffect, useState, type RefObject } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

interface Offset {
  x: number;
  y: number;
}

const ORIGIN: Offset = { x: 0, y: 0 };

/**
 * Desplazamiento normalizado (-1 a 1) del puntero respecto al centro del
 * elemento, para el parallax "muy sutil" del Zentral Core (§11).
 *
 * Devuelve siempre {0,0} —y no registra listeners— cuando el dispositivo no
 * tiene puntero fino (táctil) o cuando el usuario pidió reducir la animación.
 */
export function usePointerParallax(ref: RefObject<HTMLElement | null>): Offset {
  const [offset, setOffset] = useState<Offset>(ORIGIN);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      const element = ref.current;
      if (!element) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const y = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        // Acotado a [-1, 1] para que el puntero lejos del elemento no dispare
        // el desplazamiento más allá de su máximo.
        setOffset({
          x: Math.max(-1, Math.min(1, x)),
          y: Math.max(-1, Math.min(1, y)),
        });
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [ref, prefersReducedMotion]);

  return offset;
}
