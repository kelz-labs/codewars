/**
 * Soal: pakailah ternary operator untuk menentukan range harga hotdog based on jumlah hotdog yang dibeli
 * - if total hotdog >= 10 then total hotdog * 90;
 * - if total hotdog >= 5 and total hotdog < 10 then total hotdog * 95;
 * - if total hotdog < 5 then total hotdog * 100
 */

function saleHotDogs(n) {
  return n >= 10 ? n * 90 : n >= 5 && n < 10 ? n * 95 : n * 100;
}

console.log(saleHotDogs(4));
