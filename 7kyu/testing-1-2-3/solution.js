/**
 * Task:
 * - Jika array bernilai kosong, maka return array kosong juga.
 * - Jika tidak, maka return array sesuai format
 */
function solution(array) {
  return array === []
    ? []
    : array.map((item, index) => `${index + 1}: ${item}`);
}
