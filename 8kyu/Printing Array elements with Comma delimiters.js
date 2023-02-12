// DESCRIPTION

// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

//SOLUTION

function printArray(array){
    //use the join() method to join the elements.
    //use the comma as the seperator of elemetns in string.
    let OrderArray = array.join(',');
    // return the elements in the array.
    return OrderArray
  }