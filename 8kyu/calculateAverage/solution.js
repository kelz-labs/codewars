/**
 * Task: hitunglah Mean dari sebuah array yang berisi number semua. Jika arraynya kosong atau tidak ada nilainya, maka return 0
 */
function solution(arr) {
  return arr.length === 0 ? 0 : arr.reduce((a, b) => a + b) / arr.length;
}
