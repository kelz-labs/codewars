// gambaran awal
function solution() {
  return (
    [
      [7, 4, 11, 11, 14],
      [22, 14, 17, 11, 3],
    ]
      .map((value) =>
        value
          .map((item) =>
            String.fromCharCode(item + 97) === String.fromCharCode(104) ||
            String.fromCharCode(item + 97) === String.fromCharCode(119)
              ? String.fromCharCode(item + 97).toUpperCase()
              : String.fromCharCode(item + 97)
          )
          .join("")
      )
      .join(", ") + String.fromCharCode(33)
  );
}
