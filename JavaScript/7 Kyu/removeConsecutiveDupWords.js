// Remove Consecutive Duplicate Words

// DESCRIPTION:
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeConsecutiveDuplicates(s) {
  const toArr = s.split(" ");
  return toArr.filter((el, index) => toArr[index - 1] !== el).join(" ");
}
