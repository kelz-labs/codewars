/**
 * Task: temukan element yang ada di arr1 berdasarkan element dari arr2
 */
function solution(arr1, arr2) {
  if (!arr1.length || !arr2.length) return [];

  let newArr = [];

  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr1[arr2[i]]);
  }

  return newArr.includes(undefined) ? [] : newArr;
}
