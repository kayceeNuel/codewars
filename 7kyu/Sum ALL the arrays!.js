// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.

//SOLUTION
function arraySum(arr) {
    let sum = 0;  // initialize the sum to 0
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') { // check if the element is a number
        sum += arr[i]; // add the number to the sum
      } else if (Array.isArray(arr[i])) { // check if the element is an array
        sum += arraySum(arr[i]); // recursively call arraySum function to sum nested arrays
      }
    }
    return sum; // return the sum
  }