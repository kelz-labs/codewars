/**
 * Task: Periksalah sebuah string itu apakah mengandung semua daftar huruf alphabet atau tidak.
 * - Jika ada satu saja huruf alphabet yang tidak ada di string tersebut, maka return false
 * - Jika ada semua, maka return true
 */

function solution(string) {
  // buat manual daftar alphabet
  let criteria = "abcdefghijklmnopqrstuvwxyz";

  // atau generate sendiri
  return [...Array(26)]
    .map((item, index) => String.fromCharCode(index + 97))
    .map((item) => string.toLowerCase().split("").includes(item))
    .includes(false)
    ? false
    : true;
}

console.log(solution("abcdefghijklmnopqrstuvwxy"));
