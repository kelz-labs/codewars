function isPrime(num) {
  let newArr = [];

  if (num === 1 || num <= 0) return false;
  if (num === 2) return true;

  for (let i = 2; i < num; i++) {
    newArr.push(num % i !== 0);
  }

  return newArr.includes(false) ? false : true;
}
