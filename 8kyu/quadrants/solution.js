/**
 * Task ini berkaitan dengan sistem koordinat kartesius yang menyinggung kuadran.
 * Gambaran kuadran:
 *
 *    II     |     I
 *    III    |     IV
 *
 * Jadi, tugasnya adalah mengidentifikasi suatu koordinat yang diberikan, termasuk kuadran yang mana?
 */
function solution(x, y) {
  return x < 0 && y < 0 ? 3 : x > 0 && y > 0 ? 1 : x < 0 && y > 0 ? 2 : 4;
}
