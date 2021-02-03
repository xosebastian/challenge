var assert = require("chai").assert;
var challenge = require("../application/utils/findTwoBeers");

describe("Challenge tests using ASSERT interface from CHAI module: ", function () {
  describe("Check findTwoBeers Function: ", function () {
    it("Check the returned value using: assert.equal(value,'value'): ", function () {
      result = challenge.findTwoBeers([15, 20, 25, 39, 12, 18, 19, 21, 34], 35);
      assert.deepEqual(result, [[0, 1]]);
    });
    it("Check the returned value using: assert.typeOf(value,'value'): ", function () {
      result = challenge.findTwoBeers([]);
      assert.typeOf(result, "array");
    });

    it("Check the returned value using: assert.lengthOf(value,'value'): ", function () {
      result = challenge.findTwoBeers([]);
      assert.lengthOf(result, 0);
    });
  });
});
