// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// Solution #1

function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }

// Solution #2

function isIsogram(str){
  const strArr = str.toLowerCase().split('');
  const filterStr = strArr.filter((el, index) => strArr.indexOf(el) == index).join('');
  return filterStr.length == strArr.length ? true : false;
}

