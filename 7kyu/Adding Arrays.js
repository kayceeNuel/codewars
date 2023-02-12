// TASK
// Create a function that takes an array of letters, and combines them into words in a sentence.

// The array will be formatted as so:

// [
//   ['J','L','L','M'],
//   ['u','i','i','a'],
//   ['s','v','f','n'],
//   ['t','e','e','']
// ]



//PESUDOCODE 
// FUNCTION arrAdder(arr)
//     SET sentence TO an empty string
//     FOR i = 0 to the length of the first sub-array in arr
//         FOR j = 0 to the length of arr
//             ADD the element at arr[j][i] to sentence
//         END FOR
//         ADD a space to the end of sentence
//     END FOR
//     TRIM sentence and return it
// END FUNCTION

// SOLTUION
function arrAdder(arr) {
    let sentence = ''
  for (let i = 0; i < arr[0].length; i++){
        for (let j = 0; j < arr.length; j++){
          sentence+=arr[j][i];
        }
      sentence+=" "
  } 
  return sentence.trim()
}  
