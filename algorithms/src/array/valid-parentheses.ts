import { performance } from "perf_hooks";

function ans(text: string): void {
  const startTime = performance.now();
  let ans: boolean = true;

  const stack: string[] = [];
  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);

  for (let ch of text) {
    if (map.has(ch)) {
      const top = stack.pop();
      if (top !== map.get(ch)) {
        ans = false;
      }
    } else {
      stack.push(ch);
    }
  }

  if (stack.length !== 0) {
    ans = false;
  }

  const endTime = performance.now();
  console.log("Answer: " + ans);
  console.log(`Performance Time ${endTime - startTime} ms`);
}

export function validParentheses(): void {
  console.log("-Valid Parentheses");
  ans("()[]{}");
  ans("([)]");
}
