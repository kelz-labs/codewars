/**
 * Task: return nilai string kecuali untuk huruf a i u e o
 */
const solution = (string) =>
  string
    .split("")
    .filter((item) => item.match(/[^aiueo]/gi))
    .join("");

console.log(solution("abcde"));
