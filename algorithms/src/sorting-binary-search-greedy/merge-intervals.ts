import { performance } from "perf_hooks";

function ans1(intervals: number[][]): void {
  const startTime = performance.now();

  let result: number[][] = [];

  if (intervals.length <= 1) {
    result = intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  let current = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const next = intervals[i];

    if (current[1] >= next[0]) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      result.push(current);
      current = next;
    }
  }

  // Son kalan aralığı da ekle
  result.push(current);

  const endTime = performance.now();
  console.log("Answer: " + result);
  console.log(`Performance Time ${endTime - startTime} ms`);
}

export function mergeInterval(): void {
  ans1([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]);
}
