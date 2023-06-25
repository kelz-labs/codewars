/**
 * Task: jumlahkan bilangan dari rentang parameter n sampai sebelum m, dengan syarat
 * - Daftar bilangan yang dijumlahkan mestilah naik setiap langkah sebesar n
 * - Jika salah satu parameter bernilai <= 0, maka return "INVALID"
 *
 * For example:
 *
 * solution(2, 10) => [2, 4, 6, 8] => 20
 * solution(0, 10) => "INVALID"
 */

function solution(n, m) {
  if (n <= 0 || m <= 0) return "INVALID";

  let newArr = [];

  for (let i = n; i < m; i++) {
    newArr.push(i);
  }

  return newArr.filter((item) => item % n === 0).reduce((a, b) => a + b);
}
