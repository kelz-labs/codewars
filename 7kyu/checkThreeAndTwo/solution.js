function checkThreeAndTwo(array) {
  let newArr = [[], [], []];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "a") {
      newArr[0].push(array[i]);
    } else if (array[i] === "b") {
      newArr[1].push(array[i]);
    } else if (array[i] === "c") {
      newArr[2].push(array[i]);
    }
  }

  if (
    (newArr[0].length === 3 && newArr[1].length === 2) ||
    (newArr[0].length === 2 && newArr[1].length === 3) ||
    (newArr[0].length === 3 && newArr[2].length === 2) ||
    (newArr[1].length === 3 && newArr[2].length === 2) ||
    (newArr[1].length === 2 && newArr[2].length === 3) ||
    (newArr[2].length === 3 && newArr[0].length === 2)
  ) {
    return true;
  }

  return false;
}
