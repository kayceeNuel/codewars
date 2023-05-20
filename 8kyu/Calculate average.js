/**Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

//SOLUTION
function findAverage(array) {
    if (array.length === 0) {
      return 0; // Return 0 for empty arrays
    }
  
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
  
    var average = sum / array.length;
    return average;
  }

  //ANOTHER MOTHED
  function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}