function solution(divisor, bound) {
  let arr = [];

  for (let i = divisor; i <= bound; i++) {
    arr.push(i + divisor);
    if (i + divisor <= bound) break;
  }

  const result = arr.filter((item) => item % divisor === 0);
  return result[result.length - 1];
}
