function ans1(texts: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const word of texts) {
    const key = word.split("").sort().join();

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key)!.push(word);
  }

  return Array.from(map.values());
}

export function groupAnagrams() {
  console.log("Answer: " + ans1(["eat", "tea", "tan", "ate", "nat", "bat"]));
}
