/**
 * Task: ambil nilai tengah dari sebuah string kemudian return kan
 */
const getMiddle = (s) =>
  s.length % 2 === 0
    ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
    : s.slice(s.length / 2 - 0.5, s.length / 2 + 0.5);
