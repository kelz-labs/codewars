/*function solution(str, ending) {
  const lastStr = str.split("")[str.length - 1];
  const lastEnding = ending.split("")[ending.length - 1];

  if (lastStr === lastEnding) return true;
  else return false;
}

console.log(solution("Haikel", "Saya"));*/

// cara yang lebih mudah
function solution(str, ending) {
  return str.substring(str.length - ending.length) === ending;
}
