/**
 * Task: diberikan sebuah nested array yang semuanya berisi angka
 *
 * - Tentukan angka minimum/paling kecil dalam array tersebut!
 * - Setelah ditentukan, maka jumlah semua angka tadi
 */

function sumOfMinimums(str) {
  return str
    .map((value) => value.sort((a, b) => a - b)[0])
    .reduce((a, b) => b + a);
}

console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ])
);
