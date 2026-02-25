export class FervexStrategy {
  update(drug) {
    const newExpiresIn = drug.expiresIn - 1;
    const hasExpired = newExpiresIn < 0;

    if (hasExpired) {
      drug.updateProperties({
        expiresIn: newExpiresIn,
        benefit: 0,
      });
      return;
    }

    const benefitDelta = this.getBenefitDelta(newExpiresIn);

    drug.updateProperties({
      expiresIn: newExpiresIn,
      benefit: drug.benefit + benefitDelta,
    });
  }

  getBenefitDelta(expiresIn) {
    if (expiresIn < 5) return 3;
    if (expiresIn < 10) return 2;
    return 1;
  }
}
