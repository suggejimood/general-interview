import { performance } from "perf_hooks";

// BigO -> O(n)
function ans1(text: string): number {
  const map = new Map<string, number>();

  for (const ch of text) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let i: number = 0; i < text.length; i++) {
    if (map.get(text[i]) === 1) {
      return i;
    }
  }

  return -1;
}

function ans2(text: string): void {
  const startTime = performance.now();
  let ans: number = -1;

  for (let i = 0; i < text.length; i++) {
    if (text.indexOf(text[i]) === text.lastIndexOf(text[i])) {
      ans = i;
    }
  }
  const endTime = performance.now();

  console.log(
    "Answer is: " + ans + ` character is ${text[ans] ?? "can not found"}`
  );
  console.log(`Performance Time ${endTime - startTime} ms`);
}

export function firstUniqueChar() {
  console.log("-First unique char");
  const startTime = performance.now();
  const result = ans1("mehmet tan");
  const endTime = performance.now();
  console.log("Answer is: " + result);
  console.log(`Performance Time ${endTime - startTime} ms`);

  ans2("mehmet tan");
}
