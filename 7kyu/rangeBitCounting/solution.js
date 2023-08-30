/**
 * Task:
 * - Buat array yang berisi element number yang sudah ditentukan.
 * - Kemudian ubah masing-masing element ke binary, dan jumlahkan.
 * - Setelah itu, jumlahkan semua element yang ada di dalam array
 */

function rangeBitCount(a, b) {
  if (a === b) return 1;
  return new Array(b - a + 1)
    .fill(null)
    .map((item, index) =>
      eval((item + a + index).toString(2).split("").join(" + "))
    )
    .reduce((a, b) => a + b);
}
