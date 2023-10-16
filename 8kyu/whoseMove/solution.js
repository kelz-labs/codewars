function solution(lastPlayer, win) {
  if (
    (lastPlayer === "black" && win === false) ||
    (lastPlayer === "white" && win === true)
  ) {
    return "white";
  }

  if (
    (lastPlayer === "white" && win === false) ||
    (lastPlayer === "black" && win === true)
  ) {
    return "black";
  }

  return;
}
