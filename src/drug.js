export class Drug {
  static MIN_BENEFIT = 0;
  static MAX_BENEFIT = 50;

  constructor(name, expiresIn, benefit) {
    if (benefit < Drug.MIN_BENEFIT) {
      throw new Error("Benefit cannot be negative");
    }
    if (benefit > Drug.MAX_BENEFIT) {
      throw new Error("Benefit cannot exceed 50");
    }

    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateProperties({ expiresIn, benefit }) {
    if (expiresIn !== undefined) {
      this.expiresIn = expiresIn;
    }
    if (benefit !== undefined) {
      const clampedBenefit = Math.min(
        Math.max(Drug.MIN_BENEFIT, benefit),
        Drug.MAX_BENEFIT,
      );
      this.benefit = clampedBenefit;
    }
  }
}
