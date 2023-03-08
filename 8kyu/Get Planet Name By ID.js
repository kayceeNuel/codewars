// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"

//SOLUITON
/*function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
      case 2:
        name = 'Venus'
      case 3:
        name = 'Earth'
      case 4:
        name = 'Mars'
      case 5:
        name = 'Jupiter'
      case 6:
        name = 'Saturn'
      case 7:
        name = 'Uranus'
      case 8:
        name = 'Neptune'
    }
    
    return name;
  }*/

  /*The issue with this code is that there are missing break statements after each case block. 
  Without the break statements, the switch statement will "fall through" to the next case and 
  execute its code as well, leading to unexpected behavior.*/

  function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury';
      break;
    case 2:
      name = 'Venus';
      break;
    case 3:
      name = 'Earth';
      break;
    case 4:
      name = 'Mars';
      break;
    case 5:
      name = 'Jupiter';
      break;
    case 6:
      name = 'Saturn';
      break;
    case 7:
      name = 'Uranus';
      break;
    case 8:
      name = 'Neptune';
      break;
    default:
      name = '';
      break;
  }
  
  return name;
}
