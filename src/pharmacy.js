import { NormalDrugStrategy } from "./strategies/NormalDrugStrategy.js";
import { HerbalTeaStrategy } from "./strategies/HerbalTeaStrategy.js";
import { MagicPillStrategy } from "./strategies/MagicPillStrategy.js";
import { FervexStrategy } from "./strategies/FervexStrategy.js";

const DRUG_NAMES = {
  HERBAL_TEA: "Herbal Tea",
  MAGIC_PILL: "Magic Pill",
  FERVEX: "Fervex",
};

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (const drug of this.drugs) {
      const strategy = this.getDrugStrategy(drug);
      strategy.update(drug);
    }
    return this.drugs;
  }

  getDrugStrategy(drug) {
    switch (drug.name) {
      case DRUG_NAMES.HERBAL_TEA:
        return new HerbalTeaStrategy();
      case DRUG_NAMES.FERVEX:
        return new FervexStrategy();
      case DRUG_NAMES.MAGIC_PILL:
        return new MagicPillStrategy();
      default:
        return new NormalDrugStrategy();
    }
  }
}
