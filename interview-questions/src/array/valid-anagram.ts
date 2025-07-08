import { performance } from "perf_hooks";

//BigO -> O(n)
function ans1(text: string, anagram: string): void {
  const startTime = performance.now();
  let ans: boolean = true;

  if (text.length !== anagram.length) {
    ans = false;
  }

  const map = new Map<string, number>();

  for (const ch of text) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (const ch of anagram) {
    if (!map.has(ch)) {
      ans = false;
      break;
    }

    map.set(ch, map.get(ch)! - 1);
    if (map.get(ch)! < 0) {
      ans = false;
      break;
    }
  }

  const endTime = performance.now();
  console.log("Answer: " + ans);
  console.log(`Performance Time ${endTime - startTime} ms`);
}

//BigO -> O(n logn)
function ans2(text: string, anagram: string): void {
  const startTime = performance.now();
  let ans: boolean = false;

  if (text.split("").sort().join("") === anagram.split("").sort().join("")) {
    ans = true;
  }

  const endTime = performance.now();
  console.log("Answer: " + ans);
  console.log(`Performance Time ${endTime - startTime} ms`);
}

export function validAnagram(): void {
  console.log("-Valid Anagram");
  ans1("anagram", "nagaram");
  ans2("anagram", "nagaram");
}
