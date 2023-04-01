/**
 * Task: hitunglah berapa banyak angka yang diperlukan untuk mengisi dan melengkapi suatu array yang berisi random number
 *
 * Example:
 * input = [1,2,4,5,7] => output = [3, 6].length = 2
 */
function solution(arr) {
  /**
   * Kita bakal pakai for loop disini, karena bakal bermain dengan index array nya
   * Buat dulu 2 variable array, satunya untuk sort dan satunya lagi untuk menampung hasil
   */
  const sortArr = arr.sort((a, b) => a - b);
  let newArr = new Array();

  for (let i = sortArr[0]; i <= sortArr[arr.length - 1]; i++) {
    if (!sortArr.includes(i)) newArr.push(i);
  }

  return newArr.length;
}

console.log(solution([1, 2, 4, 6, 7]));
