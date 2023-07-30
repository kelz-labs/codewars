function solution(arr) {
  const arrSort = arr.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;

    return 0;
  });

  return arr.length === 1
    ? [arr[0], arr[0]]
    : [arrSort[0], arrSort[arr.length - 1]];
}
