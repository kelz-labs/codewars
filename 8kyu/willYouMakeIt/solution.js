function solution(distanceToPump, mpg, fuelLeft) {
  if (mpg * fuelLeft - distanceToPump >= 0) return true;
  else return false;
}
