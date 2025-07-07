import { arrayTwoSum, validAnagram, validPalindrome } from "./array/index";
import { firstUniqueChar } from "./hash-map";
import { longestSubstringWithoutRepeatingCharacters } from "./sliding-window-two-pointers";
import { mergeInterval } from "./sorting-binary-search-greedy";
import { validParentheses } from "./stack-queue";

function main() {
  console.log("--- Now Start ---");

  arrayTwoSum();
  firstUniqueChar();
  validAnagram();
  validPalindrome();
  validParentheses();
  longestSubstringWithoutRepeatingCharacters();
  mergeInterval();

  console.log("--- The End ---");
}

main();
