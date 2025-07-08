import { performance } from "perf_hooks";

//BigO -> O(n logn)
function ans1(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => num);
}

export function topK(): void {
  console.log("-top k");
  const startTime = performance.now();
  const result = ans1([1, 1, 1, 2, 2, 3], 2);
  const endTime = performance.now();
  console.log("Answer: " + result);
  console.log(`Performance Time ${endTime - startTime} ms`);
}
