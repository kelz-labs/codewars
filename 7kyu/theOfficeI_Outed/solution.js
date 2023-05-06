/**
 *
 */
function outed(meet, boss) {
  const values = Object.values(meet);
  return values.reduce((a, b) => a + b) / values.length <= 5
    ? "Get Out Now!"
    : "Nice Work Champ!";
}
