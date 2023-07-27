function solution(word) {
  return word
    .split("")
    .map((item, index) => (item === item.toUpperCase() ? index : ""))
    .filter((item) => item !== "");
}
