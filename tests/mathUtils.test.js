import { factorial, summation, combinations, permutations } from "../src/mathUtils.js";

describe("Calculator Module", () => {
  test("factorial correctly", () => {
    expect(factorial(4)).toBe(24);
  });

  test("throws an error when n is negative", () => {
    expect(() => factorial(-1)).toThrow("n must be a non-negative integer");
  });

  test("summation correctly", () => {
    expect(summation(2)).toBe(3);
  });

  test("throws an error when n is negative", () => {
    expect(() => summation(0)).toThrow("n must be a positive integer");
  });

  test("combinations correctly", () => {
    expect(combinations(5, 2)).toBe(10);
  });

  test("throws an error when either n or k is less than zero", () => {
    expect(() => combinations(-1, -2)).toThrow("Invalid inputs for n or k");
  });

  test("permutations correctly", () => {
    expect(permutations(5, 2)).toBe(20);
  });

  test("throws an error when either n or k is less than zero", () => {
    expect(() => permutations(-2, -3)).toThrow("Invalid inputs for n or k");
  });
});
