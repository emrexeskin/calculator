function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 0;
      }
    if (a == null || b == null) return 0;
    return a + b;
  }
  
  function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 0;
      }
    if (a == null || b == null) return 0;
    return a - b;
  }
  
  function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 0;
      }
    if (a == null || b == null) return 0;
    return a * b;
  }
  
  function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 0;
      }
    if (a == null || b == null) return 0;
    if (b === 0) throw new Error('Cannot divide by zero');
    return a / b;
  }
  function square(a) {
    if (typeof a !== 'number') {
        return 0;
      }
    if (a == null) return 0;
    return a * a;
  }

  function factorial(n) {
    if (typeof n !== 'number') {
        return 0;
      }
    if (n % 1 !== 0) return 0;
    if (n === 1) return 1;
    if (n == null || n < 0) return 0; 
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }

  function sqrt(n) {
    if (typeof n !== 'number') {
        return 0;
      }
    if (n == null) return 0;
    if (n < 0) throw new Error('Cannot square root negative numbers');
    return Math.sqrt(n);
  }

module.exports = {  add, subtract, multiply, divide, square, factorial, sqrt}