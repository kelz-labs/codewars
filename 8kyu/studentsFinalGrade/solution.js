/**
 * Task: return hasil dengan beberapa kriteria berikut:
 *
 * - Jika nilai exam > 90 ATAU project yang diselesaikan ada 10, maka return 100
 * - Jika nilai exam > 75 DAN minimum project yang diselesaikan 5, maka return 90
 * - Jika nilai exam > 50 DAN minimum project yang diselesaikan 2, maka return 75
 */
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if (exam > 75 && projects >= 5) return 90;
  if (exam > 50 && projects >= 2) return 75;

  return 0;
}
