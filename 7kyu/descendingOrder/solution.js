/**
 * Task: sort numbernya secara descending
 * Kita ubah dulu ke string agar bisa kita jadiin array terlebih dahulu
 */

function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .map((item) => Number(item))
      .sort((a, b) => b - a)
      .join("")
  );
}
