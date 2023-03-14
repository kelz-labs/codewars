/**
 * Task: buatlah sebuah fungsi yang mereturn hasil konversi string biasa ke string kode morse
 */
function solution(str) {
  const a = ".-";
  const b = "-...";
  const c = "-.-.";
  const d = "-..";
  const e = ".";
  const f = "..-.";
  const g = "--.";
  const h = "....";
  const i = "..";
  const j = ".---";
  const k = "-.-";
  const l = ".-..";
  const m = "--";
  const n = "-.";
  const o = "---";
  const p = ".--.";
  const q = "--.-";
  const r = ".-.";
  const s = "...";
  const t = "-";
  const u = "..-";
  const v = "...-";
  const w = ".--";
  const x = "-..-";
  const y = "-.--";
  const z = "--..";

  return str
    .toLowerCase()
    .match(/[a-z1-10 ]/gi)
    .map((value) =>
      value === "a"
        ? a
        : value === "b"
        ? b
        : value === "c"
        ? c
        : value === "d"
        ? d
        : value === "e"
        ? e
        : value === "f"
        ? f
        : value === "g"
        ? g
        : value === "h"
        ? h
        : value === "i"
        ? i
        : value === "j"
        ? j
        : value === "l"
        ? l
        : value === "m"
        ? m
        : value === "n"
        ? n
        : value === "o"
        ? o
        : value === "p"
        ? p
        : value === "q"
        ? q
        : value === "r"
        ? r
        : value === "s"
        ? s
        : value === "t"
        ? t
        : value === "u"
        ? u
        : value === "v"
        ? v
        : value === "w"
        ? w
        : value === "x"
        ? x
        : value === "y"
        ? y
        : value === "z"
        ? z
        : null
    )
    .join(" ");
}

console.log(solution("Hello world"));
