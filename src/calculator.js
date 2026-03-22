#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports the following basic arithmetic operations:
 *  - Addition       (+)
 *  - Subtraction    (-)
 *  - Multiplication (x)
 *  - Division       (÷)
 *
 * Usage: node calculator.js <number> <operator> <number>
 * Operators: +, -, *, /
 * Example: node calculator.js 10 + 5
 */

// Returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Returns the quotient of a and b; throws an error if b is zero
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide };

// Only run CLI logic when executed directly (not when required by tests)
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error("Usage: node calculator.js <number> <operator> <number>");
    console.error("Operators: + - * /");
    process.exit(1);
  }

  const a = parseFloat(args[0]);
  const operator = args[1];
  const b = parseFloat(args[2]);

  if (isNaN(a) || isNaN(b)) {
    console.error("Error: Both operands must be valid numbers.");
    process.exit(1);
  }

  let result;

  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      try {
        result = divide(a, b);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
      break;
    default:
      console.error(`Error: Unsupported operator "${operator}". Use +, -, *, or /.`);
      process.exit(1);
  }

  console.log(`${a} ${operator} ${b} = ${result}`);
}
