/**
 * Cek sebuah string itu apakah palindrome atau bukan. For example:
 * aba => true
 * Aba => true
 * anime => false
 */
function solution(x) {
  return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}
