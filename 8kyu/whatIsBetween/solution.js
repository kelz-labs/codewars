/**
 * Task: return urutan angka dalam array yang berada di antara a dan b
 */

function between(a, b) {
  let arr = [];

  for (let i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr;
}
