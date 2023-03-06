/**
 * Task: Buatlah sebuah fungsi yang mereturn nilai pembagi terbesar di antara kedua bilangan yang diberikan
 */

function divisor(x, y) {
  return y !== 0 ? divisor(y, x % y) : x;
}
