/**
 * Task: hitung jumlah potongan dalam satu kubus dan jumlahkan dengan kubus lainnya.
 */

function disemvowel(cuts) {
  let result = 0;

  if (cuts === 0) return 1;

  for (let i = 0; i <= cuts; i++) {
    result = 6 * (i * i) + 2;
  }

  return result;
}

console.log(disemvowel(0));
