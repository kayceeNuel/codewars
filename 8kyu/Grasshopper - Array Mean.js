// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4

//ANSWERS PROCESS
// In this example, the findAverage function takes an array of numbers as its argument.
//  A variable sum is initialized to keep track of the total sum of all the numbers in the array. 
//  The function then uses a for loop to iterate through each number in the array and add it to the sum. 
//  Finally, the function returns the result of dividing the sum by the length of the array, which is the average of the numbers in the array.

var findAverage = function (nums) {
    let sum = 0;
    for (const num of nums){
      sum += num
    } 
    return sum / nums.length
  }