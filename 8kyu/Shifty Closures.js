/**Functional closures can get overly attached. Set them straight!

Why doesn't greet_abe() actually greet Abe?*/ 

//BUG
var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
name = 'Ben';
var greet_ben = function() {
  return "Hello, " + name + '!';
};

//SOLUTION
var name = 'Abe';
var greet_abe = function(){
    return `Hello, ${name}!`;
}
var greet = 'Ben';
var greet_ben = function(){
    return `Hello, ${greet}!`;
}

