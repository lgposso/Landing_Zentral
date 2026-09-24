import type { CSSProperties } from "react";

/* Los dos trazos del isotipo de Zentral, tal cual vienen de
   `public/isotipo-zentral2.svg` (viewBox 600×550). Se copian aquí para poder
   teñirlos con `currentColor`: el archivo original trae degradados fijos. */
const TOP =
  "M565.12,120.2c2.89-10.22,3.72-21.05,2.38-32.49c-3.51-30.35-30.17-53.85-61.07-53.85c-122.96,0-245.82,0-368.78,0c-31.62,0-56.31,13.79-73.67,39.24c-9.4,13.79-16.33,29.22-24.39,43.94c-0.72,1.23-1.03,2.66-1.76,4.6c2.38,0,4.03,0,5.68,0c62.82,0,125.65,0,188.47,0c61.69,0,123.27,0,184.96,0.1c0.88,0,1.75,0,2.63,0.09c2.15,0.21,4.29,0.62,6.14,1.53c10.02,5.11,13.02,15.74,7.03,26.47c-2.89,5.11-6.82,9.61-10.54,14.1c-30.28,36.38-60.65,72.76-90.93,109.23c-25.11,30.25-50.11,60.6-75.12,90.84c-4.24,5.11-8.37,10.22-12.92,15.84c1.65,0.1,2.69,0.31,3.62,0.31c28.93,0,57.76,0.1,86.69,0c15.4-0.1,28-6.23,37.82-17.88c20.87-24.73,41.64-49.56,62.41-74.49c38.34-46.09,76.57-92.27,115.01-138.26c7.65-9.2,13.02-19.01,16.02-29.53";
const BOTTOM =
  "M319,194.18c-2.16,2.75-3.94,5.03-5.9,7.31c-36.21,42.7-72.41,85.4-108.72,128.11c-19.09,22.39-38.27,44.79-57.46,67.18c-7.28,8.54-8.56,19.64-3.15,27.33c4.33,6.17,10.72,8.35,18.1,8.35c50.28,0,100.46,0,150.63,0c75.56,0,151.03,0,226.59,0c1.18,0,2.36,0,4.43,0c-3.15,5.6-5.9,10.72-8.95,15.66c-6.3,10.15-12.3,20.5-19.09,30.37c-11.22,16.32-25.78,28.94-45.65,34.64c-6.2,1.71-12.79,2.85-19.19,2.85c-115.31,0.19-230.62,0.09-345.94,0.19c-14.36,0-27.94-2.66-40.04-10.06c-22.92-14.04-33.26-34.83-32.76-60.64c0.39-21.26,9.05-39.57,23.22-55.8c21.55-24.58,42.7-49.53,64.05-74.3c27.06-31.41,54.11-62.82,81.17-94.23c2.95-3.42,5.9-6.93,8.86-10.44c8.95-10.53,20.37-16.42,34.44-16.61c23.81-0.28,47.62-0.09,71.43-0.09C316.14,193.8,317.23,193.99,319,194.18z";

/** Las mismas rutas, para dibujar el isotipo dentro de otro SVG. */
export const ISOTYPE_PATHS = { top: TOP, bottom: BOTTOM } as const;
export const ISOTYPE_VIEWBOX = "0 0 600 550";

interface IsotypeProps {
  className?: string;
  style?: CSSProperties;
}

/**
 * El isotipo de Zentral en un solo color (`currentColor`). El trazo de abajo
 * va un tono más oscuro del mismo color, para conservar la profundidad que el
 * original logra con su degradado.
 */
export function Isotype({ className, style }: IsotypeProps) {
  return (
    <svg
      viewBox={ISOTYPE_VIEWBOX}
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d={TOP} fill="currentColor" />
      <path
        d={BOTTOM}
        style={{ fill: "color-mix(in oklab, currentColor 78%, var(--color-background))" }}
      />
    </svg>
  );
}
