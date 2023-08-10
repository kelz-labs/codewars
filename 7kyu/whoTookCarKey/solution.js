function solution(message) {
  return message.map((item) => String.fromCharCode(parseInt(item, 2))).join("");
}

console.log(
  solution([
    "01000001",
    "01101100",
    "01100101",
    "01111000",
    "01100001",
    "01101110",
    "01100100",
    "01100101",
    "01110010",
  ])
); // result: "Alexander"
