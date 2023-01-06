function flatten(arr) {
  return new Array().concat(new Array(), arr);

  // bisa juga pake flate()
  /**
   * return arr.flat()
   */
}

console.log([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]);
