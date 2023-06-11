/**
 * Task: sort array berdasarkan length elementnya
 */
const solution = (array) =>
  array.sort((a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return 0;
  });
