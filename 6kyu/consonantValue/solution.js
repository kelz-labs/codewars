/**
 * Task: get the highest value from each character element in the array
 */
const solution = (s) =>
  s
    .split(/[aiueo]/gi)
    .filter((item) => item !== "")
    .map((item) =>
      item
        .split("")
        .map((item2) => item2.charCodeAt(0) - 96)
        .reduce((a, b) => a + b)
    )
    .sort((a, b) => b - a)[0];

console.log(solution("strength"));
