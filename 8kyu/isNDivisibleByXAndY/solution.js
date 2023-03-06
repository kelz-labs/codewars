/**
 * Task: buatlah sebuah fungsi yang mengembalikan nilai boolean
 *
 * - Menerima 3 parameter: n sebagai nilai utama, x dan y sebagai pembagi
 * - Jika nilai n habis dibagi x juga y, maka kembalikan true
 * - Jika ada salah satu yang tidak bisa habis dibagi atau bahkan semuanya, maka kembalikan false
 */

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false;
}
