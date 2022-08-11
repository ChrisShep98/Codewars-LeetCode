// Get the mean of an array
function getAverage(marks){
    let gradeMean = marks.reduce((acc, c) => acc + c, 0) / marks.length
    let downInt = Math.floor(gradeMean)
    return downInt
  }