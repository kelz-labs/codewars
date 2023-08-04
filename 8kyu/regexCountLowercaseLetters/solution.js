function solution(str) {
  const strMatch = str.match(/[a-z]/g)?.length;
  return strMatch === undefined ? 0 : strMatch;
}
