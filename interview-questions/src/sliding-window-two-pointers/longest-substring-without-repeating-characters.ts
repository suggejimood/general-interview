import { performance } from "perf_hooks";

function ans(text: string): void {
  const startTime = performance.now();

  let set = new Set<string>();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < text.length; right++) {
    while (set.has(text[right])) {
      set.delete(text[left]);
      left++;
    }

    set.add(text[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  const endTime = performance.now();
  console.log("Answer: " + maxLength);
  console.log(`Performance Time ${endTime - startTime} ms`);
}

export function longestSubstringWithoutRepeatingCharacters(): void {
  console.log("-Longest Substring Without Repeating Characters");
  ans("abcabcbb");
  ans("pwwkew");
}
