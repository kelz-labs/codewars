/**
 * Task: remove format waktu di dalam string yang diberikan. For example:
 *
 * Friday May 2, 7pm => Friday May 2
 */

function solution(longDate) {
  return longDate.split(",")[0];
}

console.log(solution("Friday May 2, 7pm"));
