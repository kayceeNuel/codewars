// A new task for you!

// You have to create a method, that corrects a given time string.
// There was a problem in addition, so many of the time strings are broken.
// Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

//P.R.E.P
//P: find a string method that can correct a broken timestring
//R: 
//E: timestring("11:70:10")---> ("12:10:10")

//SOLUTION
function timeCorrect(timestring) {
    if (!timestring)
      return timestring
      
    if (!/^(\d\d:){2}\d\d$/.test(timestring))
      return null
      
    return (new Date(0,0,0,...timestring.split(':'))).toString().slice(16,24)
  }