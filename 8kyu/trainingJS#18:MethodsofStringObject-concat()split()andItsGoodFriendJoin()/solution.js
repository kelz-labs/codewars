function solution(string, separator) {
  return string
    .split(" ")
    .map((item) => item.split("").join(separator))
    .join("");
}
