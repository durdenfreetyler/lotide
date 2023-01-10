// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅`);
  } else {
    console.log(`❌❌❌❌`);
  }
};
console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
assertEqual(1, 1);
