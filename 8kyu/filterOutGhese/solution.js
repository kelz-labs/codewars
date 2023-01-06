/**
 * Soal: Filter atau saringlah semua karakter yang ada di dalam array birds.
 * - Jika element di array birds ada tidak ada di array geese, maka itulah yang akan direturn
 */

// Pake filter
function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((value) => (!geese.includes(value) ? value : null));
}

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);

// Atau sebenarnya bisa juga pake for loop
function gooseFilterForLoop(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let newArr = new Array();

  for (let i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) newArr.push(birds[i]);
  }

  return newArr;
}

console.log(
  gooseFilterForLoop([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);
