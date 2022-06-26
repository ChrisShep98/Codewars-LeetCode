// Vowel Count
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