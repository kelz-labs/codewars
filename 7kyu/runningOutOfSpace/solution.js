/**
 * Task: gabungkan string setelah string index ke[0]
 * Gambaran:
 *
 * ["a", "b", "c"] => ["a", "ab", "a,c"]
 */
function solution(arr) {
  return arr.map((item) =>
    item === arr[0] ? item : arr[0].concat(arr.slice(1, index + 1).join(""))
  );
}
