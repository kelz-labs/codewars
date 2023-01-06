/**
 * Task: kembalikan semua element dalam array, kecuali satu element yang paling kecil.
 * Jika element yang paling kecilnya ini ada lebih dari satu, maka hanya eliminasi satu element saja.
 */

function removeSmallest(numbers) {
  let smallest = Math.min(...numbers);
  let filteredNumbers = numbers.filter((value) => value === smallest);
  let newArr = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== smallest) newArr.push(numbers[i]);
  }

  if (filteredNumbers.length > 1) newArr.push(smallest);

  return newArr;
}

console.log(removeSmallest([2, 2, 1, 2])); // expected: [2,3,4,5]
