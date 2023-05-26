/**
 * Task: refactor function yang tersedia jadi sependek mungkin. Functionnya dipakai untuk mereturn nilai item di dalam list yang sama dengan element yang diminta.
 * - Kriterianya mesti kurang dari 85 kata.
 * - Jadi kita pake arrow function untuk membantu kita meraih itu
 */
const find = (arr, elem) =>
  arr.indexOf(elem) === -1 ? "Not found" : arr.indexOf(elem); // 73 kata
