// test case for 1-calcul

const assert = require('assert');
const calculateNumber = require('./1-calcul');
const chai = require('chai');
const expect = chai.expect;


describe("calculateNumber funtion", function() {
describe("type == SUM", function() {
  it("should return the sum of two numbers", function() {
    expect(calculateNumber("SUM", 2, 3)).to.equal(5);
  });

  it("should correctly round up and sum two numbers", function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it("should handle negative numbers", function() {
    expect(calculateNumber('SUM', -1.4, 4.5)).to.equal(4)
  });
  it('should handle Infinity', function() {
    expect(calculateNumber('SUM', Infinity, 5)).to.equal(Infinity);
  });
  it('should handle NaN inputs', function() {
    expect(isNaN(calculateNumber('SUM', NaN, 5))).to.be.true;
  });
  it("should throw an error to SUM a string and a number", function() {
    expect(() => calculateNumber("SUM","2", 3)).to.throw();
  });
});

describe('type == SUBTRACT', function() {
  it('should correctly subtract two whole numbers', function() {
    expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
  });

  it('should correctly round and subtract two numbers', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should handle negative numbers', function() {
    expect(calculateNumber('SUBTRACT', -1.4, 4.5)).to.equal(-6);
  });

  it('should return 0 when subtracting a number from itself', function() {
    expect(calculateNumber('SUBTRACT', 3.3, 3.3)).to.equal(0);
  });

  it('should handle subtraction resulting in negative number', function() {
    expect(calculateNumber('SUBTRACT', 2, 4)).to.equal(-2);
  });

  it('should round both numbers before subtraction', function() {
    expect(calculateNumber('SUBTRACT', 2.6, 1.4)).to.equal(2);
  });
});

describe('type == DIVIDE', function() {
  it('should correctly divide two whole numbers', function() {
    expect(calculateNumber('DIVIDE', 8, 2)).to.equal(4);
  });

  it('should correctly round and divide two numbers', function() {
    expect(calculateNumber('DIVIDE', 7.5, 2)).to.equal(4);
  });

  it('should handle division of negative numbers', function() {
    expect(calculateNumber('DIVIDE', -7, 2)).to.equal(-3.5);
  });

  it('should return 1 when dividing a number by itself', function() {
    expect(calculateNumber('DIVIDE', 3.3, 3.3)).to.equal(1);
  });

  it('should handle fractional results', function() {
    expect(calculateNumber('DIVIDE', 5, 2)).to.equal(2.5);
  });

  it('should round both numbers before division', function() {
    expect(calculateNumber('DIVIDE', 9.5, 4.5)).to.equal(2);
  });
});

describe('type == DIVIDE by zero', function() {
  it('should return "Error" when dividing by zero', function() {
    expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
  });

  it('should return "Error" when dividing by a number that rounds to zero', function() {
    expect(calculateNumber('DIVIDE', 5, 0.2)).to.equal('Error');
  });

  it('should handle zero divided by zero', function() {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
  });

  it('should return "Error" when dividing a negative number by zero', function() {
    expect(calculateNumber('DIVIDE', -5, 0)).to.equal('Error');
  });
});

describe("calculateNumber function Error test", function(){
  it("should throw an error when called without arguments", function(){
    expect(() => calculateNumber()).to.throw();
  });
  it("should throw invalid type error", function(){
    expect(() => calculateNumber("POW", 2, 3)).to.throw();
  });
});
})
