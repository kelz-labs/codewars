/**
 * Task: factorialkan angka yang diberikan. Dalam hal ini, angkanya berada di dalam array, setelah itu dijumlahkan
 */

function solution(arr) {
  return arr
    .map((value) => {
      const newArr = [];

      for (let i = value; i >= 1; i--) {
        newArr.push(i);
      }

      return newArr.reduce((a, b) => a * b);
    })
    .reduce((a, b) => a + b);
}
