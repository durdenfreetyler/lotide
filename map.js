const words = ["ground", "control", "to", "major", "tom"];

function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅✅`);
  } else {
    console.log(`❌❌❌❌`);
  }
}
function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
// const map = function () {
//   const results = [];
//   console.log(results)

//   return results;
// };

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(
  map(words, (word) => word[0]),
  ["g", "c", "t", "m", "t"]
);

// ( ['g', 'c', 't', 'm', 't']
