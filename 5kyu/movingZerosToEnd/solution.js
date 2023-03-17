/**
 * Task: buatlah sebuah fungsi yang mempunyari parameter berupa array
 * - Pindahin semua angka nol(0) yang ada di dalam array tersebut ke urutan terakhir.
 *
 * Example: [1,0,0,2,3,4,"a", "n"] => [1,2,3,4,"a","n",0,0]
 */
function moveZeros(arr) {
  /**
   * Buat 2 array baru.
   * - Satunya untuk nampung angka 0
   * - Satunya lagi nampung karakter selain 0
   */
  let zero = [];
  let otherThanZero = [];

  arr.map((value) => {
    if (value === 0) zero.push(value);
    else otherThanZero.push(value);
  });

  return otherThanZero.concat(zero);
}
