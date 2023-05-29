/**
 * BELUM SELESAI!!!
 * Task:
 */
function maxProduct(a) {
  const newArr = new Float64Array(a).sort((a, b) =>
    a > b ? 1 : a < b ? -1 : 0
  );
  return newArr[newArr.length - 1] * newArr[newArr.length - 2];
}
