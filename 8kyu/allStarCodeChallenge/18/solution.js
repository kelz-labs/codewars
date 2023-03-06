/**
 * Task: Buatlah sebuah fungsi yang mengembalikan length(banyak) elemen dalam string str yang sama dengan letter
 */

function solution(str, letter) {
  return str.split("").filter((value) => value === letter).length;
}

console.log(solution("Haikel", "l"));
