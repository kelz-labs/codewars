function position(letter) {
  return `Position of alphabet: ${
    Array.from(Array(26))
      .map((_, index) => index + 65)
      .map((item) => String.fromCharCode(item).toLowerCase())
      .indexOf(letter) + 1
  }`;
}
