/**The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);
// returns 90; */

//solution

function chain(input, fs) {
    let result = input;
    for (let i = 0; i < fs.length; i++) {
      result = fs[i](result);
    }
    return result;
  }