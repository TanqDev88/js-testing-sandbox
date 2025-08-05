const { assert } = require("chai");
const solution = require("../src/solution");

describe("basic tests", function(){
  it("should return 23 for input 10", function() {
    assert.strictEqual(solution(10), 23);
  });
});