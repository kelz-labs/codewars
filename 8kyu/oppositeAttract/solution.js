/**
 * Task: return true jika salah satu dari flower ada yang bernilai ganjil. Selain itu salah.
 */

function lovefunc(flower1, flower2) {
  if (flower1 % 2 !== 0 && flower2 % 2 !== 0) return false;
  return flower1 % 2 !== 0 || flower2 % 2 !== 0 ? true : false;
}
