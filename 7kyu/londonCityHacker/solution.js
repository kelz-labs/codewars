function londonCityHacker(journey) {
  return journey.map((value) => (typeof value === "string" ? 2.4 : 1.5));
}

console.log(londonCityHacker(["Piccadilly", 56, 93, 243, 20, 14]));
