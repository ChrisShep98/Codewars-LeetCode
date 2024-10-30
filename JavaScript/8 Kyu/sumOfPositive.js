// Sum of positive
function positiveSum(arr) {
    return arr.filter( value => value >= 0).reduce((acc, c) => acc + c, 0)
  }
