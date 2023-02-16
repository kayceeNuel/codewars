//DESCRIPTION

// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

// Example:

// a=[1,2,0,3]
// a.length-1=3 
// a includes [0,3] ,hence the function should return true

//PSEUDOCODE

// function isAllPossibilities(x):
//   if x is an empty array:
//     return false
    
//   for each number i between 0 and x.length-1:
//     if i is not in x:
//       return false
      
//   return true

//SOLUTION

function isAllPossibilities(x){
    return x.length > 0 && x.every((a,i)=> x.includes(i))
  
  }
  