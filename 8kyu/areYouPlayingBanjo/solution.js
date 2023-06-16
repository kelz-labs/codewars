/**
 * Task:
 *
 * - Jika parameter name diawali dengan huruf R(baik lowercase maupun uppercase), maka return name + " plays banjo"
 * - Selain itu, maka return nama + " does not play banjo"
 */
const areYouPlayingBanjo = (name) =>
  `${name} ${
    name[0].toLowerCase() === "r" ? "plays banjo" : "does not play banjo"
  }`;
