/** Here is a classic, Pascal's triangle.

The pascal function should return a nested array, such as in the example below,

pascal(5) // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

However, when running the given code, the result is an empty array.

Your job? Fix it! */

//BUG 
function pascal(depth) {
    var results = [];
    var temp = [];
    for (var r=0; r < depth; r++) {
      for (var c=0; c < r; c++) {
        temp.push(calculate(c, r));
      }
      results.push(temp);
      temp = [];
    }
    return results;
  }
  
  function calculate(c, r) {
    if ( c == r || c == 1 )
      return 1;
    else
      return calculate(c-1, r-1) + calculate(c, r-1);
  }

  // SOLUTION
  function pascal(depth) {
    var results = [];
    for (var r=0; r < depth; r++) {
      var row = [];
      for (var c=0; c <= r; c++) {
        row.push(calculate(c, r));
      }
      results.push(row);
    }
    return results;
  }
  
  function calculate(c, r) {
    if ( c == 0 || c == r )
      return 1;
    else
      return calculate(c-1, r-1) + calculate(c, r-1);
  }