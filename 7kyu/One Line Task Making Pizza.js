/**
 * 
 * Task
Fix the code to pass all the tests. Unfortunately, you can only modify ONE line of code :(

Rules
Usually, the changes you make are limited to one line. Please don't complain that you can't write your own code, because this is a bugfix kata. Also, don't complain that the initial code is too messy. That's why you need to do the task ;-)

You can do the following operations:

1 - Replace the existing characters.
2 - Add the character at the end of the line.

 */
//bug 
function makePizza(pieces) { //Let's make n pieces of Pizza ;-)
    var result = "";
    while ( pieces-- ){
      var needSteps = 5;
      while ( needSteps-- ) result += make( needSteps );
    }
    return result;
  }
  function make(step){
    switch ( step ){
      case 5: return "P";
      case 4: return "i";
      case 3: 
      case 2: return "z";
      case 1: return "a";
    }
  }

  //solution
  function makePizza(pieces) { //Let's make n pieces of Pizza ;-)
    var result = "";
    while ( pieces-- ){
      var needSteps = 5;
      while ( needSteps-- ) result += make( needSteps );
    }
    return result;
  }
  function make(step){
    switch(++step ){
      case 5: return "P";
      case 4: return "i";
      case 3: 
      case 2: return "z";
      case 1: return "a";
    }
  }