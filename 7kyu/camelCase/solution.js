/**
 * Task: ubahlah format string yang diberikan menjadi camelCase. Hiraukan penggunaan kapital di huruf pertama, jadi terserah mau kapital atau nggak
 */

// Disini saya me-match semua karakter selain alphabet dan number
function solution(str) {
  let reg = /[^A-Za-z0-9]/;
  return (
    str.split(reg)[0] +
    str
      .split(reg)
      .slice(1)
      .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
      .join("")
  );
}

console.log(solution("Samsung_Galaxy_J2._Prime"));
