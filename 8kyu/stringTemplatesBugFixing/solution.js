/**
 * Task: perbaiki format template string sehingga menghasilkan output yang sesuai saat testing
 */
function buildString(...template) {
  return `I like ${template.join(", ")}!`;
}

console.log(buildString("Coklat", "Susu", "Kopi"));
