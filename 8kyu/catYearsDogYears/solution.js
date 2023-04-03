/**
 * Task:
 */
// Pake for

const humanYearsCatYearsDogYears = (humanYears) => {
  /*
  Poin penting soal: 
  return [humanYears, catYears, dogYears]

  NOTES:

    humanYears >= 1
    humanYears are whole numbers only

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that

  */
  let sameYears = 15;
  return [
    humanYears,
    humanYears < 1 && humanYears === 1
      ? sameYears
      : humanYears === 2
      ? sameYears + 9
      : sameYears + 9 * (humanYears - 2),
  ];
};

console.log(humanYearsCatYearsDogYears(10));
