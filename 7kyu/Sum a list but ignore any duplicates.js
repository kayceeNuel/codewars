/**Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10. */

//SOLUTION
function sumNoDuplicates(numList) {
    let count = {};
    let sum = 0;
    for (let num of numList) {
      if (num in count) {
        count[num]++;
      } else {
        count[num] = 1;
      }
    }
    for (let num in count) {
      if (count[num] === 1) {
        sum += parseInt(num);
      }
    }
    return sum;
  }