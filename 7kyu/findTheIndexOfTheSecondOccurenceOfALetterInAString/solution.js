/**
 * Task: return bilangan ke-2 dari sebuah array yang telah ditentukan.
 * Clue: pake indexOf
 */
function solution(s, symbol) {
  return s.indexOf(symbol, s.indexOf(symbol) + 1);
}

console.log(solution("abcdea", "a"));
