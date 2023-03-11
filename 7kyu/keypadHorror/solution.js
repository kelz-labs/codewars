/**
 * Task: Susunan keypad satuan(alias yang dijual terpisah gitu) berbeda dengan keypadnya punya handphone
 *
 * Gambaran keypad yang satuan:
 * 7 8 9
 * 4 5 6
 * 1 2 3
 *
 * Keypad handphone:
 * 1 2 3
 * 4 5 6
 * 7 8 9
 *
 * Ubahlah format dari keypad satuan tadi ke handphone
 * Contoh: "789" => "123"
 *
 * Note: nilai yang dihasilkan mesti berupa string yang hanya bernilai angka
 */
function solution(numbers) {
  return numbers
    .split("")
    .map((value) =>
      value == 7
        ? "1"
        : value == 8
        ? "2"
        : value == 9
        ? "3"
        : value == 1
        ? "7"
        : value == 2
        ? "8"
        : value == 3
        ? "9"
        : value
    )
    .join("");
}

console.log(solution("123456789"));
