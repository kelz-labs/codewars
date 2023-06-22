/**
 * Task:
 */
function solution(classPoints, yourPoints) {
  const averagePoints =
    (classPoints.reduce((a, b) => a + b) + yourPoints) / classPoints.length;
  return averagePoints > yourPoints ? false : true;
}
