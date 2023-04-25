// gambaran awal
function solution() {
  return [
    [7, 4, 11, 11, 14],
    [22, 94, 17, 11, 3],
  ]
    .map((value) =>
      value.map((item) => String.fromCharCode(item + 97)).join("")
    )
    .join(" ");
}
