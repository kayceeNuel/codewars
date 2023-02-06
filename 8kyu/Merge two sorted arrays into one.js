// QUESTION
// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]



//P.R.E.P
//P: (INPUT): two arrays of arr1, arr2 (OUTPUT) merge arr1 and arr2
//R: Return two arrays merged together, sorted in ascending order.
//E: arrays.concat(arr1,arr2)
//P: I will be using the concat method of array to merge the elements in the two arrays to make it one.



function mergeArrays(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let uniqueArray = [...new Set(mergedArray)];
    return uniqueArray.sort((a, b) => a - b);
}
