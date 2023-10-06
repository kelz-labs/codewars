function sillycase(silly) {
  const a = silly.split("");
  const b = a
    .splice(0, a.length % 2 !== 0 ? Math.ceil(a.length / 2) : a.length / 2)
    .map((item) => item.toLowerCase());

  return b.concat(a.map((item) => item.toUpperCase())).join("");
}
