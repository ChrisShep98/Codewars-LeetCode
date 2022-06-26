// Array plus array

function arrayPlusArray(arr1, arr2) {
    let sumArr1 = arr1.reduce((preV, curV) => preV + curV, 0)
    let sumArr2 = arr2.reduce((preV, curV) => preV + curV, 0) 
    return sumArr1 + sumArr2
  }