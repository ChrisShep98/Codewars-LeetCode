// https://leetcode.com/problems/valid-palindrome/description/
// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */

// Reverse String solution (without regex)

// var isAlphanumeric = function (char) {
//   return (
//     (char >= "a" && char <= "z") ||
//     (char >= "A" && char <= "Z") ||
//     (char >= "0" && char <= "9")
//   );
// };

// var isPalindrome = function (s) {
//   let newString = "";
//   for (let c of s) {
//     if (isAlphanumeric(c)) {
//       newString += c.toLowerCase();
//     }
//   }
//   return newString == newString.split("").reverse().join("");
// };

// Two Pointer Solution

/**
 * @param {string} s
 * @return {boolean}
 */

const twoPointerCheck = (sentence) => {
  let l = 0;
  let r = sentence.length - 1;

  while (l <= r) {
    if (sentence[l] == sentence[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
};
var isPalindrome = function (s) {
  const cleanString = s.replace(/[^0-9a-z]/gi, "").toLowerCase();

  return twoPointerCheck(cleanString);
};
