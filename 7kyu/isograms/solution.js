/**
 * Task: buat sebuah fungsi dimana akan mereturn true jika tidak ada salah satu huruf yang sama satu sama lain, return false jika sama.
 * Note: ignore upperCase too
 * Example: "Mickey" => true, "GroOvy" => false
 */

function isograms(str) {
  const strLower = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (strLower[i] === strLower[j]) return false;
    }
  }

  return true;
}

console.log(isograms("Animekan"));
