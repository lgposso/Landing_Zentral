import { headers } from "next/headers";

/**
 * Freno de abuso para el formulario. El ID de la Server Action se puede leer
 * del HTML público, así que cualquiera puede automatizar envíos: sin esto se
 * agota la cuota de Resend, el buzón se llena y la cuenta queda expuesta a
 * suspensión por spam.
 *
 * Límite deliberadamente bajo: una persona real escribe una vez, no seis. Si
 * alguien legítimo lo topa, el formulario le ofrece WhatsApp y correo, así
 * que no queda sin salida.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;

/**
 * El Map vive en memoria del proceso, y en Vercel cada instancia serverless
 * tiene el suyo: un atacante que caiga en instancias distintas obtiene más
 * margen que el nominal. Aun así corta en seco el abuso con un script simple,
 * que es el caso real. Para un techo duro va el rate limiting del firewall de
 * Vercel, que actúa en el borde antes de llegar a este código.
 */
const hits = new Map<string, number[]>();

/** Sin esto el Map crece sin límite con IPs que ya no importan. */
function prune(now: number): void {
  for (const [key, times] of hits) {
    const live = times.filter((t) => now - t < WINDOW_MS);
    if (live.length === 0) hits.delete(key);
    else hits.set(key, live);
  }
}

async function clientKey(): Promise<string> {
  const h = await headers();
  // cf-connecting-ip primero: el sitio está detrás de Cloudflare, así que es
  // el único que no puede falsear quien envía. x-forwarded-for lo pone Vercel.
  const ip =
    h.get("cf-connecting-ip") ??
    h.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    h.get("x-real-ip") ??
    "desconocida";

  return ip;
}

/** true si el envío supera el límite y debe rechazarse. */
export async function isRateLimited(): Promise<boolean> {
  const now = Date.now();
  prune(now);

  const key = await clientKey();
  const times = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (times.length >= MAX_PER_WINDOW) return true;

  times.push(now);
  hits.set(key, times);
  return false;
}
