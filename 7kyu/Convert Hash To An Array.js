// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.

// SOLUTION
//P.R.E.P
//P: convert hash to arrays
//R: return a sorted arrays to reorder the content in arrays
//E: [convertHashToArray]----->  [1,2,3][1,3,2]
//P: Take an argument of 'hash' And convert it to an array. sort the key value pair in the array using the sort.(method)
// Use the Object.entries to convert hash to array of arrays.
function convertHashToArray(hash){
    return Object.entries(hash).sort()
  }

  
  //SECOND METHOD 
  const convertHashToArray = o => Object.entries(o).sort()