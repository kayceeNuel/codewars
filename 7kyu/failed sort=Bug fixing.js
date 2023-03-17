/** 
 * Failed Sort - Bug Fixing #4
Oh no, Timmy's Sort doesn't seem to be working? Your task is to fix the sortArray function to sort all numbers in ascending order
 * 
 */
// BUG
var sortArray = function(value) {
    return value.split('').sort((c, p) => c / p ).join('');
  }
  //solutio
  var sortArray = function(value) {
    return value.split('').sort((c, p) => c - p ).join('');
  }