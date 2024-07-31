// test case for 0-calcul
const assert = require('assert');
const calculateNumber = require('./0-calcul')


describe("calculateNumber function", function() {
  it("should return the sum of two numbers", function() {
    assert.strictEqual(calculateNumber(2, 3), 5);
  });

  it("should not return 5 given a string and a number", function() {
    assert.throws(() => calculateNumber("2", 3), Error);
  });

  it("should not return a number when given two strings", function() {
    assert.throws(() => calculateNumber("2", "a"), Error);
  });

  it("should throw an error when called without arguments", function(){
    assert.throws(() => calculateNumber(), Error);
  });
})
