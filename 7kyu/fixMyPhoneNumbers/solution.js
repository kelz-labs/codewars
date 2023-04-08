/**
 * Task: cek apakah sebuah string itu terdapat format nomor telepon atau tidak, dengan ketentuan:
 * - Angka pertama mesti diawali dengan nol
 * - Panjang string nomor telepon haruslah pas 11, tidak kurang juga tidak lebih
 */
function solution(str) {
  const matchStr = str.match(/[0-9]/gi)?.join("");
  const notPhoneNumber = "Not a phone number";

  if (matchStr === undefined) return notPhoneNumber;
  return matchStr[0] !== "0" || matchStr.length !== 11
    ? notPhoneNumber
    : matchStr;
}

console.log(solution("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"));
