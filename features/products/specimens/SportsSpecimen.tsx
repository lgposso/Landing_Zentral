import { MapPin, MessageCircle } from "lucide-react";
import { Specimen } from "./Specimen";

const HOURS = [
  { hour: "18:00", free: 6 },
  { hour: "19:00", free: 4 },
  { hour: "20:00", free: 2 },
  { hour: "21:00", free: 5 },
  { hour: "22:00", free: 8 },
];

const VENUES = [
  { name: "Sede La 72", barrio: "El Prado", type: "Fútbol 6" },
  { name: "Canchas del Norte", barrio: "Villa Country", type: "Fútbol 5" },
];

/** La búsqueda por hora: primero cuándo, después dónde. */
export function SportsSpecimen() {
  return (
    <Specimen caption="Demo con sedes y horarios ficticios; los barrios son de Barranquilla.">
      <div className="overflow-hidden rounded-card border-[1.5px] border-border bg-surface shadow-[0_28px_64px_-34px_rgba(0,0,0,0.9)]">
        <div className="border-b border-border px-5 py-4">
          <p className="text-[13px] font-bold text-muted">Jueves, 24 de septiembre</p>
          <div className="mt-3 grid grid-cols-5 gap-1.5">
            {HOURS.map((slot) => {
              const active = slot.hour === "20:00";
              return (
                <span
                  key={slot.hour}
                  className={
                    active
                      ? "rounded-button bg-line-sports px-1 py-2 text-center text-background"
                      : "rounded-button bg-background px-1 py-2 text-center text-foreground"
                  }
                >
                  <span className="zentral-data block text-[13px] font-semibold">
                    {slot.hour}
                  </span>
                  <span
                    className={
                      active
                        ? "block text-[11px] font-bold text-background"
                        : "block text-[11px] text-muted"
                    }
                  >
                    {slot.free} sedes
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        <ul className="divide-y divide-border">
          {VENUES.map((venue) => (
            <li key={venue.name} className="flex items-center justify-between gap-4 px-5 py-4">
              <span>
                <span className="block text-[15px] font-extrabold text-foreground">
                  {venue.name}
                </span>
                <span className="mt-0.5 flex items-center gap-1 text-[12.5px] text-muted">
                  <MapPin className="size-3.5" strokeWidth={2} />
                  {venue.barrio}, {venue.type}
                </span>
              </span>
              <span className="zentral-data shrink-0 text-[13px] font-semibold text-foreground">
                20:00 libre
              </span>
            </li>
          ))}
        </ul>

        <div className="bg-background px-5 py-3.5">
          <span className="inline-flex w-full items-center justify-center gap-2 rounded-button bg-foreground px-3 py-2.5 text-[13px] font-bold text-background">
            <MessageCircle className="size-4" strokeWidth={2} />
            Reservar por WhatsApp
          </span>
        </div>
      </div>
    </Specimen>
  );
}
