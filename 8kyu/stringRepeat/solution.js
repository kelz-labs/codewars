/**
 * Task: buatlah sebuah fungsi yang mengembalikan string yang diulang-ulang sebanyak n kali
 */

function solution(n, s) {
  let newArr = new Array();

  for (let i = 0; i < n; i++) {
    newArr.push(s);
  }

  return newArr;
}
