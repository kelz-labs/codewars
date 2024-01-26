function func(item) {
  // return "string" if the result from convert to number is NaN
  if (isNaN(Number(item))) return "string";

  // if even number, return true. Otherwise, return false
  return Number(item) % 2 === 0 ? true : false;
}

function map(arr, someFunction) {
  // check if typeof someFunction is not equal with function
  if (typeof someFunction !== "function") {
    return "given argument is not a function";
  }

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(someFunction(arr[i]));
  }

  // check if pushed array including "string"
  return newArr.includes("string")
    ? "array should contain only number"
    : newArr;
}
