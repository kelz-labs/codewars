/**
 * Task: buat sebuah fungsi yang memiliki mekanisme seperti sistem like di facebook, yang mereturn
 *
 * - Jika parameter berisi array kosong, maka return  "no one likes this"
 * - Jika parameter berisi array dengan length = 1, maka return "<array> likes this"
 * - Jika parameter berisi array dengan length = 2, maka return "<element1> and <element2> like this"
 * - Jika parameter berisi array dengan length = 3, maka return "<element1>, <element2> and <element3> like this"
 * - Jika lebih dari itu, maka return "<element1>, <element2> and <elementSisanya> like this"
 */

function likes(names) {
  const firstName = names[0];
  const secondName = names[1];
  const thirdName = names[2];
  const others = names.slice(2).length;

  if (names.length) {
    if (names.length === 1) return `${firstName} likes this`;
    if (names.length === 2) return `${firstName} and ${secondName} like this`;
    if (names.length === 3)
      return `${firstName}, ${secondName} and ${thirdName} like this`;

    return `${firstName}, ${secondName} and ${others} others like this`;
  }

  return "no one likes this";
}
