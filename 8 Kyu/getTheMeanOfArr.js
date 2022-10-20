// Get the mean of an array

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// Solution #1

function getAverage(marks){
    let gradeMean = marks.reduce((acc, c) => acc + c, 0) / marks.length
    let downInt = Math.floor(gradeMean)
    return downInt
  }

// Solution #2

function getAverage(marks) {
  return Math.floor(marks.reduce((prev, curr) => prev + curr, 0) / marks.length);
}