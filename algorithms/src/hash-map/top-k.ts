import { performance } from "perf_hooks";

//BigO -> O(n logn)
function ans1(nums: number[], k: number): void {
  const startTime = performance.now();

  const map = new Map<number, number>();

  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  const result = sorted.slice(0, k).map((entry) => entry[0]);

  const endTime = performance.now();
  console.log("Answer: " + result);
  console.log(`Performance Time ${endTime - startTime} ms`);
}

export function topK(): void {
  ans1([1, 1, 1, 2, 2, 3], 2);
}
