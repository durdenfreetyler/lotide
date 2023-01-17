// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅ asseration passed ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌❌ asseration failed ${actual} !== ${expected}`);
  }
};
// console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));

// // TEST CODE
// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// assertEqual(1, 1);

module.exports = assertEqual;
