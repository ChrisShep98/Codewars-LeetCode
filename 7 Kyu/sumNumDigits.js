// Summing a number's digits
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// Solution #1

function sumDigits(number) {
  let sum = 0;
  const numToArray = Math.abs(number).toString().split("");
  for (let i = 0; i < numToArray.length; i++) {
    sum += Number(numToArray[i]);
  }
  return sum;
}

// Solution #2

function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((curr, prev) => curr+ + prev, 0);
  }