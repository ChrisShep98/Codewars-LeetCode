// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const myStack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      myStack.push(")");
    } else if (s[i] == "[") {
      myStack.push("]");
    } else if (s[i] == "{") {
      myStack.push("}");
      // If a close bracket is found, check that it matches the last stored open bracket
    } else if (myStack.pop() !== s[i]) {
      return false;
    }
  }
  return !myStack.length;
};

console.log(isValid("()"), true);
console.log(isValid("()[]{}"), true);
console.log(isValid("(]"), false);
