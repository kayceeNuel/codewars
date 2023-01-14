// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

//MY SOLUTION
function sumStr(a,b) {
   a = a ? parseInt(a): 0
   b = b ? parseInt(b) :0
  return (a + b).toString()
}

// This function takes two strings, a and b, as input. 
// It uses the ternary operator to check if either input is an empty string, and if so, assigns it a value of 0.
//  It then converts the non-empty strings to integers using the parseInt() function. 
//  Then, it adds these integers together and the result is converted back to a string using the toString() function and returned as the output.