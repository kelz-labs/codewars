function solution(number, power) {
  if (power === 0) return 1;
  return new Array(power).fill(number).reduce((a, b) => a * b);
}
