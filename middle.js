

function middle(array) {
  // create variable to hold empty array
  let outcome = [];
  let outcomeFew = [];
  // for loop to cycle through the length of array
  // for (let i = 0; i < array.length; i++) {
  // if statement to see if over 2 elements in array
  if (array.length <= 2) {
    console.log("outcomeFew:", outcomeFew);
    return outcomeFew;
    // For arrays with odd number of elements, an array containing a single middle element should be returned.
  } else if (array.length % 2 === 0) {
    outcome.push(array[array.length / 2 - 1], array[array.length / 2]);
    console.log("outcomeEven:", outcome);
    return outcome;
  } else {
    outcome.push(array[Math.floor(array.length / 2)]);
    console.log("outcomeOdd:", outcome);
    return outcome;
    // [Math.floor(array.length / 2)]
  }
}

module.exports = middle








// let jones = [1];
// let bill = [3, 4];
// middle([2, 1]);
// middle([2, 1, 1]);

// middle([2, 1, 3, 4]);
// middle([2, 1, 3, 4, 4]);
// middle([2, 1, 3, 4, 4, 6]);
// assertArraysEqual(jones, [1]);
// assertArraysEqual(bill, [3, 4]);

// middle function should return an array
// create array []?
// For arrays with one or two elements, there is no middle. Return an empty array.
// For arrays with odd number of elements, an array containing a single middle element should be returned.
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// We can and should use the assertArraysEqual function for testing our new function. That's why we brought it in here to begin with.
// TEST/ASSERTION FUNCTIONS
// const eqArrays = function(...) {
//   //...
// }

// const assertArraysEqual = function(actual, expected) {
//   //...
// }

// // ACTUAL FUNCTION
// const middle = function(array) {
//   //...
// }

// // TEST CODE
// // ...
