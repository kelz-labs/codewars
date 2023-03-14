/**
 * Task: buatlah sebuah fungsi yang mereturn nilai false tanpa secara langsung menyatakan nilai false sebelumnya
 */
function solution() {
  function chuck(str) {
    return str === "ha! good luck!";
  }

  return chuck("haha good luck");
}

console.log(solution());
