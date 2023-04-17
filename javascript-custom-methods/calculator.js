/* exported calculator */

const calculator = {
  add(x, y) {
    const a = x + y;
    return a;
  },

  subtract(x, y) {
    const b = x - y;
    return b;
  },

  multiply(x, y) {
    const c = x * y;
    return c;
  },

  divide(x, y) {
    const d = x / y;
    return d;
  },

  square(x) {
    const e = x * x;
    return e;
  },

  sumAll(numbers) {
    let f = 0;
    for (let i = 0; i < numbers.length; i++) { f += numbers[i]; }
    return f;
  },

  getAverage(numbers) {
    const g = [];
    for (let i = 0; i < numbers.length; i++) {
      g.push(numbers[i]);
    }
    let h = 0;
    for (let i = 0; i < g.length; i++) { h += g[i]; }
    const z = h / g.length;
    return z;
  }
};
