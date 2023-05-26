/**
 * Task: sort array yang diberikan, kemudian kembalikan nilai element pertama arraynya yang telah diisi dengan *** di selang seling hurufnya.
 */
function solution(a) {
  return a.sort()[0].split("").join("***");
}
