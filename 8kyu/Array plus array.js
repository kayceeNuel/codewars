//P.R.E.P
// QUESTION:I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

//PPARAMETERS 
//parameter will return a number value.
//Get the sum of 2 arrays[1] + [2] of the input(s) arr1 and arr2

//RETURNS
//Add the 2 arrays and return a their sum.


//EXAMPLEs
//Soluion(`[1]+[2]` ---> [1,2,3,], [4,5,6])

//PSUEDO CODE
//declare a var that will access  the input(s) and return the var with an built array methods.


function arrayPlusArray(arr1, arr2) {
    let sum = arr1.concat(arr2).reduce (( join, reduce) => join + reduce)
    return sum;
  } 
  