/**
 * Task: return hasil penjumlahan dari poin-poin yang ada di dalam array.
 * Format tiap element: "x:y"
 * Poin didapat dengan syarat sebagai berikut:
 *
 * - Jika x > y, maka dapat 3 poin.
 * - Jika x < y, maka dapat 0 poin.
 * - Jika x = y, maka dapat 1 poin.
 */
function solution(games) {
  return games
    .map((item) => {
      const itemSplit = item.split(":");
      const x = Numberr(itemSplit[0]);
      const y = Numberr(itemSplit[1]);

      if (x > y) item = 3;
      if (x < y) item = 0;
      if (x === y) item = 1;

      return item;
    })
    .reduce((a, b) => a + b);
}
