// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

//SOLUTION
//P.E.R.P
//P: solve this problem of string throwing in a lot of numbers at random places in the text.
//E: input: 'correct3 th4is errro5' // output:' correc this error'
//R: create a stirng method that will help stop throwing random numbers in a string 

//P: const str = "This looks5 grea8t!";
// const cleanedStr = removeDigits(str);
// console.log(cleanedStr); // "This looks great!"

function stringClean(s){
    return s.replace(/[0-9]/g, "")
   }