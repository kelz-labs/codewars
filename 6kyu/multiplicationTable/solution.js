const multiplicationTable = function (size) {
  return new Array(3)
    .fill(new Array(3).fill(null))
    .map((item, index) =>
      item.map((item2, index2) => (index > 0 ? index2 + 3 : index2 + 1))
    );
};

console.log(multiplicationTable(3));
