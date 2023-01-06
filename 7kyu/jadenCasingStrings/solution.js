/**
 * Task: buat setiap huruf awal jadi Uppercase, dan huruf belakangnya tetap jadi huruf kecil
 * Example: anime apakah itu bang? -> Anime Apakah Itu Bang?
 */

String.prototype.toJadenCase = function () {
  return this.split
    .map((value) => value[0].toUpperCase() + value.slice(1).toLowerCase())
    .join(" ");
};
