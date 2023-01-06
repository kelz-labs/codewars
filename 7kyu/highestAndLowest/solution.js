/**
 * Task: kembalikan nilai angka dalam suatu string dari yang terbesar dan terkecil.
 * Example: "-1 2 3 4 -5" -> "4 -5"
 */

function highestAndLowest(numbers) {
  const arr = numbers.split(/\s/gi).sort((a, b) => a - b); // [1, 2, 3, 4, 5]
  return new Array(arr[arr.length - 1], arr[0]).join(" ");
}

console.log(highestAndLowest("1 2 3 4 -5"));
