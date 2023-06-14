/**
 * Task: implementasi XOR
 * - Jika a === true, dan b juga === true, maka return false
 * - Jika salah satu dari a atau b bernilai true, maka return true
 * - Jika false semua, maka return false
 */
const solution = (a, b) =>
  (a && b) === true ? false : (a || b) === true ? true : false;
