/**
 * Task: remove semua element dalam array yang indexnya tidak habis dimoduluskan dengan dua.
 */
function removeEveryOther(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }

  // atau pake filter + indexOf
  return arr.filter((item, index) => arr.indexOf(item) % 2 === 0);
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
