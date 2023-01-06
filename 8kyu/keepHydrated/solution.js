/**
 * Soal: Tentukan total liter air yang diminum oleh Nathan selama bersepeda.
 *
 * - Karena setiap 1 jam, Nathan meminum 0.5L air, maka Rumusnya: time * liter
 * - Tapi kita disuruh untuk mengambil nilai yang telah dibulatkan ke bilangan yang terkecil.
 * - Jadi disini kita pakai Math.floor() untuk pembulatan bilangan ke yang terkecil
 */

function litres(time) {
  return Math.floor(time * 0.5);
}
