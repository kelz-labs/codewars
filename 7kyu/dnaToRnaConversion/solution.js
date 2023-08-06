function solution(dna) {
  return dna
    .split("")
    .map((item) => item.replace("T", "U"))
    .join("");
}
