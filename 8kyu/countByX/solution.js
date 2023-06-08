/**
 * Task:
 * x = jarak antar bilangan
 * n = length yang diinginkan
 */
function solution(x, n) {
  return new Array(n).fill(null).map((item, index) => (index + 1) * x);
}
