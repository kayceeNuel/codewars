/** DESCRIPTION:
You need to hire a catering company out of three for lunch in a birthday party. The first caterer offers only a basic buffet which costs $15 per person. The second one has an economy buffet at $20 per person and the third one has a premium buffet at $30 per person. The third one gives a 20% discount if the number of persons to be served is greater than 60. You want to spend the maximum that fits into the budget.

The function takes two arguments denoting the budget in $ and the number of people. Return 1, 2 or 3 for the three caterers as per the above criteria. Return -1 if there are no people or the budget is lower than the cost of buffets from the first caterer.

Number of orders is always equal to number of people.

For example,


budget, people => (200, 9) will return 2.

budget, people => (300, 9) will return 3 and so on. */

//SOLUTION
function findCaterer(budget, people){
    let basic = 15 * people
    let economy = 20 * people
    let premium = (people > 60 ? 24 : 30) * people
    
    if (people < 1 || budget < basic) {
      return -1
    } else {
      return premium > budget ? economy > budget ? 1 : 2 : 3
    }
  }

  //ANOTHER METHOD TO SOLVE THIS. 
  function findCaterer(budget, people){
    if (budget < 15 || people < 1) {
      return -1;
    }
    
    if (people * (people > 60 ? 24 : 30) <= budget ) {
      return 3
    }
    
    if (people * 20 <= budget ) {
      return 2
    }
    
    if (people * 15 <= budget ) {
      return 1
    }
    
    return -1;
  }