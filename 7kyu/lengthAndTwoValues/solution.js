/**
 * Task: kembalikan sebuah array yang lengthnya berdasarkan parameter n, dan valuenya selang seling antara firstValue dan secondValue
 */
function solution(n, firstValue, secondValue) {
  // ada 2 cara
  // 1. pake fill dan map
  return new Array(n)
    .fill(null)
    .map((item, index) => ((index + 1) % 2 === 0 ? secondValue : firstValue));

  // 2. pake for loop
  /*let newArr = [];

  for (let i = 1; i <= n; i++) {
    newArr.push(i % 2 === 0 ? secondValue : firstValue);
  }

  return newArr;*/
}
