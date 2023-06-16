/**
 * Task: return hasil convert bilangan binary ke number biasa, dengan mengabaikan bilangan 0. Jadi hanya angka 1 yang dipakai
 */
const eliminateUnsetBits = (number) =>
  number.includes(1)
    ? parseInt(
        number
          .split("")
          .filter((item) => Number(item) === 1)
          .join(""),
        2
      )
    : 0;
