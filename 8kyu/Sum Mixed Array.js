// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//MY SOLUTIONS
function sumMix(x){
  return Number(x.reduce((a,b)=>Number(a)+Number(b)))
}

function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}