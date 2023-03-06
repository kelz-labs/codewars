/**
 * Task: buatlah fungsi yang mereturn greeting. Format greeting:
 *
 * "Hello <name>!"
 */

let greet = function (name) {
  return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
};

console.log(greet("Haikel"));
