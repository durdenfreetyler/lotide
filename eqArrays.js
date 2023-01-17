// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅✅ asseration passed ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌❌ asseration failed ${actual} !== ${expected}`);
//   }
// };
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const element1 = arr1[i];
    const element2 = arr2[i];

    if (element1 !== element2) {
      return false;
    }
    return true;
  }
};

module.exports = eqArrays;
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(eqArrays([1, 2, 1], [3, 2, 1])); // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => fal

// function eqArrays(array1, array2) {
//   // let arrayA = '';
//   // let arrayB = '';

//   // arrayA = array1.toString();
//   // arrayB = array2.toString();
//   // take variable answer and store the result of array1 === array2
//   // set answer to empty string
//   let answer = "True";
//   // loop through each index of the arrays
//   for (let i = 0; i < array1.length; i++) {
//     //    for each iteration of the loop, check if the item at the current index for each array match or don't match
//     // if the current items match will report true
//     // if the current items don't match will report false

//     if (array1[i] === array2[i]) {
//       //  answer = "True"
//     } else {
//       answer = "False";
//     }
//   }
//   console.log(answer);
//   // if (arrayA === arrayB) {

//   //   console.log("True")
//   //   return "True"

//   // } else {

//   //   console.log("False")
//   //   return "False"
//   // }
// }
