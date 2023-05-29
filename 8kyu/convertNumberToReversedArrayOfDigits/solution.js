/**
 * Task: ubahlah parameter berupa nilai number yang diberikan ke sebuah reversed array
 * For Example:
 *
 * 12345 => [5, 4, 3, 2, 1]
 */
function solution(n) {
  // return n.toString().split("").map((item) => Number(item)).reverse()
  // atau pake for loop juga bisa
  let arr = n.toString().split("");
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(Number(arr[i]));
  }

  return newArr;
}

console.log(solution(12345));
