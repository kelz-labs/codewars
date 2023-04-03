/**
 * Task:
 */
function titleToNumber(title) {
  return title
    .split("")
    .map((value) => value.toLowerCase().charCodeAt(0) - 96)
    .reduce((a, b) => b + a);
}

console.log(titleToNumber("AA"));
