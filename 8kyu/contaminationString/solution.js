/**
 * Task:
 * - return string kosong jika salah satu atau kedua parameter text dan char itu string kosong
 * - return character sepanjang length si text jika tidak ada satupun text atau char yang bernilai string kosong
 */
const solution = (text, char) =>
  char === "" || text === ""
    ? ""
    : text
        .split("")
        .map((item) => (item = char))
        .join("");
