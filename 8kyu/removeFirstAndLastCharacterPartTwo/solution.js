/**
 * Task: remove element pertama dan terakhir, dan jika jumlah element dalam string <= 2, maka return null
 */
function solution(string) {
  const newArr = string.split(", ");

  if (newArr.length > 2) {
    return newArr.splice(1, newArr.length - 2).join(" ");
  }

  return null;
}
