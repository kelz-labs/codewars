/**
 * Task: return element yang nilainya paling kecil dalam sebuah array
 */
class Solution {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

const solution = new Solution();
console.log(solution.findSmallestInt([12312, 124, 1, , 2312, 214, 4, 5, 6]));
