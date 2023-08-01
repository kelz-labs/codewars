function solution(number) {
  return (
    number *
    new Array(number.toString().match(/[^-]/gi)?.length)
      .fill(5)
      .reduce((a, b) => a * b)
  );
}
