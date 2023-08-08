function solution(theVariables) {
  return eval(
    theVariables
      .split("")
      .map((item) => (item.match(/[+]/gi) ? item : item.charCodeAt(0) - 96))
      .join("")
  );
}
