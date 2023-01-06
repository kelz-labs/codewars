/**
 * Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
 *
 * Note: a and b are not ordered!
 *
 * Examples (a, b) --> output (explanation)
 */

function getSum(a, b) {
  return a === b ? 1 : a + b;
}

console.log(getSum(1, -1));
