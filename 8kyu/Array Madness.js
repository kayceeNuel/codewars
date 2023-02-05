//QUESTION
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3




// FUNCTION arrayMadness(a, b)
//   DECLARE sumOfSqr = SUM OF (EACH NUMBER IN a RAISED TO THE POWER OF 2)
//   DECLARE sumOfCube = SUM OF (EACH NUMBER IN b RAISED TO THE POWER OF 3)
//   IF sumOfSqr IS GREATER THAN sumOfCube
//     RETURN true
//   ELSE
//     RETURN false
//   END IF
// END FUNCTION

function arrayMadness(a, b) {
    const sumOfSqr = a.reduce( (a,b) => a + b ** 2,0)
    const sumOfCube = b.reduce( (a,b) => a + b ** 3,0)
     if (sumOfSqr > sumOfCube){
       return true
     }else {
       return false
     }
  }

  //TWO DIFFERENT ANSEWERS

function arrayMadness(a, b) {
    let sumOfSqr = a.reduce( (a,b) => a + b ** 2,0)
    let sumOfCube = b.reduce( (a,b) => a + b ** 3,0)
    return sumOfSqr > sumOfCube
  }

