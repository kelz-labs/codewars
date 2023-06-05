/**
 * Task:
 */

function solution(A, B) {
  return B.toLowerCase()
    .split(A.toLowerCase())
    .filter((item) => item === "").length;
}

console.log(solution("abc", "abc"));
