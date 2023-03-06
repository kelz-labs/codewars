/**
 * Task: buatlah sebuah fungsi yang mengembalikan nilai berupa boolean
 * - Jika nilai n habis ...rest, maka kembalikan true
 * - Jika ada salah satu yang tidak bisa habis dibagi atau bahkan semuanya, maka kembalikan false
 */
function solution(n, ...rest) {
  let result = rest.map((value) => (value % n === 0 ? true : false));
  return result.includes(false) ? false : true;
}

console.log(solution(8, 3, 4, 2, 5));
