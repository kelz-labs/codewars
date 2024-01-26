function solution(str) {
  let newArr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    newArr.push(str[i]);
  }

  return newArr.join("");
}

console.log(solution("Test 123456"));
