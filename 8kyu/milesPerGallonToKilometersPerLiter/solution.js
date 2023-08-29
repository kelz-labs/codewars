/**
 * Hint:
 * - 1 Imperial Gallon = 4.54609188 litres
 * - 1 Mile = 1.609344 kilometres
 */
function solution(mpg) {
  return Number((mpg * (1.609344 / 4.54609188)).toFixed(2));
}
