import { performance } from "perf_hooks";

//BigO -> O(n logn)
function ans1(nums: number[], k: number): void {
  const startTime = performance.now();

  let result: number;
  nums.sort((a, b) => b - a);
  result = nums[k - 1];

  const endTime = performance.now();
  console.log("Answer: " + result);
  console.log(`Performance Time ${endTime - startTime} ms`);
}

export function kth(): void {
  ans1([3, 2, 1, 5, 6, 4], 2);
}
