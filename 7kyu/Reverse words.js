//DESCRIPTION 

/**Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"*/

//soluiton
function reverseWords(str) {
    // split the string into an array of words
    const words = str.split(" ");
    
    // reverse each word in the array
    const reversedWords = words.map(word => {
      // split each word into an array of characters
      const characters = word.split("");
      // reverse the order of the characters in the array
      const reversedCharacters = characters.reverse();
      // join the characters back into a string
      const reversedWord = reversedCharacters.join("");
      // return the reversed word
      return reversedWord;
    });
    
    // join the reversed words back into a string, with spaces between them
    const reversedStr = reversedWords.join(" ");
    
    return reversedStr;
  }