export class DafalganStrategy {
  update(drug) {
    const newExpiresIn = drug.expiresIn - 1;
    const hasExpired = newExpiresIn < 0;
    const benefitDelta = hasExpired ? -4 : -2;

    drug.updateProperties({
      expiresIn: newExpiresIn,
      benefit: drug.benefit + benefitDelta,
    });
  }
}
