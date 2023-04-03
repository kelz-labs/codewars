/**
 * Task: diberikan sebuah array yang isinya string dan number, kembalikan hasil pengurangan antara hasil penjumlahan seluruh number dengan hasil penjumlahan seluruh string
 * Example: [1, 2, 3, "1", "3", "4"] => [1, 2, 3] - ["1", "3", "4"] = -2
 */

function solution(x) {
  let num = new Array();
  let strNum = new Array();

  x.map((value) =>
    typeof value === "string" ? strNum.push(Number(value)) : num.push(value)
  );

  return (
    (num.length === 0 ? 0 : num.reduce((a, b) => a + b)) -
    (strNum.length === 0 ? 0 : strNum.reduce((a, b) => a + b))
  );
}

console.log(solution([1, 2, 3, 4, 5, "4", "5"]));
