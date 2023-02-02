/**
 * Task:
 *
 * - Ganti setiap kata "coverage" dengan "covfefe".
 * - Jika tidak ada kata "coverage" dalam string tersebut, maka tambahkan "covfefe di akhir stringnya"
 */
function covfefe(str) {
  return str.includes("coverage")
    ? str
        .split(" ")
        .map((value) =>
          value.includes("coverage")
            ? value.replace("coverage", "covfefe")
            : value
        )
        .join(" ")
    : `${str} covfefe`;
}

console.log(
  covfefe(
    "jkk1v ing6hcovfefeqiu7 yb8bh jy7oq 3enj2 fww8bcoverage331fa gfjua 6xkp9 axett"
  )
);
