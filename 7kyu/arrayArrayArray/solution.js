/**
 * Task:
 *
 * - Jika nilai di dalam x semuanya bertipe data number, maka scorenya adalah hasil penjumlahan nilai tersebut
 * - Jika salah satu nilai di dalam x bertipe data string, maka scorenya adalah nilai yang bertipe data number
 * - Jika string semua, maka return 'void'
 */
// WIP
/**
 * function explode(x){
  // jika nilai di dalam x semuanya number, maka tambahin angka
  // jika cuma salah satu, maka score nya angka tersebut
  // jika tidak, return string 'Void!'
  // let newArr = new Array(x.find(value) => typeof value === 'string')
  let newArr = x.map((value) => typeof value);
  if(newArr.includes('string')) x.find((value) => typeof value === 'number');
}
 */
function solution(x) {}

console.log(solution(["a", 3])); // expected: [['a',3], ['a',3], ['a',3]]
