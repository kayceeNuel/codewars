// Task
// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr

//MY SOLUTION

function getLength(arr){
  //return length of arr
  //in a function, you can use the square bracket notation to access the element at index 0 of the array passed to the function.
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  //myArray[0] would give you the first element of the array myArray.
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  //n a function, you can use the square bracket notation to access the element at the last index of the array passed to the function.
  return arr[arr.length - 1]
}
function pushElement(arr){
  var el=1;
  //push el to arr
  // use the push() method to add an element el to an array arr in a function:
  arr.push(el)
  return arr
}
function popElement(arr) {
    //You could also use slice() method to remove an element from the end of an array
  return arr.slice(0,-1);
}
