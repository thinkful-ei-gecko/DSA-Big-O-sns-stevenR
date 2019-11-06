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
8. O(log(n)) - logarithmic time. Cutting data set size in half each time through the loop.

9. O(1) - constant time - we are returning a value from the array - no iteration/loops/what have you. 
10.1 The algorithm returns true if number is prime, false otherwise. 
10.2 O(n) - linear time - we look at and work with all values from 2 to the number input
*/

// returns false if num is less than 2 or if num is decimal
// returns false if num is divisible by i - any num divis by 2 is false
// return true if num is never divisible by i

let A = [5, 4, 3, 2, 1];
let B = [];
let C = [];

const tower = (numDiscs, start, goal, temp) => {
    if (numDiscs > 0) {
        tower(numDiscs - 1, start, temp, goal)
        goal.push(start.pop())
        console.log(`A: ${A}, B: ${B}, C: ${C}`)
        tower(numDiscs - 1, temp, goal, start)
    }

}

tower(5, A, C, B)
console.log(C)

/*

1. A: 5,4, B: , C: 3,2,1
2. 7, 15, 31 (moves can be calculated as n^2 - 1)
1. runtime is O(n^2)

function efficientSearch(array, item) {  // Item is item that we are searching for, Array is where we are searching
  let minIndex = 0;  // start at 0 for our array
  let maxIndex = array.length - 1;  //  ending point for array
  let currentIndex;  // initializing current index to be used at a later time.
  let currentElement;  // inializaing current element to be used at a later time.

  while (minIndex <= maxIndex) { // looping while minimum is less than max Index
    currentIndex = Math.floor((minIndex + maxIndex) / 2);  // sets current index to array midpoint
    currentElement = array[currentIndex];  // sets value for current element to midpoint item

    if (currentElement < item) {  // checking if midpoint is less than item
      minIndex = currentIndex + 1;  //
    } else if (currentElement > item) {  //
      maxIndex = currentIndex - 1; //
    } else {
      return currentIndex;  //
    }
  }
  return -1; //
}