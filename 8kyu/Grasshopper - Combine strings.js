// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'

//SOLUTION
function combineNames (James,Stevens) {
    let firstName = James
    let secondName = Stevens
    return `${firstName} ${secondName}`
}

// other solution
const combineNames = function(firstName,secondName){
    return firstName+ ' ' +secondName
  }
  