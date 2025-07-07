import { performance } from "perf_hooks";

// BigO -> O(n)
function ans1(text: string): void {
  const startTime = performance.now();

  let ans: number = -1;
  const map = new Map<string, number>();

  for (let ch of text) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  for (let i = 0; i < text.length; i++) {
    if (map.get(text[i]) === 1) {
      ans = i;
      break;
    }
  }

  const endTime = performance.now();

  console.log(
    "Answer is: " + ans + ` character is ${text[ans] ?? "can not found"}`
  );
  console.log(`Performance Time ${endTime - startTime} ms`);
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
  ans1("mehmet tan");
  ans2("mehmet tan");
}
