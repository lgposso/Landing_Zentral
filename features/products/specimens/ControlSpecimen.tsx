import { Check, Clock, X } from "lucide-react";
import { Specimen } from "./Specimen";

const ENTRIES = [
  {
    time: "06:54",
    who: "Residente R2, Pediatría",
    kind: "Entrada",
    status: "ok",
    note: "Dentro de la geocerca, 38 m",
  },
  {
    time: "07:31",
    who: "Residente R1, Pediatría",
    kind: "Entrada",
    status: "late",
    note: "Tardanza. Motivo: trancón en la Circunvalar",
  },
  {
    time: "07:40",
    who: "Residente R3, Cirugía",
    kind: "Entrada",
    status: "rejected",
    note: "Fuera de la geocerca, 1,2 km. No se registró",
  },
  {
    time: "17:06",
    who: "Residente R2, Pediatría",
    kind: "Salida",
    status: "ok",
    note: "Dentro de la geocerca, 22 m",
  },
] as const;

const icons = {
  ok: { Icon: Check, className: "bg-line-rips text-background" },
  late: { Icon: Clock, className: "bg-line-sports text-background" },
  rejected: { Icon: X, className: "bg-foreground text-background" },
};

/** El registro del día en una sede: lo que el servidor aceptó y lo que no. */
export function ControlSpecimen() {
  return (
    <Specimen caption="Registros de ejemplo con datos ficticios.">
      <div className="overflow-hidden rounded-card border-[1.5px] border-border bg-surface shadow-[0_28px_64px_-34px_rgba(0,0,0,0.9)]">
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5">
          <span className="text-[14px] font-extrabold text-foreground">
            Hospital de ejemplo, sede norte
          </span>
          <span className="zentral-data text-[12px] text-muted">Hoy</span>
        </div>

        <ul className="divide-y divide-border">
          {ENTRIES.map((entry) => {
            const { Icon, className } = icons[entry.status];
            return (
              <li key={`${entry.time}-${entry.who}`} className="flex gap-4 px-5 py-3.5">
                <span className="zentral-data w-12 shrink-0 pt-0.5 text-[14px] font-semibold text-foreground">
                  {entry.time}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13.5px] font-bold text-foreground">
                    {entry.kind}: {entry.who}
                  </span>
                  <span className="mt-0.5 block text-[12.5px] leading-snug text-muted">
                    {entry.note}
                  </span>
                </span>
                <span
                  className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full ${className}`}
                >
                  <Icon className="size-3.5" strokeWidth={3} />
                </span>
              </li>
            );
          })}
        </ul>

        <div className="bg-background px-5 py-3.5 text-[12.5px] text-muted">
          Informe semanal en PDF: lunes, 7:00 a. m., uno por grupo.
        </div>
      </div>
    </Specimen>
  );
}
