import { performance } from "perf_hooks";

//BigO -> O(n logn)
function ans1(nums: number[], target: number): void {
  const startTime = performance.now();

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      left = mid; //return
      break;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  const endTime = performance.now();
  console.log("Answer: " + left);
  console.log(`Performance Time ${endTime - startTime} ms`);
}

export function searchInsertPosition(): void {
  ans1([1, 3, 5, 6], 5);
  ans1([1, 3, 5, 6], 2);
}
