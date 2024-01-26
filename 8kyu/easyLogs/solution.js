function logs(x, a, b) {
  function logarithm(a, b) {
    return Math.log(a) / Math.log(b);
  }

  return logarithm(a, x) + logarithm(b, x);
}
