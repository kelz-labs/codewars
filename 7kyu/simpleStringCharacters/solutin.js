/**
 * Task: buatlah fungsi yang menerima parameter berupa string, dan mengembalikan sebuah array yang berisi panjang(length) karakter yang terdiri dari uppercase, lowercase, number, dan special character.
 *
 * Contoh:
 * - Input = ""*'&ABCDabcde12345"", Output = [4,5,5,3]
 *
 * Urutannya: [uppercase, lowercase, number, specialCharacters]
 */

function solution(s) {
  const upper = s.match(/[A-Z]/g)?.length;
  const lower = s.match(/[a-z]/g)?.length;
  const num = s.match(/[0-9]/g)?.length;
  const specialChar = s.match(/[^A-Za-z0-9]/g)?.length;

  return new Array(
    upper ? upper : +0,
    lower ? lower : +0,
    num ? num : +0,
    specialChar ? specialChar : +0
  );
}

console.log(solution("*'&ABCDabcde12345"));
