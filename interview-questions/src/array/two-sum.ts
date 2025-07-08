import { performance } from "perf_hooks";

//BigO -> O(n^2)
function ans1(nums: number[], target: number): void {
  const startTime = performance.now();
  let ans: number[] = [];

  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        ans.push(i, j);
      }
    }
  }

  const endTime = performance.now();
  console.log("Answer is: " + ans);
  console.log(`Performance Time ${endTime - startTime} ms`);
}

//BigO -> O(n)
function ans2(nums: number[], target: number): void {
  const startTime = performance.now();
  let ans: number[] = [];
  const map = new Map<number, number>();
  console.log(map);

  for (let i: number = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;

    if (map.has(complement)) {
      ans.push(map.get(complement)!, i);
      break;
    }

    map.set(current, i);
  }

  const endTime = performance.now();
  console.log("Answer is: " + ans);
  console.log(`Performance Time ${endTime - startTime} ms`);
}

export function arrayTwoSum() {
  console.log("-Array Two Sum");
  ans1([11, 15, 2, 7], 9);
  ans2([11, 15, 2, 7], 9);
}
