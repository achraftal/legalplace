import { Drug } from "../src/drug.js";

describe("Drug", () => {
  describe("constructor", () => {
    it("creates a drug with the given properties with benefit at boundary values (from 0 to 50)", () => {
      const drug = new Drug("Doliprane", 10, 20);
      expect(drug.name).toBe("Doliprane");
      expect(drug.expiresIn).toBe(10);
      expect(drug.benefit).toBe(20);
    });

    it("throws if benefit is negative", () => {
      expect(() => new Drug("Doliprane", 10, -1)).toThrow(
        "Benefit cannot be negative",
      );
    });

    it("throws if benefit exceeds 50", () => {
      expect(() => new Drug("Doliprane", 10, 51)).toThrow(
        "Benefit cannot exceed 50",
      );
    });
  });

  describe("updateProperties", () => {
    it("updates expiresIn when provided", () => {
      const drug = new Drug("Doliprane", 10, 20);
      drug.updateProperties({ expiresIn: 5 });
      expect(drug.expiresIn).toBe(5);
    });

    it("updates benefit when provided and clamps it", () => {
      const drug = new Drug("Doliprane", 10, 20);
      drug.updateProperties({ benefit: 60 });
      expect(drug.benefit).toBe(50);
    });

    it("does not update expiresIn if not provided", () => {
      const drug = new Drug("Doliprane", 10, 20);
      drug.updateProperties({ benefit: 30 });
      expect(drug.expiresIn).toBe(10);
    });

    it("does not update benefit if not provided", () => {
      const drug = new Drug("Doliprane", 10, 20);
      drug.updateProperties({ expiresIn: 5 });
      expect(drug.benefit).toBe(20);
    });
  });
});
