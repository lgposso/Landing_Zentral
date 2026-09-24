import { FileSpreadsheet } from "lucide-react";
import { Specimen } from "./Specimen";

const TABS = ["Resumen", "Frecuencias", "Servicios", "Inconsistencias", "Facturas"];

const FINDINGS = [
  { count: "3", text: "Facturas con el plazo de radicación vencido" },
  { count: "5", text: "Facturas a 5 días hábiles o menos de vencer" },
  {
    count: "1",
    text: "Cantidad × valor unitario no da el total",
    detail: "5 × $13.522 = $67.610 · facturado $308.500",
  },
  { count: "12", text: "Diagnóstico principal sin formato CIE-10" },
  { count: "66", text: "Atenciones de más de un año antes del lote" },
];

/** La pestaña de inconsistencias de un lote, antes de radicar. */
export function RipsSpecimen() {
  return (
    <Specimen caption="Lote de ejemplo con datos ficticios. Las pestañas y los chequeos son los de la herramienta.">
      <div className="overflow-hidden rounded-card border-[1.5px] border-border bg-surface shadow-[0_28px_64px_-34px_rgba(0,0,0,0.9)]">
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5">
          <span className="text-[14px] font-extrabold text-foreground">
            IPS de ejemplo
          </span>
          <span className="zentral-data text-[12px] text-muted">
            NIT 900.000.000-0
          </span>
        </div>

        {/* En el celular solo caben tres pestañas: se ocultan las de los
            extremos para que la activa quede entera. */}
        <div className="flex gap-1 overflow-hidden whitespace-nowrap border-b border-border px-3 text-[12.5px] font-bold">
          {TABS.map((tab) => (
            <span
              key={tab}
              className={
                tab === "Inconsistencias"
                  ? "border-b-[3px] border-line-rips px-2.5 py-2.5 text-foreground"
                  : tab === "Resumen" || tab === "Servicios"
                    ? "hidden px-2.5 py-2.5 text-muted sm:inline"
                    : "px-2.5 py-2.5 text-muted"
              }
            >
              {tab}
            </span>
          ))}
        </div>

        <ul className="divide-y divide-border">
          {FINDINGS.map((finding) => (
            <li key={finding.text} className="flex gap-4 px-5 py-3">
              <span className="zentral-data w-8 shrink-0 text-right text-[15px] font-semibold text-foreground">
                {finding.count}
              </span>
              <span className="text-[13.5px] leading-snug text-foreground">
                {finding.text}
                {finding.detail && (
                  <span className="zentral-data mt-1 block text-[12px] text-muted">
                    {finding.detail}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between gap-4 bg-background px-5 py-3.5">
          <span className="text-[12.5px] text-muted">
            Procesado en este equipo
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-button bg-line-rips px-3 py-1.5 text-[12.5px] font-bold text-background">
            <FileSpreadsheet className="size-4" strokeWidth={2} />
            Exportar a Excel
          </span>
        </div>
      </div>
    </Specimen>
  );
}
