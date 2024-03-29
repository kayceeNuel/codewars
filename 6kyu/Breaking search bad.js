/* DESCRIPTION:
The function must return the sequence of titles that match the string passed as an argument.

TITLES is a preloaded sequence of strings.

TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney']
search('ock') --> ['Rocky 1', 'Rocky 2']
But the function return some weird result and skip some of the matching results.

Does the function have special movie taste? */

// BUG 
// TITLES is a preloaded array of String to search throught

function search(searchTerm) {
    var search = new RegExp(searchTerm, 'gi');
    
    return TITLES.filter(function(title) {
      return search.test(title);
    });
  }

  //SOLUTION
  function search(searchTerm) {
    var search = new RegExp(searchTerm, 'i');
    
    return TITLES.filter(function(title) {
      return search.test(title);
    });
  }
  