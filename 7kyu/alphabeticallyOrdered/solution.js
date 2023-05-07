/**
 * Task: Return boolean berdasarkan urutan alphabet
 * - Jika sesuai urutan alphabet(dari awal sampai akhir), maka return true
 * - Jika tidak, walaupun hanya satu huruf yang salah, maka return false
 */
function solution(s) {
  return (
    s ===
    s
      .split("")
      .sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      })
      .join("")
  );
}

console.log(solution("ads"));
