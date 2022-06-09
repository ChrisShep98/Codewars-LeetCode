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

// Grasshopper - Personalized Message
let greet = (name, owner) => name == owner ? 'Hello boss' : 'Hello guest'

// Convert number to reversed array of digits
function digitize(n) {
    let newArr = Array.from(String(n), Number)
    let revN = newArr.reverse()
    return revN
  }

// Jenny's secret message
let jennyGreet = name => name === 'Johnny' ? "Hello, my love!" : "Hello, " + name + "!"

// Drink about
function peopleWithAgeDrink(age) {
    if(age < 14){
      return "drink toddy"
    }else if(age < 18){
      return "drink coke"
    }else if(age < 21){
      return "drink beer"
    }else{
      return "drink whisky"
    }
  };

// You only need one - Beginner
function check(a, x){
    let answer = a.includes(x) ? true : false
    return answer
  }

// Beginner Series #1 School Paperwork
function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0
  }

// Square(n)Sum
function squareSum(numbers){
    let squareNums = numbers.map(x => x * x)
    let sumSquareNums = squareNums.reduce((acc, c) => acc + c, 0)  
    return sumSquareNums
  }

// Convert boolean value to strings 'Yes' or 'No'.
function boolToWord( bool ){
    if(bool == true){
      return "Yes"
    }else if(bool == false){
      return "No"
    }
  }

// Beginner - Lost Without a Map
function maps(x){
    return x.map(x => x * 2);
  }

// Reversed Strings
function solution(str){
    return str.split("").reverse().join("");
  }

// Sum of positive
function positiveSum(arr) {
    return arr.filter( value => value >= 0).reduce((acc, c) => acc + c, 0)
  }

// Counting sheep...
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter((x) => x === true).length
  }

// Convert a Number to a String!
function numberToString(num) {
    return String(num)
  }




















