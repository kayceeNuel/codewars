// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

//P.E.R.P
//P:  two arguments: a "text" string and a "char" string  and returns a new string where the "char" string is repeated
    //  for as many times as the length of the "text" string.
    //E: Input :' char' == 'hello'
        // output: 'text' = x ===> xxxxx

//R:  "repeat" method of the "char" string to repeat it for as many times as the length of the "text" string. Then, the repeated "char" string is returned by the function.

//P: 1. Create a function called "contamination" that takes in two arguments: "text" and "char".
// 2. Call the "repeat" method on the "char" string with the argument of "text.length", which is the length of the "text" string.
// 3. Return the repeated "char" string.

function contamination(text, char){
    return char.repeat(text.length)
  }

  //using function expression 
  
  const contamination = function (text,char) {
    return char.repeat(text.length)
  }