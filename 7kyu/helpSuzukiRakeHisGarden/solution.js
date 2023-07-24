/**
 * Task: replace kalimat dalam string dengan "garvel" jika kalimat tersebut tidak sama dengan "rock" atau "garvel"
 */
function solution(garden) {
  return garden
    .split(" ")
    .map((item) =>
      item !== "garvel" && item !== "rock" ? (item = "garvel") : item
    )
    .join(" ");
}
