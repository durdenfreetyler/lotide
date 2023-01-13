function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅✅`);
  } else {
    console.log(`❌❌❌❌`);
  }
}
function eqArrays(arr1, arr2) {
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
}

// [1, 2, 5, 7, 2]

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function (array, callback) {
  const results = [];

  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }

  return results;
};

const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// const takeUntil = function (array, callback) {
//   const results = [];

//   for (const item of array) {
//     if (callback(item)) {
//       return results;
//     }

//     results.push(item);
//   }
//   return results;
// };

// const myCallback = (x) => {
//   return x > 3;
// };

// let result = takeUntil([1, 2, 3, 4, 5], myCallback);
// console.log(result);

// result = takeUntil([1, 2, 3, 4, 5], (x) => x > 3);
// console.log(result);
