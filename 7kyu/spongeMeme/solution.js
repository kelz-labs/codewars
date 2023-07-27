function solution(sentence) {
  return sentence
    .split("")
    .map((item, index) =>
      index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()
    )
    .join("");
}
