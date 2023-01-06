/**
 * Soal: kuadratkan setiap bilangan yang ada. Misal 1234 -> jadi 14916, karena (1 * 1), (2 * 2), (3 * 3), (4, 4)
 */

function squareEveryDigit(num) {
  return Number(
    num
      .toString("")
      .split("")
      .map((value) => Number(value) * Number(value))
      .join("")
  );
}

console.log(squareEveryDigit(3212)); // expected: 9414
