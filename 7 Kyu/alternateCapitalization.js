// Alternate Capitalization
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.s
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.
// Good luck!

function capitalize(s){
    let arrIndexZero = '';
    let arrIndexOne = '';
    for(let i = 0; i < s.length; i++){
        if(i % 2 == 0){
            arrIndexZero += s[i].toUpperCase()
            arrIndexOne += s[i].toLowerCase()
        }else{
            arrIndexZero += s[i].toLowerCase()
            arrIndexOne += s[i].toUpperCase()
        }
    }
    return [arrIndexZero, arrIndexOne]

  };
  