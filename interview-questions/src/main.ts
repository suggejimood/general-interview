import { arrayTwoSum, validAnagram, validPalindrome } from "./array/index";
import { firstUniqueChar, groupAnagrams, kth, topK } from "./hash-map";
import { longestSubstringWithoutRepeatingCharacters } from "./sliding-window-two-pointers";
import {
  mergeInterval,
  searchInsertPosition,
} from "./sorting-binary-search-greedy";
import { validParentheses } from "./stack-queue";

function main() {
  console.log("--- Now Start ---\n");

  arrayTwoSum();
  firstUniqueChar();
  validAnagram();
  validPalindrome();
  validParentheses();
  longestSubstringWithoutRepeatingCharacters();
  mergeInterval();
  topK();
  kth();
  searchInsertPosition();
  groupAnagrams();

  console.log("\n--- The End ---");
}

main();
