/**
 * Task: buat sebuah skema kalkulator sederhana
 */
const Calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return y === 0 ? false : x / y;
  },
};

console.log(Calculator.add(1, 23));
