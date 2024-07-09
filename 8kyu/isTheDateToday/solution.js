function solution(date) {
  if (date.toDateString() !== new Date().toDateString()) return false;
  return true;
}
