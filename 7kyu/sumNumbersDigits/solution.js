/**
 * Task: jumlahkan setiap digit dalam elemen number yang diberikan.
 * - Jika ada digit yang bernilai negatif, maka ubah dulu ke positif
 */
function solution(number) {
  return (number < 0 ? number * -1 : number)
    .toString()
    .split("")
    .map((item) => Number(item))
    .reduce((a, b) => a + b);
}
