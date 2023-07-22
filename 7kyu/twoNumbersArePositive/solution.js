/**
 * Task: return true jika 2 parameter yang diberikan bernilai positif, selain itu false
 */
function solution(a, b, c) {
  return [a, b, c].filter((item) => item > 0).length === 2 ? true : false;
}
