/**
 * Task: jumlahkan integer secara berurutan(seperti operasi perkalian) sampai limit yang ditentukan
 */
function solution(integer, limit) {
  let newArr = [];

  for (let i = 1; i <= limit / integer; i++) {
    newArr.push(integer * i);
  }

  return newArr;
}
