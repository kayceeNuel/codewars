// Description:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// Examples
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

//SOLUTION

function remove(string) {
     // remove all exclamation marks except for the last one
  let result = string.replace(/!/g, '');
  // add an exclamation mark to the end of the string
  result += '!';
  return result;
  }
  