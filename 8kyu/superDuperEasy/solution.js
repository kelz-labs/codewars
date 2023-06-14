/**
 * Task: Return "Error" jika parameter x bernilai string, jika number, maka kalikan bilangannya dengan 50 kemudian ditambah 6
 */
function solution(x) {
  return typeof x === "string" ? "Error" : x * 50 + 6;
}
