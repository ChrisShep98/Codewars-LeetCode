// Duplicate Encoder
// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// Solution #1

function duplicateEncode(word){
    const sameCaseWord = word.toLowerCase();
    let result = '';
    for(let i = 0; i < word.length; i++){
        if(sameCaseWord.indexOf(sameCaseWord[i]) !== sameCaseWord.lastIndexOf(sameCaseWord[i])){
            result += ')';
        }else{
            result += '(';
        }
    }
    return result;
}

// Solution #2

function duplicateEncode(word) {
    let strArr = word.toLowerCase().split("");
    return strArr
      .map((letter) =>
        strArr.indexOf(letter) == strArr.lastIndexOf(letter) ? "(" : ")"
      )
      .join("");
  }