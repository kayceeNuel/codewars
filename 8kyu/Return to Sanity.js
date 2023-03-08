// This function should return an object, but it's not doing what's intended. What's wrong?

//SOLUTION
function mystery() {
    var results =
      {sanity: 'Hello'};
    return
      results;
  } 

  /* 
  The issue with this code is also related to automatic semicolon insertion (ASI). Specifically, JavaScript will insert a semicolon after the return statement, which will cause the function to return undefined instead of the intended object.

To fix this, the return statement should be on the same line as the object literal. Here's the corrected code:
  */

function mystery() {
    var results = {sanity: 'Hello'};
    return results;
  }
  