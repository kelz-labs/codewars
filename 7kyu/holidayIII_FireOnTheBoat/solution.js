/**
 * Task: Ubahlah kata "Fire" pada string menjadi "~~"
 */
function solution(s) {
  return s.split(" ").map((value) => (value === "Fire" ? "~~" : value));
}
