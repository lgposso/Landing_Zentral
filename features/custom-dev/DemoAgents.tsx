import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DEMO_AGENTS_URL, demoAgents } from "@/config/services";
import { lineStyles } from "@/lib/lines";
import { cn } from "@/lib/utils";

const line = lineStyles.custom;

/**
 * La prueba de la página de agentes: los seis agentes de la demostración
 * pública, en texto indexable, con el enlace a verlos resolver casos.
 * Van sobre la troncal azul; los colores de la demostración no se traen
 * aquí porque en el sitio el verde y el rosado son de RIPS y Loyalty.
 */
export function DemoAgents() {
  return (
    <section aria-labelledby="agentes-demo" className="border-t border-border py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-8">
            <h2 id="agentes-demo" className="max-w-[24ch] text-h2 text-foreground">
              Seis agentes que puedes ver trabajando.
            </h2>
            <p className="mt-5 max-w-[60ch] text-body text-muted">
              Construimos una demostración con agentes para tareas comunes de
              una empresa. Cada uno resuelve un caso de principio a fin, paso
              a paso, y se ve en qué momento le pasa el caso a una persona.
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:col-span-4 lg:items-end">
            <Button href={DEMO_AGENTS_URL} isExternal variant="secondary" size="lg">
              Ver los agentes en acción
              <ArrowUpRight className="size-[1.1em]" strokeWidth={2.25} aria-hidden="true" />
            </Button>
            <p className="text-[14px] text-muted">Demostración con datos de ejemplo.</p>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {demoAgents.map((agent) => (
            <li key={agent.name} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className={cn("mt-1 block size-5 shrink-0 rounded-full border-[5px] bg-background", line.border)}
              />
              <div className="min-w-0">
                <h3 className="text-[1.0625rem] font-extrabold leading-tight text-foreground">
                  {agent.name}
                </h3>
                <p className="mt-2 text-small text-muted">{agent.does}</p>
                <p className="mt-2 text-small text-foreground">
                  <span className="font-bold">Pasa a una persona: </span>
                  <span className="text-muted">{agent.handsOff}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
