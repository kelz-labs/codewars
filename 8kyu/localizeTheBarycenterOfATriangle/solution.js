/**
 * Jadi, dalam soal ini kita disuruh median
 * Ibaratkanlah: a = (x ,y)
 *
 * Nah untuk mencari hasil final x dan y, kita perlu menjumlahkan masing-masing x, juga y dan membaginya dengan 3, lalu pakein Math.round() untuk pembulatan
 */

/*
function barTriang(p1, p2, p3) {
  const newArr = new Array(p1, p2, p3);
  const value1 =
    newArr.map((value) => value[0]).reduce((acc, current) => acc + current) / 3;
  const value2 =
    newArr.map((value) => value[1]).reduce((acc, current) => acc + current) / 3;

  return new Array(
    Math.round(value1 * 10000) / 10000,
    Math.round(value2 * 10000) / 10000
  );
}
*/

// cara lain
function barTriang(p1, p2, p3) {
  const newArr = new Array(p1, p2, p3);
  return new Array(
    Number(
      (
        newArr.map((value) => value[0]).reduce((acc, prev) => prev + acc) / 3
      ).toFixed(4)
    ),
    Number(
      (
        newArr
          .map((value) => value[value.length - 1])
          .reduce((acc, prev) => prev + acc) / 3
      ).toFixed(4)
    )
  );
}

console.log(barTriang(10, 20, 30));
