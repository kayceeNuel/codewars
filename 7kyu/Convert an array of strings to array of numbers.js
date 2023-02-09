//QUESTION

// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.


//P.R.E.P
//P: Convert sequence of numbers of a string in an array to a number array.
//R: Return a number element in an array.
//E: [""]---> //[]
//P: use map method to convert every element in stringarray to a number. 
//  use the NUmber(element) method to convert each string to a number.
function toNumberArray(stringarray){
  return stringarray.map(element => Number(element))
}

// ANOTHER METHOD
const toNumberArray = stringarrays => stringarrays.map(element => Number(element))

