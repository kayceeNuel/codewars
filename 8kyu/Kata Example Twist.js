/** This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites 1,000 times. */

//SOLUTION
// add the value "codewars" to the websites array 1,000 times
var websites = [];
for(var i = o; i < 1000; i++){
    websites.push('codewars');
};

// Another way to solve this 
var websites = new Array(1000).fill("codewars")