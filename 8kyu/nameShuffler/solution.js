/**
 * Task: tukar antara index 0 dengan index terakhir dalam suatu string yang diberikan
 */
function solution(str) {
  const strSplit = str.split(" ");
  return strSplit.map((item) =>
    strSplit[0] === item
      ? (item = strSplit[strSplit.length - 1])
      : strSplit[strSplit.length - 1] === item
      ? (item = strSplit[0])
      : item
  );
}
