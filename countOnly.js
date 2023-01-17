const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅`);
  } else {
    console.log(`❌❌❌❌`);
  }
};
// const result1 = countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true,
//   Agouhanna: false,
// });
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (let i = 0; i < allItems.length; i++) {
    const currentItem = allItems[i];

    console.log("currentItem = allItems[i]", currentItem);

    if (itemsToCount[currentItem] === true) {
      if (results[currentItem]) {
        results[currentItem] += 1;

        console.log("if (results[currentItem])", results);
      } else {
        results[currentItem] = 1;
      }
    }
  }
  console.log(results);
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// const allItems = ["one", "two", "three", "four", "five"]
// const itemsToCount = {}

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

// The function should report back how many instances of each string were found in the allItems array of strings.

// countOnly will be given an array and an object.It will return an object containing counts of everything that the input object listed.

// As shown in the example image above, only keys which have a truthy value should be counted in the resulting object. All other strings (either set to false or not included at all in the object) should not be counted. That said, if a particular string is meant to be counted but does not exist in the input array (like "f" in the example above), it also does not have to be included in the final count.


