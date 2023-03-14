/*Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?*/

//FIX the BUG
function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': result = value.a + value.b;
      case'-': result = value.a - value.b;
      case'/': result = value.a / value.b;
      case'*': result = value.a * value.b;
      case'%': result = value.a % value.b;
      case'^': result = Math.pow(value.a, value.b);
    }
    return result;
  }

  //solutions
  function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': result = value.a + value.b;
        break
      case'-': result = value.a - value.b;
        break
      case'/': result = value.a / value.b;
        break
      case'*': result = value.a * value.b;
        break
      case'%': result = value.a % value.b;
        break
      case'^': result = Math.pow(value.a, value.b);
    }
    return result;
  }

  // SECOND METHOD
  function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': return value.a + value.b;
      case'-': return value.a - value.b;
      case'/': return value.a / value.b;
      case'*': return value.a * value.b;
      case'%': return value.a % value.b;
      case'^': return Math.pow(value.a, value.b);
    }
    return result;
  }