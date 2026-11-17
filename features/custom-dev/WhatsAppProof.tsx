import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DEMO_AGENTS_URL } from "@/config/services";
import { cn } from "@/lib/utils";

/**
 * La prueba de la página de chatbot: el caso «¿En qué va mi pedido?» del
 * agente de WhatsApp de la demostración pública, tal cual se reproduce en
 * agentes.zentral.com.co/#wa. Es texto indexable y va rotulado como ejemplo.
 */
const conversation = [
  { from: "in", text: "Buenas, ey y mi pedido qué? Me dijeron que llegaba hoy 😩", time: "3:12 p.m." },
  {
    from: "out",
    text: "¡Hola! Tu pedido PED-10452 ya va en camino. Hay 4 entregas antes de la tuya y llega entre 3:40 y 4:20 p.m. ¿Te aviso cuando esté a 10 minutos?",
    time: "3:12 p.m.",
  },
  { from: "in", text: "Sí porfa. Y que toque duro que el timbre no sirve jaja", time: "3:13 p.m." },
  { from: "out", text: "Listo ✅ Dejé la nota y te escribo cuando esté a 10 minutos.", time: "3:13 p.m." },
] as const;

const behindTheScenes = [
  "Busca el pedido por el número desde el que escriben, sin pedir el número de pedido.",
  "Consulta el estado del envío y calcula una franja de llegada, no una hora inventada.",
  "Deja la nota del timbre para quien entrega y programa el aviso.",
];

export function WhatsAppProof() {
  return (
    <section aria-labelledby="chatbot-demo" className="border-t border-border py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-6">
          <h2 id="chatbot-demo" className="max-w-[22ch] text-h2 text-foreground">
            Así responde un cliente que escribe de afán.
          </h2>
          <p className="mt-5 max-w-[56ch] text-body text-muted">
            Es uno de los casos de nuestra demostración de agentes, con datos de
            ejemplo. Mientras responde, el chatbot hace tres cosas por dentro:
          </p>
          <ol className="mt-6 space-y-3">
            {behindTheScenes.map((step, index) => (
              <li key={step} className="flex gap-3 text-small text-muted">
                <span className="font-mono text-foreground">{String(index + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-9 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <Button href={`${DEMO_AGENTS_URL}/#wa`} isExternal variant="secondary" size="lg">
              Verlo en la demostración
              <ArrowUpRight className="size-[1.1em]" strokeWidth={2.25} aria-hidden="true" />
            </Button>
            <p className="text-[14px] text-muted">Incluye un reclamo que el chatbot le pasa a una persona.</p>
          </div>
        </div>

        <figure className="min-w-0 rounded-card bg-surface p-5 md:p-7 lg:col-span-6">
          <figcaption className="text-small font-semibold text-muted">
            Cliente • WhatsApp <span className="font-normal">· conversación de ejemplo</span>
          </figcaption>
          <ul className="mt-5 flex flex-col gap-3">
            {conversation.map((message) => (
              <li
                key={message.text}
                className={cn(
                  "max-w-[88%] rounded-2xl px-4 pb-2 pt-3 text-small leading-relaxed text-foreground",
                  message.from === "in"
                    ? "self-start rounded-bl-md bg-background"
                    : "self-end rounded-br-md bg-primary/25",
                )}
              >
                {message.text}
                <span className="mt-1 block text-right font-mono text-xs text-muted">
                  {message.time}
                </span>
              </li>
            ))}
          </ul>
        </figure>
      </Container>
    </section>
  );
}
