// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     const element1 = arr1[i];
//     const element2 = arr2[i];

//     if (element1 !== element2) {
//       return false;
//     }
//     return true;
//   }
// };
// if ('false')
//    if (false)
const eqArrays = require("./eqArrays");

function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅✅ asseration passed ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌❌ asseration failed ${actual} !== ${expected}`);
  }
}

module.exports = assertArraysEqual;

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
// assertArraysEqual([1, 2, 1], [3, 2, 1]); // => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => fal
