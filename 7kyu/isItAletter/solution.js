function solution(character) {
  const exp = new RegExp(/[A-Za-z]/gi);
  return exp.test(character);
}
