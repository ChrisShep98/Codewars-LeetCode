// Sum Mixed Array
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

// Solution #1

function sumMix(x) {
  return x
    .map((element) => Number(element))
    .reduce((preV, currV) => preV + currV, 0);
}

// Solution #2

const sumMix = (x) => x.map((el) => +el).reduce((prev, curr) => prev + curr, 0);
