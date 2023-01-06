/**Soal:
 *
 * Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.
 *
 * A Pythagorean Triple consists of arranging 3 integers, such that:
 * a2 + b2 = c2
 *
 * Example: [5,3,4]
 *
 * 3^2 + 4^2 = 5^2
 */

function isPythagoreanTriple(integers) {
  const int1 = integers.sort((a, b) => a - b)[0];
  const int2 = integers.sort((a, b) => a - b)[1];
  const int3 = integers.sort((a, b) => a - b)[integers.length - 1];

  if (Math.pow(int1, 2) + Math.pow(int2, 2) === Math.pow(int3, 2)) {
    return true;
  } else return false;
}
