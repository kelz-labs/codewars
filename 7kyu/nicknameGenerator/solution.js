function solution(name) {
  return name.length < 4
    ? "Error: Name too short"
    : name[2].match(/[aiueo]/gi)
    ? name.slice(0, 4)
    : name.slice(0, 3);
}
