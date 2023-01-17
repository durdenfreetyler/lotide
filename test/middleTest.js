// const middle = require("../middle")
// const assertArraysEqual = require("../assertArraysEqual")



// assertArraysEqual(middle([2, 1, 3, 4, 4]), 3)
// assertArraysEqual(middle([2, 1, 3, 4, 4, 6]), [3, 4])

const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [3] for [2, 1, 3, 4, 4]", () => {
    assert.deepEqual(middle([2, 1, 3, 4, 4]), [3]);
  });
  it("returns [3, 4] for [2, 1, 3, 4, 4, 6]", () => {
    assert.deepEqual(middle([2, 1, 3, 4, 4, 6]), [3, 4]);
  });
});