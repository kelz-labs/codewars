/**
 * Task: perbaiki kode return yang berada di dalam functionnya
 */
function solution(name) {
  /**
   * Awalnya kayak gini:
   *
   * return "Hello, " + name + "!";
   * if(name === "Johnny")
   *   return "Hello, my love!";
   */

  // hasil perbaikan
  return `Hello, ${name === "Johnny" ? "my love" : name}!`;
}
