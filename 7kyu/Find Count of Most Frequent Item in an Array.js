// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.



// redo this so many times 
function mostFrequentItemCount(collection) {
    if (collection.length === 0) {
      return 0;
    }
  
    let count = {};
    let maxCount = 1;
  
    for (let i = 0; i < collection.length; i++) {
      let element = collection[i];
  
      if (count[element] == null) {
        count[element] = 1;
      } else {
        count[element]++;
      }
  
      if (count[element] > maxCount) {
        maxCount = count[element];
      }
    }
  
    return maxCount;
  }
  
  let collection = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  console.log(mostFrequentItemCount(collection));
  

  