/**
 * Task:
 *
 * Buatlah sebuah fungsi yang memfilter elemen yang sama dalam array tersebut
 */

const removeConsecutiveDuplicates = (s) => {
  let newArr = [];
  const arrSplit = s.split(" ");
  for (let i = 0; i <= arrSplit.length - 1; i++) {
    for (let j = i + 1; j <= arrSplit.length; j++) {
      if (arrSplit[i] === arrSplit[j]) {
        newArr.push(arrSplit[i]);
      }
    }
  }

  return newArr;
};

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma"));
