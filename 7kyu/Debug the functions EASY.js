//DESCRIPTION
/** Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR */

// BUG
function multi(arr) {
    return arr * arr;
  }
  function add(arr) {
    return arr + arr;
  }
  function reverse(str) {
    return str.reverse();
  }

  //SOLUTION
  function multi(arr) {
    return arr.reduce( (a,c) => a * c)
  }
  function add(arr) {
    return arr.reduce((b,e) => b + e)
  }
  function reverse(str) {
    return str.split('').reverse().join('')
  }