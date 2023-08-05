function solution(list) {
  if (list.length === 0) return 0;

  const sortedList = list.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;

    return 0;
  });

  return sortedList[sortedList.length - 1] - sortedList[0];
}
