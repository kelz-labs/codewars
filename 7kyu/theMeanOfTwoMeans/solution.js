function solution(arr, x, y) {
  /**
   * cek apakah length arr === 0 atau nilai x <= 0 atau nilai y <= 0
   * jika benar, maka return -1
   */
  if (arr.length === 0 || x <= 0 || y <= 0) return -1;

  const arrMean = [
    arr.slice(0, x).reduce((a, b) => a + b) / x,
    arr.slice(arr.length - y).reduce((a, b) => a + b) / y,
  ];

  /**
   * cek apakah arrMean[0] <= 1 atau arrMean[1] <= 1 atau x > arr.length atau y > arr.length atau x <= 1 atau y <= 1
   * Jika benar, maka return -1
   */
  if (
    arrMean[0] <= 1 ||
    arrMean[1] <= 1 ||
    x > arr.length ||
    y > arr.length ||
    x <= 1 ||
    y <= 1
  )
    return -1;

  // operasi mean terakhir
  return arrMean.reduce((a, b) => a + b) / arrMean.length;
}
