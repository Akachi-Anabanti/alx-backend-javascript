// A function that returns the some of two numbers


function calculateNumber(a, b) {
  if (arguments.length < 2) {
    throw new Error('Two arguments are required');
  }
  if (typeof a != 'number' || typeof b != 'number') {
    throw new Error("Two number arguments are expected");
  }
  return Math.ceil(Number(a) + Number(b));
}


module.exports = calculateNumber
