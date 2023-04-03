/**
 * Task: Kurangkan antara nilai terbesar dengan nilai terkecil dalam suatu array
 *
 * Example: [1,2,3,4,5,6]
 *
 * Max = 6, Min = 1
 * Max - Min = 5
 */
function solution(num) {
  const newArr = num.sort((a, b) => a - b);
  return newArr[newArr.length - 1] - newArr[0];
}

console.log(solution([11, 2, 3, 4, 5, 6]));
