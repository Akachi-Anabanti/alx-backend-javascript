// A function that returns the some of two numbers


function calculateNumber(a, b) {
  if (arguments.length < 2) {
    throw new Error('Two arguments are required');
  }
  if (typeof a != 'number' || typeof b != 'number') {
    throw new Error("Two number arguments are expected");
  }
  return Math.round(Number(a)) + Math.round(Number(b));
}


module.exports = calculateNumber
