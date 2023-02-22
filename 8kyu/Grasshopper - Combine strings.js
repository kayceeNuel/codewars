// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'



//P.E.R.P
//P:  combine two names and return them as a single string.
//E: Input: combineNames('Kaycee', 'Nuel')
//   Output: 'Kaycee Nuel'
//R: create two variables that takes the two argument then concatenate tthem using a template string.
//P: FUNCTION combineNames(James, Stevens)
//     SET firstName = James
//     SET secondName = Stevens
//     SET combinedName = firstName + ' ' + secondName
//     RETURN combinedName
// END FUNCTION


function combineNames (James,Stevens) {
    let firstName = James
    let secondName = Stevens
    return `${firstName} ${secondName}`
}

// other solution
const combineNames = function(firstName,secondName){
    return firstName+ ' ' +secondName
  }
  