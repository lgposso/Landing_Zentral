import type { ProductSlug } from "@/types";
import { LoyaltySpecimen } from "./LoyaltySpecimen";
import { RipsSpecimen } from "./RipsSpecimen";

export const specimens: Record<ProductSlug, () => React.JSX.Element> = {
  rips: RipsSpecimen,
  loyalty: LoyaltySpecimen,
};
