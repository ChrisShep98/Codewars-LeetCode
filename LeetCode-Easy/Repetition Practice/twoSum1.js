// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Brute Force solution first

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(N^2)

// var twoSum = function (nums, target) {
//   for (i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };

// O(N)

// const twoSum = (nums, target) => {
//   const result = {};
//   for (i = 0; i < nums.length; i++) {
//     if (result[target - nums[i]] !== undefined) {
//       return [result[target - nums[i]], i];
//     }
//     result[nums[i]] = i;
//   }
// };

// O(N) (w/ Map object)

const twoSum = (nums, target) => {
  const storage = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (storage.has(nums[i])) {
      return [storage.get(nums[i]), i];
    }
    storage.set(target - nums[i], i);
  }
};
