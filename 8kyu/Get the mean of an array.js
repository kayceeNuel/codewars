// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


//PSEUDOCODE 

// function getAverage(marks)
//     sum = sum of all elements in marks
//     average = sum divided by length of marks
//     roundedAverage = rounded down average to nearest integer
//     return roundedAverage


function getAverage(marks){
    return Math.floor( marks.reduce ( ( acc,curr) => acc + curr) / marks.length)
    
  }