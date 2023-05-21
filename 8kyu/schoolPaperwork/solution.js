/**
 * Diketahui sebuah fungsi dengan 2 parameter, n untuk jumlah siswa, dan m untuk jumlah halaman untuk 1 paperwork
 * Task: Hitunglah jumlah kertas yang dibutuhkan agar semua siswa kebagian. Jika salah satu parameter nilainya < 0, maka return 0
 */
function solution(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}
