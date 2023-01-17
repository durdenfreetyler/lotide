function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅✅`);
  } else {
    console.log(`❌❌❌❌`);
  }
}

function eqArrays(array1, array2) {
  let answer = true;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
    } else {
      answer = false;
    }
  }
  return answer;
}

const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    // console.log("---");
    // console.log("letter", letter);
    // console.log("i", i);
    // results.x = 5

    if (results[letter]) {
      results[letter].push(i);
      // console.log("results[letter].push(i)", results[letter].push(i));
    } else {
      results[letter] = [i];
      // console.log("results[letter] = [i]", (results[letter] = [i]));
    }
  }

  return results;
};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));

const result = letterPositions("hello");
assertArraysEqual(letterPositions("hello").e, [1]);

// Instruction
// Write a test with a small string (eg: "hello")
