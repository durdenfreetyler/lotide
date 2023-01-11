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
// if ('false')
//    if (false)

function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅✅`);
  } else {
    console.log(`❌❌❌❌`);
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual([1, 2, 1], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => fal
