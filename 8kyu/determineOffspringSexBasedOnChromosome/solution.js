/**
 * Task: buatlah sebuah fungsi yang mengembalikan sebuah string, dimana diberikan parameter yang isinya kromosom.
 * - Jika parameternya terdapat kromosom "Y", maka kembalikan string "Congratulations! You're going to have a son."
 * - Jika tidak, maka kembalikan string "Congratulations! You're going to have a daughter."
 */
function solution(chromosome) {
  return chromosome.includes("Y")
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}
