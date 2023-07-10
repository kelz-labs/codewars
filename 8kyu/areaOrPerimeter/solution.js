/**
 * Task: Buatlah sebuah fungsi yang mempunyai parameter l(length), dan w(width). Parameter ini bisa membentuk persegi ataupun persegi panjang.
 * Mereturn nilai dengan kriteria berikut
 *
 * - Jika l = w, maka return hasil pencarian keliling persegi
 * - Jika l != w, maka return hasil pencarian keliling persegi panjang
 */
function solution(l, w) {
  return l === w ? l * w : (l + w) * 2;
}
