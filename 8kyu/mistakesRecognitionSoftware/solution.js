function correct(string) {
  return string
    .split("")
    .map((item) =>
      item === "5" ? "S" : item === "0" ? "O" : item === "1" ? "I" : item
    )
    .join("");
}
