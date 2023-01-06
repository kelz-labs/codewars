function XO(str) {
  // ubah dulu stringnya ke lowercase
  const strLow = str.toLowerCase();

  // tangkap jumlah nilai x
  const x = strLow.split("").filter((value) => value.includes("x"));

  // tangkap jumlah nilai o
  const o = strLow.split("").filter((value) => value.includes("o"));

  if (!strLow.includes("x") && !strLow.includes("o")) return true;
  if (x.length === o.length) return true;
  else return false;
}

console.log(XO("Oo"));
