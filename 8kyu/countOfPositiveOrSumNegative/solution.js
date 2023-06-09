/**
 * Task: Return sebuah array dengan length 2 yang berisi:
 * - Jika element dalam arraynya positif dan lebih dari 0, maka hitung ada berapa element positifnya
 * - Jika element dalam arraynya negatif dan kurang dari 0, maka jumlahkan semua element negatifnya
 */

function countPositivesSumNegatives(input) {
  return input !== []
    ? new Array(
        input.filter((item) => item > 0).length,
        input.filter((item) => item < 0).reduce((a, b) => a + b)
      )
    : [];
}
