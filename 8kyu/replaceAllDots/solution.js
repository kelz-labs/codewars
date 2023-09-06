function solution(str) {
  return str.split("").map((item) => (item === "." ? (item = "-") : item).join("");
}
