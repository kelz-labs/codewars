/**
 * Task: filter value angka yang ada di dalam sebuah string yang diberikan soal
 *
 * Example: "1aafd1skdf2" => 112
 */
function solution(value) {
  return Number(
    value
      .split("")
      .map((item) => Number(item))
      .filter((item) => !Number.isNaN(item))
      .join("")
  );
}
