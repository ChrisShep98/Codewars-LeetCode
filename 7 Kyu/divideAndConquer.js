// Divide and Conquer

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

// Solution #1

function divCon(x) {
  let numTotal = 0;
  let strTotal = 0;
  x.map((el) => (typeof el == "number" ? (numTotal += el) : (strTotal += +el)));
  return numTotal - strTotal;
}

// Solution #2

function divCon(x) {
  let numTotal = 0;
  let strTotal = 0;
  for (let i = 0; i < x.length; i++) {
    typeof x[i] == "string" ? (strTotal += Number(x[i])) : (numTotal += x[i]);
  }
  return numTotal - strTotal;
}
