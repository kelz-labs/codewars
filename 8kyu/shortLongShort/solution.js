/**
 * Task: Jika panjang param a > b, maka return string dengan format a + b + a, begitu juga sebaliknya.
 */
function solution(a, b) {
  return a.length > b ? b + a + b : a + b + a;
}
