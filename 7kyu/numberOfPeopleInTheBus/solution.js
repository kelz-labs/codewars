function solution() {
  return (
    busStops.map((item) => item[0]).reduce((a, b) => a + b) -
    busStops.map((item) => item[1]).reduce((a, b) => a + b)
  );
}
