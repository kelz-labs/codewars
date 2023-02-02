/**
 * Task: ubah semua number di dalam array menjadi nilai kebalikannya(positif jadi negatif, dan sebaliknya)
 * Example: [1,2,3,4-5,-6] => [-1,-2,-3,-4,5,6]
 */

function invert(array) {
  return array.map((value) => -value);
}

console.log(invert([1, 2, 3, -5]));
