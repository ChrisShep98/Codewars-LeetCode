// Highest Rank Number in an Array

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  const counts = {};
  let compare = 0;
  let mostFrequent;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (counts[num] === undefined) {
      counts[num] = 1;
    } else {
      counts[num] = counts[num] + 1;
    }

    if (counts[num] > compare) {
      compare = counts[num];
      mostFrequent = num;
    }
  }
  return mostFrequent;
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12);
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12);
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3);
