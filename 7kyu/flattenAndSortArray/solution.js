/**
 * Task: sort element dalam array termasuk array 2 dimensi secara ascending
 */

function solution(arr) {
  return arr.flat().sort((a, b) => a - b);
}

console.log(solution([1, 2, 3, 4, [5, 6, 7], [[123]]]));
