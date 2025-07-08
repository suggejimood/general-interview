import { performance } from "perf_hooks";

function ans1(text: string): boolean {
  const stack: string[] = [];
  const map: Record<string, string> = { ")": "(", "}": "{", "]": "[" };

  for (const ch of text) {
    if (ch === "(" || ch === "{" || ch === "{") {
      stack.push(ch);
    } else {
      if (stack.pop() !== map[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

export function validParentheses(): void {
  console.log("-Valid Parentheses");
  const startTime = performance.now();
  const answer = ans1("()[]{}");
  const endTime = performance.now();
  console.log("Answer: " + answer);
  console.log(`Performance Time ${endTime - startTime} ms`);
}
