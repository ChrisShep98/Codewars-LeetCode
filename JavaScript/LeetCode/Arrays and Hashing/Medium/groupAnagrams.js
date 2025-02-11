// https://leetcode.com/problems/group-anagrams/description/

// 49. Group Anagrams

// Given an array of strings strs, group the
// anagrams
//  together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hashMap = new Map();
  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split("").sort().join(""); // all words of array sorted to find anagrams
    if (hashMap.has(sorted)) {
      hashMap.get(sorted).push(strs[i]);
    } else {
      hashMap.set(sorted, [strs[i]]);
    }
  }
  return Array.from(hashMap.values());
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
