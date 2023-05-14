/**
 * Task:
 * - Jika parameter bernilai 0, maka return 1
 * - Jika parameter bernilai 1, maka return 2
 * - Selain angka tersebut, return hasil kuadrat antara 20 dengan nilai parameternya
 */
function solution(n) {
  if (n === 0) return 1;
  if (n === 1) return 20;

  let value = 1;

  for (let i = 1; i <= n; i++) {
    value *= 20;
  }

  return value;
}
