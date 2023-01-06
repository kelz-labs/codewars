/**
 * Task: buatlah sebuah function yang mengambil nilai sebuah string dan mereturnnya dengan kata vokal yang sudah diremove.
 * Example: "This website is for losers LOL!" -> "Ths wbst s fr lsrs LL"
 */

function disemvowel(str) {
  return str.match(/[^aiueo]/gi).join("");
}

console.log(disemvowel("This website is for losers LOL!"));
