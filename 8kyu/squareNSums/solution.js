/**
 * Task: kuadratkan setiap element number yang ada di dalam array, dan jumlahkan semuanya
 */

function solution(arr) {
  // reduce((accumulator, previousValue) => accumulator + previousValue, defaultValue)
  return arr.map((value) => value * value).reduce((a, b) => b + a, 0);
}

console.log(solution([1, 2, 3, 4])); // expected: 1 + 4 + 9 + 16 = 30
