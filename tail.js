const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅`);
  } else {
    console.log(`❌❌❌❌`);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];

function tail(words) {
  words.slice(1);
} // no need to capture the return value since we are not checking it

assertEqual(words.length, 3);
