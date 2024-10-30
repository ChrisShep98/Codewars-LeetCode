// Convert number to reversed array of digits
function digitize(n) {
    let newArr = Array.from(String(n), Number)
    let revN = newArr.reverse()
    return revN
  }