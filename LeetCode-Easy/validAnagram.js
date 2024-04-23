// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// // WORKING SOLUTION
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }
//   if (s.split("").sort().join() === t.split("").sort().join()) {
//     return true;
//   } else {
//     return false;
//   }
// };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const hashMap = new Map();

  if (s.length !== t.length) {
    return false;
  } else {
    for (let i = 0; i < s.length; i++) {
      if (hashMap.has(s[i])) {
        hashMap.set(s[i], hashMap.get(s[i]) + 1);
      } else {
        hashMap.set(s[i], 1);
      }
    }
  }

  // this second loop you are subtracting all the same key values one by one

  for (let i = 0; i < t.length; i++) {
    if (hashMap.has(t[i])) {
      hashMap.set(t[i], hashMap.get(t[i]) - 1);
      console.log(hashMap.get(t[i]));

      if (hashMap.get(t[i] > 0)) {
        return false;
      }
    }
  }
  return true;

  //   console.log(hashMap);
  //     return true;
  //   }
};
// console.log(isAnagram("anagram", "nagaram"), true);
// console.log(isAnagram("rat", "car"), false);
console.log(isAnagram("aacc", "ccac"), false);
