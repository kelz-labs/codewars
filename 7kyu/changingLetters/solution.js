function solution(string) {
  return string.map((value) =>
    value.match(/[aiueo]/gi) ? value.toUpperCase() : value
  );
}
