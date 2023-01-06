/**
 * Task: Remove semua tanda seru(!) dari sebuah string.
 * Example: "Saya tuch!" => "Saya tuch"
 */

function removeExclamationFirst(s) {
  return s.match(/[^i]/gi).join("");
}

console.log(removeExclamationFirst("Saya tuch!"));
