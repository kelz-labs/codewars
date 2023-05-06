function findCaterer(budget, people) {
  const basicBuffet = budget - people * 15;
  const economyBuffet = budget - people * 20;
  const premiumBuffet = budget - people > 60 ? people * 20 * 0.2 : people * 20;

  if (
    premiumBuffet < economyBuffet &&
    premiumBuffet < basicBuffet &&
    premiumBuffet >= 0
  )
    return 3;
  if (economyBuffet < basicBuffet && economyBuffet >= 0) return 2;
  if (basicBuffet >= 0) return 1;

  return -1;
}

console.log(findCaterer(1500, 60));
