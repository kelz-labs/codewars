/**
 * Task: Buatlah sebuah fungsi yang mempunyai 2 parameter, dan mereturn string dengan ketentuan berikut:
 *
 * Jika parameter x === y, maka return "Tie!"
 * Jika parameter x < y, maka return x
 * Selain itu, return y
 */
function solution(x, y) {
  function sumTotal(str) {
    return str
      .toLowerCase()
      .split("")
      .map((item) => item.charCodeAt(0) - 96)
      .reduce((a, b) => a + b);
  }

  return sumTotal(x) === sumTotal(y)
    ? "Tie!"
    : sumTotal(x) > sumTotal(y)
    ? x
    : y;
}
