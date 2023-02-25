// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.


//PESUDOCODE
// FUNCTION solve(s):
//   // Count uppercase letters
//   SET Up = length of (s with all non-uppercase letters replaced with "")
//   // Count lowercase letters
//   SET low = length of (s with all non-lowercase letters replaced with "")
//   // Count numbers
//   SET Num = length of (s with all non-digit characters replaced with "")
//   // Count other characters
//   SET other = length of s minus (Up plus low plus Num)
//   // Return counts as an array
//   RETURN [Up, low, Num, other]
// END FUNCTION



//SOLUTION
function solve(s){
let Up = (s.replace(/[^A-Z]/g, "").length);
let low = (s.replace(/[^a-z]/g, "").length);
let Num = (s.replace(/[^0-9]/g, "").length);
let other = (s.length - (Up+low+Num));
return [Up,low,Num,other];
}
