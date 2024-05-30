const calculator = require('../src/calculator');

  // Addition tests
  test('adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test('adds -1 + -1 to equal -2', () => {
    expect(calculator.add(-1, -1)).toBe(-2);
  });

  test('adds -1 + 2 to equal 1', () => {
    expect(calculator.add(-1, 2)).toBe(1);
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test('adds 0 + 1 to equal 1', () => {
    expect(calculator.add(0, 1)).toBe(1);
  });

  test('returns 0 when adding null or undefined', () => {
    expect(calculator.add(null, 1)).toBe(0);
    expect(calculator.add(1, null)).toBe(0);
    expect(calculator.add(undefined, 1)).toBe(0);
    expect(calculator.add(1, undefined)).toBe(0);
    expect(calculator.add(undefined, undefined)).toBe(0);
    expect(calculator.add(null, null)).toBe(0);
  });

  test('non numeric values should return 0', () => {
    expect(calculator.add('a', 1)).toBe(0);
    expect(calculator.add(1, 'a')).toBe(0);
    expect(calculator.add('a', 'b')).toBe(0);
  }
  );

  // Subtraction tests

  test('subtracts 5 - 3 to equal 2', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('subtracts -5 - -3 to equal -2', () => {
    expect(calculator.subtract(-5, -3)).toBe(-2);
  });

  test("subtracts -5 - 3 to equal -8", () => {
    expect(calculator.subtract(-5, 3)).toBe(-8);
  });

  test('subtracts 0 - 0 to equal 0', () => {
    expect(calculator.subtract(0, 0)).toBe(0);
  });

  test('returns 0 when subtracting null or undefined', () => {
    expect(calculator.subtract(null, 1)).toBe(0);
    expect(calculator.subtract(1, null)).toBe(0);
    expect(calculator.subtract(undefined, 1)).toBe(0);
    expect(calculator.subtract(1, undefined)).toBe(0);
    expect(calculator.subtract(undefined, undefined)).toBe(0);
    expect(calculator.subtract(null, null)).toBe(0);
  });

  test('non numeric values should return 0', () => {
    expect(calculator.subtract('a', 1)).toBe(0);
    expect(calculator.subtract(1, 'a')).toBe(0);
    expect(calculator.subtract('a', 'b')).toBe(0);
  
  }
);

  // Multiplication tests

  test('multiplies 2 * 3 to equal 6', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('multiplies -2 * -3 to equal 6', () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
  });

  test('multiplies -2 * 3 to equal -6', () => {
    expect(calculator.multiply(-2, 3)).toBe(-6);
  });

  test('multiplies 0 * 0 to equal 0', () => {
    expect(calculator.multiply(0, 0)).toBe(0);
  });

  test('multiplies 0 * 1 to equal 0', () => {
    expect(calculator.multiply(0, 1)).toBe(0);
  });

  test('returns 0 when multiplying null or undefined', () => {
    expect(calculator.multiply(null, 1)).toBe(0);
    expect(calculator.multiply(1, null)).toBe(0);
    expect(calculator.multiply(undefined, 1)).toBe(0);
    expect(calculator.multiply(1, undefined)).toBe(0);
    expect(calculator.multiply(undefined, undefined)).toBe(0);
    expect(calculator.multiply(null, null)).toBe(0);
  });

  test('non numeric values should return 0', () => {
    expect(calculator.multiply('a', 1)).toBe(0);
    expect(calculator.multiply(1, 'a')).toBe(0);
    expect(calculator.multiply('a', 'b')).toBe(0);
  });

  // Division tests

  test('divides 6 / 2 to equal 3', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test('divides 6 / -2 to equal -3', () => {
    expect(calculator.divide(6, -2)).toBe(-3);
  });

  test('divides -6 / 2 to equal -3', () => {
    expect(calculator.divide(-6, 2)).toBe(-3);
  });

  test('divides 0 / 1 to equal 0', () => {
    expect(calculator.divide(0, 1)).toBe(0);
  });

  test('divides -6 / -3 to equal 2', () => {
    expect(calculator.divide(-6, -3)).toBe(2);
  });

  test('throws error when dividing by zero', () => {
    expect(() => calculator.divide(1, 0)).toThrow('Cannot divide by zero');
  });

  test('divides 0 / 0 to equal 0', () => {
    expect(() => calculator.divide(0, 0)).toThrow('Cannot divide by zero');
  });

  test('returns 0 when dividing null or undefined', () => {
    expect(calculator.divide(null, 1)).toBe(0);
    expect(calculator.divide(1, null)).toBe(0);
    expect(calculator.divide(undefined, 1)).toBe(0);
    expect(calculator.divide(1, undefined)).toBe(0);
    expect(calculator.divide(undefined, undefined)).toBe(0);
    expect(calculator.divide(null, null)).toBe(0);
  });

  test('divides -6 / -2 to equal 3', () => {
    expect(calculator.divide(-6, -2)).toBe(3);
  });

  test('non numeric values should return 0', () => {
    expect(calculator.divide('a', 1)).toBe(0);
    expect(calculator.divide(1, 'a')).toBe(0);
    expect(calculator.divide('a', 'b')).toBe(0);
  });
  // Square tests

  test('calculates the square of a number', () => {
    expect(calculator.square(0)).toBe(0);
    expect(calculator.square(1)).toBe(1);
    expect(calculator.square(2)).toBe(4);
    expect(calculator.square(5)).toBe(25);
    expect(calculator.square(-3)).toBe(9);
  });
  
  test('returns 0 when null or undefined is provided', () => {
    expect(calculator.square(null)).toBe(0);
    expect(calculator.square(undefined)).toBe(0);
  });

  test('non numeric values should return 0', () => {
    expect(calculator.square('a')).toBe(0);
    expect(calculator.square('abc')).toBe(0);
  }
  );

  // Factorial tests

test('calculates the factorial of a number', () => {
  expect(calculator.factorial(0)).toBe(1);
  expect(calculator.factorial(1)).toBe(1);
  expect(calculator.factorial(2)).toBe(2);
  expect(calculator.factorial(3)).toBe(6);
  expect(calculator.factorial(4)).toBe(24);
  expect(calculator.factorial(5)).toBe(120);
  expect(calculator.factorial(6)).toBe(720);
  expect(calculator.factorial(7)).toBe(5040);
  expect(calculator.factorial(8)).toBe(40320);
  expect(calculator.factorial(9)).toBe(362880);
  expect(calculator.factorial(10)).toBe(3628800);});

test('returns 0 when null or undefined is provided', () => {
  expect(calculator.factorial(null)).toBe(0);
  expect(calculator.factorial(undefined)).toBe(0);
});

test('returns 0 when a negative number is provided', () => {
  expect(calculator.factorial(-1)).toBe(0);
  expect(calculator.factorial(-2)).toBe(0);
  expect(calculator.factorial(-3)).toBe(0);
  expect(calculator.factorial(-4)).toBe(0);
  expect(calculator.factorial(-5)).toBe(0);
});

test('returns 0 when a decimal number is provided', () => {
  expect(calculator.factorial(0.5)).toBe(0);
  expect(calculator.factorial(1.3435)).toBe(0);
});

test('returns 0 when a string is provided', () => {
  expect(calculator.factorial('a')).toBe(0);
  expect(calculator.factorial('abc')).toBe(0);
});
// Square root tests

test('calculates the square root of a number', () => {
  expect(calculator.sqrt(1)).toBe(1);
  expect(calculator.sqrt(4)).toBe(2);
  expect(calculator.sqrt(9)).toBe(3);
  expect(calculator.sqrt(100)).toBe(10);
});
test('calculates the square root of a decimal number', () => {
  expect(calculator.sqrt(0.25)).toBe(0.5);
  expect(calculator.sqrt(0.64)).toBe(0.8);
  expect(calculator.sqrt(0.81)).toBe(0.9);
  expect(calculator.sqrt(1.21)).toBe(1.1);
});
test('calculates the square root of a negative number', () => {
  expect(() => calculator.sqrt(-1)).toThrow('Cannot square root negative numbers');
  expect(() => calculator.sqrt(-2)).toThrow('Cannot square root negative numbers');
});
test('calculates the square root of irrational numbers', () => {
  expect(calculator.sqrt(2)).toBeCloseTo(1.414, 3);
  expect(calculator.sqrt(3)).toBeCloseTo(1.732, 3);
  expect(calculator.sqrt(5)).toBeCloseTo(2.236, 3);
  expect(calculator.sqrt(6)).toBeCloseTo(2.449, 3);
});
test('returns 0 when null or undefined is provided', () => {
  expect(calculator.sqrt(null)).toBe(0);
  expect(calculator.sqrt(undefined)).toBe(0);
});
 
test('calculates the square root of 0', () => {
  expect(calculator.sqrt(0)).toBe(0);
});

test('non numeric values should return 0', () => {
  expect(calculator.sqrt('a')).toBe(0);
  expect(calculator.sqrt('abc')).toBe(0);
});



