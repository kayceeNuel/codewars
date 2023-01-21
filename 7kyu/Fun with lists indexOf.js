// Implement the method indexOf (index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.

// For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf / index_of should return 2.

// The linked list is defined as follows:

// function Node(data, next = null) {
//   this.data = data;
//   this.next = next;
// }

function indexOf(head, value) {
    let current = head;
    let index = 0;
    while (current !== null) {
      if (current.data === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  
//    This function takes in the head of the linked list and the value to search for.
//     It initializes a variable current to the head of the list, and a variable index to 0. 
//     It uses a while loop to iterate through the linked list and check if the current node's data is equal to the value being searched for.
//      If it is, it returns the index. If the value is not found, the function returns -1.