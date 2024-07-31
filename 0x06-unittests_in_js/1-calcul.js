// A function that returns the some of two numbers


function calculateNumber(type, a, b) {
  if (arguments.length < 3) {
    throw new Error('Two arguments are required');
  }
  if (typeof a != 'number' || typeof b != 'number') {
    throw new Error("Two number arguments are expected");
  }
  const aRound = Math.round((Number(a)));
  const bRound = Math.round(Number(b));

  switch (type) {
    case "SUM":
      return aRound + bRound;
    case "SUBTRACT":
      return aRound - bRound;
    case "DIVIDE":
      return bRound === 0 ? 'Error' : aRound / bRound;
    default:
      throw new Error("Invalid first argument type: type must be SUM, SUBTRACT or DIVIDE");
  }
}


module.exports = calculateNumber
