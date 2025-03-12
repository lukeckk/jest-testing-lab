/**
 * Adds two numbers.
 * 
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first number.
 * 
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The difference of a and b.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * 
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second number.
 * 
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @throws {Error} Division by zero is not allowed.
 * @returns {number} The result of a divided by b.
 */
export function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// export default { add, subtract, multiply, divide };