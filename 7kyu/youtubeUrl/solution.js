/**
 * Task: kembalikan format youtube untuk embed video yang benar
 */
function solution(str) {
  return `https://www.youtube.com/embed/${str.slice(
    str.length - 11,
    str.length
  )}`;
}
