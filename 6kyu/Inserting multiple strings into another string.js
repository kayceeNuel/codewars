/*Dear Coder,

We at [SomeLargeCompany] have decided to expand on the functionality of our online text editor.

We have written a new function that accepts a phrase, a word and an array of indexes. We want this function to return the phrase, with the word inserted at each of the indexes given by the array.

However, our current function only gets the first insertion right, but all of the following ones are out of place!

Please fix this for us, and you will be showered with money.

Yours Sincerely, [SomeLargeCompany]

Note :

the indicies are always in range and passed as a sorted array
note if the index array is empty, just return the initial phrase*/

//BUG 
function insertAtIndexes(phrase,word,indexes){
    for(var i=0;i>indexes.length;i++)
      let =phrase.slice(0,indexes[i]) + word + phrase.slice(indexes[i]);
    return phrase;
  }
  
  //SOLUTION 
  function insertAtIndexes(phrase, word, indexes) {
    let result = phrase;
    for (let i = indexes.length - 1; i >= 0; i--) {
      result = result.slice(0, indexes[i]) + word + result.slice(indexes[i]);
    }
    return result;
  }
  