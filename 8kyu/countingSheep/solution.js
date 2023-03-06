/**
 * Task: Buatlah sebuah fungsi yang mengembalikan panjang/banyak element yang bernilai true di suatu array
 */
function countSheeps(arrOfSheep) {
  return arrOfSheep.filter((value) => value === true).length;
}

console.log(countSheeps([true, false, true, true, true]));
