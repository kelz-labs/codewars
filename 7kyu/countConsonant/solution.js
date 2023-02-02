/**
 * Task: Buatlah sebuah fungsi yang mereturn jumlah dari huruf selain konsonan yang ada dalam sebuah string.
 * Contoh huruf konsonan seperti: a, i, u, e, dan o
 *
 * Note:
 *
 * - Selain mematch huruf konsonan, juga mematch karakter selain alphabet, termasuk spasi juga
 */

function consonantCount(str) {
  const matchStr = str.toLowerCase().match(/[^aiueo0-9!@#$%^&*_ ]/gi)?.length;
  return matchStr === undefined ? 0 : matchStr;
}

console.log(consonantCount("aaaaaaaa"));
