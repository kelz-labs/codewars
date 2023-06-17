/**
 * Task: Return kriteria ideal dari hasil BMI
 */
function bmi(weight, height) {
  const result = weight / (height * height);
  return result <= 18.5
    ? "Underweight"
    : result <= 25.0
    ? "Normal"
    : result <= 30.0
    ? "Overweight"
    : "Obese";
}
