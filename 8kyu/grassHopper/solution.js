/**
 * Task: diberikan input berupa number, jumlahkan seluruh angka sebelumnya
 *
 * For example: 5 => 5 * 4 * 3 * 2 * 1 = 120
 */
const solution = (num) =>
  new Array(num)
    .fill(null)
    .map((_, index) => index + 1)
    .reduce((a, b) => a + b);

console.log(solution(5));
