// test case for 1-calcul
//

const assert = require('assert');
const calculateNumber = require('./1-calcul');

const chai = require('chai');
const expect = chai.expect;

describe("calculateNumber function", function() {
  it("should return the sum of two numbers", function() {
    expect(calculateNumber("SUM", 2, 3)).to.equal(5);
  });

  it("should return the difference of two number", function() {
    expect(calculateNumber("SUBTRACT", 2, 3)).to.equal(-1);
  });

  it("should return the dividend of two numbers", function() {
    expect(calculateNumber("DIVIDE", 5, 2)).to.equal(2.5);
  });
})


describe("calculateNumber function Error test", function(){
  it("should throw an error when given a string and a number", function() {
    expect(() => calculateNumber("SUM","2", 3)).to.throw();
  });

  it("should throw and error when given two strings", function() {
    expect(() => calculateNumber("SUB", "2", "a")).to.throw();
  });

  it("should throw an error when called without arguments", function(){
    expect(() => calculateNumber()).to.throw();
  });
  it("should throw invalid type error", function(){
    expect(() => calculateNumber("POW", 2, 3)).to.throw();
  });

  it("should return 'Error' on zero devision", function() {
    expect(calculateNumber("DIVIDE", 5, 0.1)).to.equal('Error');
  });
})
