/**
 * Task: Buatlah sebuah fungsi yang mereturn nilai reverse dari kata-kata yang diberikan
 *
 * Example
 *
 * Input: double spaces
 * Output: elbuod secaps
 */

function solution(str) {
  return str
    .split(" ")
    .map((value) => value.split("").reverse().join(""))
    .join(" ");
}

console.log(solution("double spaces"));
