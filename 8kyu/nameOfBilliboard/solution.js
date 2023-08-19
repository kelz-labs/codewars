/**
 * Note: ga boleh pake simbol perkalian (*)
 */
function solution(name, price = 30) {
  return name
    ? name
        .split("")
        .map((item) => (item = price))
        .reduce((a, b) => a + b)
    : price;
}
