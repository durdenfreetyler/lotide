const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅`);
  } else {
    console.log(`❌❌❌❌`);
  }
};

function getKeyByValue(object, value) {
  const keys = Object.keys(object);
  // console.log("Object.keys(object):", keys);

  for (const key of keys) {
    let film = "";
    console.log("key of keys:", key);

    if (object[key] === value) {
      console.log(object[key] === value);
      return key;
    }
  }
}
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
// console.log(getKeyByValue(bestTVShowsByGenre, "The Expanse"));
getKeyByValue(bestTVShowsByGenre, "The Expanse");

assertEqual(getKeyByValue(bestTVShowsByGenre, "sci_fi"));

// console.log(Object.keys(bestTVShowsByGenre));
// Instruction
// Implement the function findKeyByValue which takes in an object and a value.
// It should scan the object and return the first key which contains the given value.
// If no key with that given value is found, then it should return undefined.

// Instruction
// Use assertEqual to write test cases for various scenarios.

// Consider using the Object.keys function to help you easily search through all the object keys.
// Consider using for...of to loop over the keys returned by Object.keys.

// Lodash has a function findKey and we're going to implement something similar but
// simpler.It will help us search for a key on an object where its value matches a given value.

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
