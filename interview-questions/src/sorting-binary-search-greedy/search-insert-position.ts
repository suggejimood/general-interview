import { performance } from "perf_hooks";

//BigO -> O(n logn)
function ans1(nums: number[], target: number): number {
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

export function searchInsertPosition(): void {
  const startTime = performance.now();
  const result = ans1([1, 3, 5, 6], 5);
  const endTime = performance.now();
  console.log("Answer: " + result);
  console.log(`Performance Time ${endTime - startTime} ms`);
}
