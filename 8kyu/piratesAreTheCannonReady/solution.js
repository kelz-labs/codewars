function cannonsReady(gunners) {
  return Object.values(gunners).some((item) => item === "nay")
    ? "Shiver me timbers"
    : "Fire!";
}
