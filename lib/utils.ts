/**
 * Une clases condicionalmente. Implementación mínima a propósito: el proyecto
 * controla todas sus clases, así que no justifica añadir clsx + tailwind-merge
 * como dependencias.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
