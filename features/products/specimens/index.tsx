import type { ProductSlug } from "@/types";
import { ControlSpecimen } from "./ControlSpecimen";
import { LoyaltySpecimen } from "./LoyaltySpecimen";
import { RipsSpecimen } from "./RipsSpecimen";
import { SportsSpecimen } from "./SportsSpecimen";

export const specimens: Record<ProductSlug, () => React.JSX.Element> = {
  loyalty: LoyaltySpecimen,
  rips: RipsSpecimen,
  sports: SportsSpecimen,
  control: ControlSpecimen,
};
