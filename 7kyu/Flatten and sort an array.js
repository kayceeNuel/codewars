// DESCRIPTION:
// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].


//SOLUTION
//P: flatten two dimensional array of integers and return  single-dimensional array sorted in ascending order
//E: .reduce() method to concatenate all the sub-arrays in arr into a single array.
//R: he output of this code is a single-dimensional array of integers, sorted in ascending order.
//P: function flattenAndSort(arr)
//   flatArr = empty array
//   for each subArray in arr
//     for each item in subArray
//       add item to flatArr
//   sort flatArr in ascending order
//   return flatArr

function flattenAndSort(array) {
    return array.reduce( (flat,next)=> flat.concat(next),[])
    .sort( (a,b) => a -b)
  }