/**
 * Task: remove element duplikat yang ada di element array
 * Example:
 *
 * [1,2,3,4,1,1] => [1,2,3,4]
 */

function solution(a) {
  return [...new Set(a)];
}
