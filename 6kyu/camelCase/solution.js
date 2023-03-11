/**
 * Task: buatlah sebuah fungsi yang mengembalikan string yang sudah camelCase, dengan huruf pertama atau paling depan mesti kapital
 * Contoh: haikel haikel haikel => HaikelHaikelHaikel
 */

String.prototype.camelCase = function () {
  return (
    (this.split(" ")[0][0]?.toLowerCase() || "") +
    this.split(" ")
      .slice(1)
      .map((value) => value[0].toUpperCase() + value.slice(1))
      .join("")
  );
};
