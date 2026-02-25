import { Pharmacy } from "../src/pharmacy.js";
import { Drug } from "../src/drug.js";

describe("Pharmacy", () => {
  describe("Normal drug", () => {
    it("decreases benefit and expiresIn by 1 before expiry", () => {
      const result = new Pharmacy([
        new Drug("Doliprane", 10, 20),
      ]).updateBenefitValue();
      expect(result).toEqual([new Drug("Doliprane", 9, 19)]);
    });

    it("degrades benefit twice as fast after expiry", () => {
      const result = new Pharmacy([
        new Drug("Doliprane", 0, 10),
      ]).updateBenefitValue();
      expect(result).toEqual([new Drug("Doliprane", -1, 8)]);
    });

    it("benefit never goes below 0", () => {
      const result = new Pharmacy([
        new Drug("Doliprane", 5, 0),
      ]).updateBenefitValue();
      expect(result[0].benefit).toBe(0);
    });
  });

  describe("Herbal Tea", () => {
    it("increases benefit by 1 before expiry", () => {
      const result = new Pharmacy([
        new Drug("Herbal Tea", 5, 10),
      ]).updateBenefitValue();
      expect(result).toEqual([new Drug("Herbal Tea", 4, 11)]);
    });

    it("increases benefit by 2 after expiry", () => {
      const result = new Pharmacy([
        new Drug("Herbal Tea", 0, 10),
      ]).updateBenefitValue();
      expect(result).toEqual([new Drug("Herbal Tea", -1, 12)]);
    });

    it("benefit never exceeds 50", () => {
      const result = new Pharmacy([
        new Drug("Herbal Tea", 5, 50),
      ]).updateBenefitValue();
      expect(result[0].benefit).toBe(50);
    });
  });

  describe("Magic Pill", () => {
    it("never changes expiresIn or benefit", () => {
      const result = new Pharmacy([
        new Drug("Magic Pill", 15, 40),
      ]).updateBenefitValue();
      expect(result).toEqual([new Drug("Magic Pill", 15, 40)]);
    });
  });

  describe("Fervex", () => {
    it("increases benefit by 1 when more than 10 days left", () => {
      const result = new Pharmacy([
        new Drug("Fervex", 15, 20),
      ]).updateBenefitValue();
      expect(result).toEqual([new Drug("Fervex", 14, 21)]);
    });

    it("increases benefit by 2 when 10 days or less (and more than 5)", () => {
      const result = new Pharmacy([
        new Drug("Fervex", 10, 20),
      ]).updateBenefitValue();
      expect(result).toEqual([new Drug("Fervex", 9, 22)]);
    });

    it("increases benefit by 3 when 5 days or less", () => {
      const result = new Pharmacy([
        new Drug("Fervex", 5, 20),
      ]).updateBenefitValue();
      expect(result).toEqual([new Drug("Fervex", 4, 23)]);
    });

    it("drops benefit to 0 after expiry", () => {
      const result = new Pharmacy([
        new Drug("Fervex", 0, 40),
      ]).updateBenefitValue();
      expect(result).toEqual([new Drug("Fervex", -1, 0)]);
    });

    it("benefit never exceeds 50", () => {
      const result = new Pharmacy([
        new Drug("Fervex", 5, 49),
      ]).updateBenefitValue();
      expect(result[0].benefit).toBe(50);
    });
  });

  describe("Dafalgan", () => {
    it("degrades benefit twice as fast before expiry", () => {
      const result = new Pharmacy([
        new Drug("Dafalgan", 10, 20),
      ]).updateBenefitValue();
      expect(result).toEqual([new Drug("Dafalgan", 9, 18)]);
    });

    it("degrades benefit four times as fast after expiry", () => {
      const result = new Pharmacy([
        new Drug("Dafalgan", 0, 20),
      ]).updateBenefitValue();
      expect(result).toEqual([new Drug("Dafalgan", -1, 16)]);
    });

    it("benefit never goes below 0", () => {
      const result = new Pharmacy([
        new Drug("Dafalgan", 5, 1),
      ]).updateBenefitValue();
      expect(result[0].benefit).toBe(0);
    });
  });
});
