function assertArraysEqual(actual, expected) {
  if (without(actual, expected)) {
    console.log(`✅✅✅✅`);
  } else {
    console.log(`❌❌❌❌`);
  }
}

const without = function (source, itemsToRemove) {
  let final = [];

  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) { 
      final.push(source[i]);
      console.log("final:", final);
    }
  }

  return final;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// function eqArrays(array1, array2) {
//   let answer = true;

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] === array2[i]) {
//     } else {
//       answer = false;
//     }
//   }
//   return answer;
// }
// Make sure the original array was not altered by the without function
// no need to capture return value for this test case
// or do I need to use return final?
// compare sourse array to itemsToRemove array // compare sourse array to itemsToRemove array
// for loop to compare the arrays
// set variable to an empty array
