/**
 * Task: return sesuai format
 */

function solution(str) {
  return str.split(" ").map((item) => `${item} ${item.length}`);
}
