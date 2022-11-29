// String array duplicates

// DESCRIPTION:
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

function dup(s) {
    let joinArr = s.join(" ");
    let result = [];
    for (let i = 0; i < joinArr.length; i++) {
      if (joinArr[i + 1] !== joinArr[i]) {
        result.push(joinArr[i]);
      }
    }
    return result.join("").split(" ");
  }