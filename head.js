const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅`);
  } else {
    console.log(`❌❌❌❌`);
  }
};

const head = function (input1) {
  return input1[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
