// Divide and Conquer

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

function divCon(x) {
  let numTotal = 0;
  let strTotal = 0;
  x.map((el) => (typeof el == "number" ? (numTotal += el) : (strTotal += +el)));
  return numTotal - strTotal;
}
