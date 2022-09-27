// Vowel Count
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// Solution #1

function getCount(str) {
    let count = 0
    let arr = str.split('')
    arr.forEach(element => {
        if(element == 'a' ||
        element == 'e' ||
        element == 'i' ||
        element == 'o' ||
        element == 'u' ){
            count++
        }
    });
    return count
  }

// Solution #2

const getCount = str => str.split('').filter(el => 'aeiou'.includes(el)).length;