/**
 * Task:
 *
 * - Buatlah sebuah fungsi yang mempunyai parameter volume dan panjang salah satu sisi dari sebuah kubus.
 * - Fungsi tersebut harus mengembalikan nilai, dimana kita mengecek panjang sisi kubus atau volume yang diberikan tidak boleh lebih dari atau sama dengan 0
 * - Panjang sisi tersebut jika dikuadratkan tiga, maka hasilnya akan dengan volume
 */

function cubeChecker(volume, side) {
  return side <= 0 || volume <= 0
    ? false
    : Math.pow(side, 3) === volume
    ? true
    : false;
}
