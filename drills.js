/*
1.1 - O(1) - constant time. Since you are effectively asking everyone at once, your answer will always come back in the same amount of time
1.2 - O(n) - linear time. Since you are individually querying people, time will scale linearly with the number of the people present

2. - O(1) - constant time. We are running an operation on a single value then returning true or false. 
3. O(n^2) - polynomial time. We are running n operations on m values, therefore time complexity is n*m, otherwise known as n^2
4. O(n) - linear time. Time complexity scales lienarly with the size of the array. If the array is 5, 5 operations are run, 10, 10 operations are run, etc.
5. O(n) - linear time. Time complexity scales lienarly with the size of the array. If the array is 5, 5 operations are run, 10, 10 operations are run, etc.
6. O(n^2) - polynomial time. We are running j operations on i values, therefore time compexity is j*i, otherwise known as n^2
7.1 O(n) - calculates the fib sequence numbers up to the number that was input.
7.2 O(n) - linear time. Time complexity scales lienarly with the size of the array. If the array is 5, 5 operations are run, 10, 10 operations are run, etc.

*/

function efficientSearch(array, item) {  // Item is item that we are searching for, Array is where we are searching
  let minIndex = 0;  // start at 0 for our array
  let maxIndex = array.length - 1;  //  ending point for array
  let currentIndex;  // initializing current index to be used at a later time.
  let currentElement;  // inializaing current element to be used at a later time.

  while (minIndex <= maxIndex) { //
    currentIndex = Math.floor((minIndex + maxIndex) / 2);  //
    currentElement = array[currentIndex];  //

    if (currentElement < item) {  //
      minIndex = currentIndex + 1;  //
    } else if (currentElement > item) {  //
      maxIndex = currentIndex - 1; //
    } else {
      return currentIndex;  //
    }
  }
  return -1; //
}