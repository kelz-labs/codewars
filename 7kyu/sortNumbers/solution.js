function solution(nums) {
  if (nums === null || nums === []) return [];

  return nums.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
}
