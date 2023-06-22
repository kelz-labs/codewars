/**
 * Task:
 * - Jika angka dalam stringnya bernilai < 5, maka ganti angka tersebut dengan 0
 * - Jika angka dalam stringnya bernilai >= 5, maka ganti angka tersebut dengan 1
 */
function solution(bin) {
  return bin
    .split("")
    .map((item) => (Number(item) < 5 ? 0 : 1))
    .join("");
}
