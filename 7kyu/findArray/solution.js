// WIP
// arr1.filter((item) => arr1.indexOf(item) === )
function findArray<T extends Array<string | number>>(arr1: T, arr2: T) {
  return arr1.map((item) => arr2.map((item2) => arr1.indexOf(item)))//.filter((item3) => !item3.includes(false))
}

console.log(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]))