function solution(a) {
  const numToAlphabet = a.map((item) => String.fromCharCode(item + 64));
  return numToAlphabet.includes("B") &&
    numToAlphabet.includes("I") &&
    numToAlphabet.includes("N") &&
    numToAlphabet.includes("G") &&
    numToAlphabet.includes("O")
    ? "WIN"
    : "LOSE";
}
