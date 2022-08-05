// Sentence Smash
function smash (words) {
    let dog = words.join(" ")
    return dog
 };

 // Sum Arrays
let sum = numbers => numbers.reduce((acc, c) => acc + c, 0)

// Abbreviate a Two Word Name
function abbrevName(name){
    let findFLetter = name.charAt(0).toUpperCase()
    let findLWord = name.substring(name.indexOf(" ") + 1)
    let findLLetter = findLWord.charAt(0).toUpperCase()
    return `${findFLetter}.${findLLetter}`
  }

// Remove String Spaces
function noSpace(x){
    let removeSpaces = x.replace(/\s/g, '');
    return removeSpaces
  }

// You Can't Code Under Pressure #1
function doubleInteger(i) {
    return i * 2;
  }

// Keep Hydrated
function litres(time) {
    let litresDrank = Math.floor(time * 0.5)
    return litresDrank
  }

// Return Negative
function makeNegative(num) {
    let newNum = -Math.abs(num)
    return newNum
  }

// Get the mean of an array
function getAverage(marks){
    let gradeMean = marks.reduce((acc, c) => acc + c, 0) / marks.length
    let downInt = Math.floor(gradeMean)
    return downInt
  }