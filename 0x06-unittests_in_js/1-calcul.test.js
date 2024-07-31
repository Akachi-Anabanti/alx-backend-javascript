// test case for 1-calcul
const assert = require('assert');
const calculateNumber = require('./1-calcul')


describe("calculateNumber function", function() {
  it("should return the sum of two numbers", function() {
    assert.strictEqual(calculateNumber("SUM", 2, 3), 5);
  });

  it("should return the difference of two number", function() {
    assert.strictEqual(calculateNumber("SUBTRACT", 2, 3), -1);
  });

  it("should return the dividend of two numbers", function() {
    assert.equal(calculateNumber("DIVIDE", 5, 2), 2.5);
  });
})


describe("calculateNumber function Error test", function(){
  it("should not return 5 given a string and a number", function() {
    assert.throws(() => calculateNumber("SUM","2", 3), Error);
  });

  it("should not return a number when given two strings", function() {
    assert.throws(() => calculateNumber("SUB", "2", "a"), Error);
  });

  it("should throw an error when called without arguments", function(){
    assert.throws(() => calculateNumber(), Error);
  });
  it("should throw invalid type error", function(){
    assert.throws(() => calculateNumber("POW", 2, 3), Error);
  });

  it("should return 'Error' on zero devision", function() {
    assert.strictEqual(calculateNumber("DIVIDE", 5, 0.1), 'Error');
  });
})
