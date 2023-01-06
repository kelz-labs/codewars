/**
 * Task: buat sebuah fungsi untuk menghitung banyak huruf vokal dalam suatu string
 * Example: "abracadabra" -> 5
 */

function countVowel(str) {
  const matchStr = str.match(/[aiueo]/gi);
  if (matchStr === null) return 0;
  else return matchStr.length;
}

console.log(countVowel("Anime kan"));
