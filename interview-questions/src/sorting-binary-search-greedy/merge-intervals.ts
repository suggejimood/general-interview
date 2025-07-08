import { performance } from "perf_hooks";

//BigO -> O(n logn)
function ans1(nums: number[][]): number[][] {
  if (nums.length <= 1) {
    return nums;
  }

  let result: number[][] = [];

  nums.sort((a, b) => a[0] - b[0]);

  let current = nums[0];

  for (let i: number = 1; i < nums.length; i++) {
    const next = nums[i];

    if (current[1] >= next[0]) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      result.push(current);
      current = next;
    }
  }

  result.push(current);

  return result;
}

export function mergeInterval(): void {
  const startTime = performance.now();
  let result = ans1([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]);
  const endTime = performance.now();
  console.log(`Performance Time ${endTime - startTime} ms`);
  console.log("Answer: " + result);
}
