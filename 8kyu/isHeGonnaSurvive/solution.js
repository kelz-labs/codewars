/**
 * Question: A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive? Return true if yes, false otherwise :)
 *
 * Task: Kembalikan true jika nilai bullets >= dragons, jika tidak maka return false. Setiap dragon setara dengan 2 bullets.
 */
function solution(bullets, dragons) {
  return bullets >= dragons * 2 ? true : false;
}
