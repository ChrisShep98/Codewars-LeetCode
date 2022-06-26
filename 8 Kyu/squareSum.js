// Square(n)Sum
function squareSum(numbers){
    let squareNums = numbers.map(x => x * x)
    let sumSquareNums = squareNums.reduce((acc, c) => acc + c, 0)  
    return sumSquareNums
  }
