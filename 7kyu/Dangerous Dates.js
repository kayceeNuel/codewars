/**Fix this function so that it correctly outputs a list of the next five days (starting after the input date). Each date should be in the format M/D/YYYY. i.e. March 12th 2013 would be 3/12/2013.

Example output: "3/14/2013, 3/15/2013, 3/16/2013, 3/17/2013, 3/18/2013"

There's a hard way to do this and there's a right way. */

//BUG 
var nextFiveDays = function(date){
    var day = date.getDate(),
    month = date.getMonth(),
    dates = [];

    for (var i = 0; i <= 5; i++) {
      dates.push(month + '/' + (day + i));
    }
    
    return dates.join(', ');
}

// SOLUTION 
var nextFiveDays = function(date){
    return [1,2,3,4,5].map(function(){
      date.setDate(date.getDate() + 1);
      return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }).join(', ');
  }