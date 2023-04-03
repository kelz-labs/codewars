/**
 * Task:
 * - Kembalikan hasil nilai yang telah disort dari terkecil sampai terbesar jika nilai parameter d adalah "R"
 * - Jika tidak, maka kembalikan hasil sort dari terbesar sampai terkecil.
 */

function solution(d, a) {
  return a.sort((a, b) => (d === "R" ? a - b : b - a));
}

console.log(solution("R", [3, 2, 3, 1, 2]));
