/**
 * Task: Buatlah sebuah fungsi yang mereturn hasil penjumlahan dari element-element yang bernilai genap
 * Note: jika array kosong, maka kembalikan array kosong juga
 */

function sumEvenNumbers(input) {
  // prevent if input.length is 0 or no value inside it
  if (input.length === 0) return [];

  let newArr = [];

  for (let i = 0; i <= input.length; i++) {
    if (input[i] % 2 === 0) newArr.push(input[i]);
  }

  return newArr.reduce((a, b) => a + b);
}
