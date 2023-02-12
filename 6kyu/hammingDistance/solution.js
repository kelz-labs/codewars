/**
 * Task: buat sebuah fungsi yang mereturn jumlah element yang tidak sama dalam membandingkan dua parameter(dalam hal ini a dan b)
 */

function hamming(a, b) {
  let newArr = [];

  for (let i = 0; i <= a.length; i++) {
    if (a[i] !== b[i]) newArr.push(a[i]);
  }

  return newArr;
}

console.log(hamming("espresso", "Expresso"));
