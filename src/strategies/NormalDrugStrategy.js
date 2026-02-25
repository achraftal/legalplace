export class NormalDrugStrategy {
  update(drug) {
    const newExpiresIn = drug.expiresIn - 1;
    const hasExpired = newExpiresIn < 0;
    const benefitDelta = hasExpired ? -2 : -1;

    drug.updateProperties({
      expiresIn: newExpiresIn,
      benefit: drug.benefit + benefitDelta,
    });
  }
}
