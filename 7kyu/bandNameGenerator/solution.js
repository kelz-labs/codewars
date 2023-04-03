/**
 * Task: buatlah sebuah fungsi yang mereturn string, dimana:
 * - Tambahin "The" jika karakter pertama dan terakhir parameter(string) nya sama
 * - Tambahin kalimat depan jika tidak sama
 *
 * Example: Anicui => The Anicui
 *          Aoa => AoAoa
 */

function bandNameGenerator(str) {
  return str[0] !== str[str.length - 1]
    ? `The ${str[0].toUpperCase() + str.slice(1)}`
    : `${str[0].toUpperCase() + str.slice(1, str.length - 1)}${str}`;
}
