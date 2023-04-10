/* Reducing Problems - Bug Fixing #8
Oh no! Timmy's reduce is causing problems, Timmy's goal is to calculate the two teams scores and return the winner but timmy has gotten confused and sometimes teams don't enter their scores, total the scores out of 3! Help timmy fix his program!

Return true if team 1 wins or false if team 2 wins! */

//BUG
function calculateTotal(team1, team2) {
    var t1s = team1.reduce((t, c) => t % c);
    var t2s = team2.reduce((t, c, i) => i / c);
    return t1s < t2s;
  }

  //SOLUTION
  function calculateTotal(team1, team2) {
    var t1s = team1.reduce((t, c) => t + c,0);
    var t2s = team2.reduce((t, c) => t + c,0);
    return t1s > t2s;
  }