/**
 * Soal: hitung banyak args dalam fungsi
 * Misal: countArgs(1,2,3,4) -> hasilnya: 4, karena banyak argumennya adalah 4
 */

function args_count(args1, ...args) {
  return arguments.length;
}

console.log(args_count(1, 2, 3, 4));
