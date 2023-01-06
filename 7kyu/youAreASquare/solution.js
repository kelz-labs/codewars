/**
 * Task: identifikasi bahwa sebuah nilai itu apakah bisa membentuk sebuah persegi sempurna atau tidak.
 * Example:
 *
 * 0 -> true
 * 1 -> false
 * 4 -> true
 * 25 -> true;
 */

function isSquare(n) {
  if (n === 0) return true;

  for (let i = 1; i <= n; i++) {
    if (n / i === i) return true;
  }

  return false;
}
