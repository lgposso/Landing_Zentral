"use client";

import { useEffect } from "react";

/**
 * Alimenta el foco de cursor de las celdas `.zentral-spotlight`.
 *
 * No pinta nada: el fondo del sitio es negro puro y el color de marca vive
 * sólo en los objetos. Este componente existe únicamente para escribir las
 * coordenadas del puntero, relativas a la celda bajo el cursor, en las
 * variables CSS `--spot-x` / `--spot-y`.
 *
 * Un solo listener para toda la página, en vez de un handler por celda: así
 * las celdas siguen siendo componentes de servidor y el coste no crece con el
 * número de tarjetas.
 */
export function PointerSpotlight() {
  useEffect(() => {
    // Sin puntero fino no hay foco que seguir: en táctil no registramos nada.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let target: HTMLElement | null = null;

    const apply = () => {
      frame = 0;
      const cell = target?.closest<HTMLElement>(".zentral-spotlight");
      if (!cell) return;

      const rect = cell.getBoundingClientRect();
      cell.style.setProperty("--spot-x", `${pointerX - rect.left}px`);
      cell.style.setProperty("--spot-y", `${pointerY - rect.top}px`);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      target = event.target as HTMLElement | null;
      // Un solo fotograma pendiente como máximo: el puntero dispara muchos más
      // eventos de los que tiene sentido pintar.
      if (frame === 0) frame = requestAnimationFrame(apply);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return null;
}
