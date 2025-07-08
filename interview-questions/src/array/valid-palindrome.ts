import { performance } from "perf_hooks";

function ans1(text: string): void {
  const startTime = performance.now();
  let ans: boolean;

  const clean = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = clean.split("").reverse().join("");
  ans = clean === reversed;
  const endTime = performance.now();
  console.log("Answer: " + ans);
  console.log(`Performance Time ${endTime - startTime} ms`);
}

function isAlphaNumeric(char: string): boolean {
  return /[a-z0-9]/i.test(char);
}

function ans2(text: string): void {
  const startTime = performance.now();
  let ans: boolean = true;

  let left = 0,
    right = text.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(text[left])) left++;
    while (left < right && !isAlphaNumeric(text[right])) right--;

    if (text[left].toLowerCase() !== text[right].toLowerCase()) {
      ans = false;
      break;
    }

    left++;
    right--;
  }

  const endTime = performance.now();
  console.log("Answer: " + ans);
  console.log(`Performance Time ${endTime - startTime} ms`);
}

export function validPalindrome(): void {
  console.log("-Valid Palindrome");
  ans1("A man, a plan, a canal: Panama");
  ans2("A man, a plan, a canal: Panama");

  ans1("race a car");
  ans2("race a car");
}
