/**
 * Task: return sesuai kriteria, dimana jika
 *
 * - old < 14, return "drink toddy"
 * - old < 18, return "drink coke"
 * - old < 21, return "drink beer"
 * - greater than that, return "drink whisky"
 */

const peopleWithAgeDrink = (old) =>
  `${
    old < 14
      ? "drink toddy"
      : old < 18
      ? "drink coke"
      : old < 21
      ? "drink beer"
      : "drink whisky"
  }`;
