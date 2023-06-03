/**
 * Task: Urutkan dari terbesar ke yang kecil. Input berupa angka terbesar yang akan diubah ke array
 */
function solution(n) {
  let newArr = [];

  for (let i = n; i >= 1; i--) {
    newArr.push(i);
  }

  return newArr;
}

console.log(solution(5));
