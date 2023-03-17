/**
 * Task: buatlah sebuah fungsi yang mempunyari parameter angka
 * - Return angka * 8 jika angka tersebut adalah angka genap
 * - Return angka * 9 jika angka tersebut bukan angka genap
 */

function solution(num) {
  return num * (num % 2 === 0 ? 8 : 9);
}
