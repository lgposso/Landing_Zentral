"use client";

import { useEffect, useState } from "react";

/**
 * `true` cuando la página se ha desplazado más allá de `threshold`.
 * Usado por el navbar para aplicar el blur al hacer scroll (§11).
 *
 * El listener es pasivo y sólo actualiza estado cuando el booleano cambia,
 * de modo que no provoca renders en cada píxel de scroll.
 */
export function useScrolled(threshold = 16): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled((current) => {
        const next = window.scrollY > threshold;
        return next === current ? current : next;
      });
    };

    onScroll(); // estado inicial correcto si se recarga a media página
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
