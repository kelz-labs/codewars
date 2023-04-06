/*
 * Task: kembalikan 2 element terbesar, dimulai dari yang terkecil sampai ke terbesar
 */
function solution(n, arr) {
  return arr.sort((a, b) => a - b).slice(arr.length - n, arr.length);
}

console.log(solution(2, [7, 6, 5, 4, 3, 2, 1]));
