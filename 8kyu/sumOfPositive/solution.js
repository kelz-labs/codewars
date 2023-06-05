/**
 * Task: Disajikan sebuah array yang berisi element number, maka return hasil penjumlahan bilangan positifnya
 */
function solution(arr) {
  const arrFilter = arr.filter((item) => item >= 0);
  return arrFilter.length === 0 ? 0 : arrFilter.reduce((a, b) => a + b);
}
