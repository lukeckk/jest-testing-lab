import { add, subtract, multiply, divide } from "../src/calculator.js";

describe("Calculator Module", () => {
  test("adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("multiplies two numbers correctly", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("divides two numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("throws an error when dividing by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
  });
});
