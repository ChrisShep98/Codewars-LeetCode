// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
    } else {
      hashMap.set(nums[i], 1);
    }
  }

  const sortedArray = [...hashMap.entries()].sort((a, b) => b[1] - a[1]);
  const result = [];

  for (let i = 0; i < k; i++) {
    result.push(sortedArray[i][0]);
  }
  return result;
};
console.log(topKFrequent([30, 10, 10, 10, 20, 20], 2), [10, 20]);
console.log(topKFrequent([1], 1), [1]);
