/**
 * Task: buatlah sebuah fungsi bernama maskify yang berfungsi untuk menyembunyikan hampir semua karakter yang diberikan, kecuali 4 karakter terakhir.
 * Example: input = "242492204234" => output = "########4234"
 */
function maskify(cc) {
  function confirmSlice(str, start, target) {
    return str.slice(start, target);
  }

  const hiddenNum = confirmSlice(cc, 0, cc.length - 4)
    .split("")
    .map((value) => (value = "#"))
    .join("");
  const showedNum = confirmSlice(cc, cc.length - 4, cc.length);

  return cc.length > 4 ? hiddenNum + showedNum : cc;
}

console.log(maskify("Skippy")); // expected: ##ippy
