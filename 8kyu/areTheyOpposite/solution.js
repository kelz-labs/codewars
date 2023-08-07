function solution(s1, s2) {
  return s1.length
    ? s1
        .split("")
        .map((item) =>
          item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()
        )
        .join("") === s2
      ? true
      : false
    : false;
}
