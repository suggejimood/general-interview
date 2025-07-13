function ans(nums: number[], target: number): any {
  let left = 0;
  let right = nums.length - 1;

  nums = nums.sort((a, b) => a - b);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
