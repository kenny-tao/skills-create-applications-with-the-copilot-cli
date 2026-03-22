const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

describe('Calculator', () => {
  // addition tests
  describe('addition', () => {
    test('adds two positive numbers', () => {
      expect(addition(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number', () => {
      expect(addition(5, -3)).toBe(2);
    });

    test('adds two negative numbers', () => {
      expect(addition(-4, -6)).toBe(-10);
    });

    test('adds zero to a number', () => {
      expect(addition(7, 0)).toBe(7);
    });
  });

  // subtraction tests
  describe('subtraction', () => {
    test('subtracts two positive numbers', () => {
      expect(subtraction(10, 4)).toBe(6);
    });

    test('subtracts a larger number from a smaller one', () => {
      expect(subtraction(3, 8)).toBe(-5);
    });

    test('subtracts zero', () => {
      expect(subtraction(9, 0)).toBe(9);
    });
  });

  // multiplication tests
  describe('multiplication', () => {
    test('multiplies two positive numbers', () => {
      expect(multiplication(3, 4)).toBe(12);
    });

    test('multiplies by zero', () => {
      expect(multiplication(5, 0)).toBe(0);
    });

    test('multiplies a positive and a negative number', () => {
      expect(multiplication(6, -2)).toBe(-12);
    });
  });

  // division tests
  describe('division', () => {
    test('divides two positive numbers', () => {
      expect(division(10, 2)).toBe(5);
    });

    test('divides resulting in a decimal', () => {
      expect(division(7, 2)).toBe(3.5);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => division(5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  // modulo tests
  describe('modulo', () => {
    test('returns the remainder of two positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('returns zero when there is no remainder', () => {
      expect(modulo(9, 3)).toBe(0);
    });

    test('returns correct remainder for larger divisor', () => {
      expect(modulo(5, 8)).toBe(5);
    });

    test('throws an error when modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });
  });

  // power (exponentiation) tests
  describe('power', () => {
    test('raises a number to a positive exponent', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('raises a number to the power of zero', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('raises a number to the power of one', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('raises a number to a negative exponent', () => {
      expect(power(2, -1)).toBeCloseTo(0.5);
    });
  });

  // square root tests
  describe('squareRoot', () => {
    test('returns the square root of a perfect square', () => {
      expect(squareRoot(9)).toBe(3);
    });

    test('returns the square root of a non-perfect square', () => {
      expect(squareRoot(2)).toBeCloseTo(1.41421356);
    });

    test('returns zero for the square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('throws an error for the square root of a negative number', () => {
      expect(() => squareRoot(-4)).toThrow(
        'Cannot calculate square root of a negative number'
      );
    });
  });
});
