function derDieDas(wort) {
  let matchWort = wort
    .split("")
    .filter((value) => value.match(/[aiueoäüö]/gi)).length;
  return matchWort < 2
    ? `das ${wort}`
    : matchWort >= 2 && matchWort <= 3
    ? `die ${wort}`
    : `der ${wort}`;
}
