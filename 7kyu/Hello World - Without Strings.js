// Task
// You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

// You cannot use the following:

// "Hello, World!"
// 'Hello, World!'
// `Hello, World!`

//SOLUTION

const helloWorld = () => {
    let arr = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33];
    let str = String.fromCharCode(...arr);
    return str;
  };

//PESUDOCODE
// Here is a string challenge kata that will return the string 'Hello, World!' without actually using raw strings. For this kata, I created an array of numbers that contains ASCII codes. I then used the fromCharCode() function to convert the ASCII codes to their unique characters. Finally, I used the string object to concatenate the characters.