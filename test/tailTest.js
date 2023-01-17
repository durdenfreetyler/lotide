const tail = require("../tail")
const assert = require("chai").assert;

// assertArraysEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
// assertArraysEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Labs"]);


describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse","Labs",]);
  });
  it(`returns ["Lighthouse", "Labs", "Bongos"] for ["Yo Yo", "Lighthouse", "Labs", "Bongos"]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs", "Bongos"]), ["Lighthouse", "Labs", "Bongos"]
    );
  });
});