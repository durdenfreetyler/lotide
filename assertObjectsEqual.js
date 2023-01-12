const eqObjects = function (object1, object2) {
  // check to see if objects have same values
  // Object.key()
  // check length
  const first = Object.keys(object1);
  const second = Object.keys(object2);

  for (let key of first) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);

  if (actual === expected) {
    console.log(`✅✅✅✅`);
  } else {
    console.log(`❌❌❌❌`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};

assertObjectsEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
