/**
 * Task: test string greetings(pake schema regex), apakah termasuk salah satu dari daftar sapaan halo di berbagai negara
 *
 * hello - english
 * ciao - italian
 * salut - french
 * hallo - german
 * hola - spanish
 * ahoj - czech republic
 * czesc - polish
 */

function solution(greetings) {
  const reg = /^.*(\/|hello|ciao|salut|hallo|hola|ahoj|czesc).*$/gm;
  return reg.test(greetings.toLowerCase());
}

console.log(solution("salut juga"));
