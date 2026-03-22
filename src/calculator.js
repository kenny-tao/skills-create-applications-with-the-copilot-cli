/**
 * Calculator module
 * Supports the following operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power (exponentiation)
 * - squareRoot
 */

/**
 * Adds two numbers together.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The sum of a and b.
 */
function addition(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - The minuend.
 * @param {number} b - The subtrahend.
 * @returns {number} The difference of a and b.
 */
function subtraction(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers together.
 * @param {number} a - The first factor.
 * @param {number} b - The second factor.
 * @returns {number} The product of a and b.
 */
function multiplication(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of a divided by b.
 * @throws {Error} If b is zero (division by zero is undefined).
 */
function division(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Returns the remainder of dividing a by b (modulo operation).
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The remainder of a divided by b.
 * @throws {Error} If b is zero.
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Raises base to the given exponent (power/exponentiation).
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} The result of base raised to the exponent.
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number.
 * @param {number} n - The number to find the square root of.
 * @returns {number} The square root of n.
 * @throws {Error} If n is negative (square root of a negative number is not real).
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
