import { Coffee, Nfc } from "lucide-react";
import { Specimen } from "./Specimen";

const STAMPS = 10;
const STAMPED = 7;

/** Un pase de Google Wallet como lo ve el cliente: los colores son del negocio. */
export function LoyaltySpecimen() {
  return (
    <Specimen caption="Pase de ejemplo. El negocio, el premio y la promoción son ficticios.">
      <div className="mx-auto max-w-[380px] overflow-hidden rounded-[22px] bg-[#17392c] text-white shadow-[0_28px_64px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
        <div className="flex items-center justify-between gap-4 px-6 pt-6">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-[#f2c14e] text-[15px] font-extrabold text-[#17392c]">
              LC
            </span>
            <span className="text-[17px] font-extrabold leading-tight">
              Café La Ceiba
            </span>
          </div>
          <span className="zentral-data text-[13px] text-white/85">
            {STAMPED}/{STAMPS}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-5 gap-3 px-6">
          {Array.from({ length: STAMPS }, (_, i) => (
            <span
              key={i}
              className={
                i < STAMPED
                  ? "flex aspect-square items-center justify-center rounded-full bg-[#f2c14e] text-[#17392c]"
                  : "aspect-square rounded-full border-2 border-dashed border-white/45"
              }
            >
              {i < STAMPED && <Coffee className="size-[45%]" strokeWidth={2.25} />}
            </span>
          ))}
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-4 px-6 text-[13px]">
          <div>
            <dt className="text-white/75">Premio</dt>
            <dd className="mt-0.5 font-bold">Un café de la casa</dd>
          </div>
          <div>
            <dt className="text-white/75">Faltan</dt>
            <dd className="mt-0.5 font-bold">{STAMPS - STAMPED} sellos</dd>
          </div>
        </dl>

        <div className="mx-6 mt-5 rounded-xl bg-white/10 px-4 py-3 text-[13px]">
          <span className="font-bold">Promo de hoy:</span> 2x1 en pandebonos
          hasta las 11 a. m.
        </div>

        <div className="mt-6 flex items-center justify-between bg-white px-6 py-4 text-[#0f1115]">
          <span className="zentral-data text-[14px] font-semibold">4F7K 2Q9M</span>
          <span className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#555b66]">
            <Nfc className="size-4" strokeWidth={2} />
            Acerca el celular
          </span>
        </div>
      </div>
    </Specimen>
  );
}
