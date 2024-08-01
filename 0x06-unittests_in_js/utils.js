const Utils = {
  calculateNumber(type, a, b) {
    if (arguments.length < 3) {
      throw new Error('Three arguments are required');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error("Second and third arguments must be numbers");
    }
    const aRound = Math.round(a);
    const bRound = Math.round(b);
    
    switch (type) {
      case 'SUM':
        return aRound + bRound;
      case 'SUBTRACT':
        return aRound - bRound;
      case 'DIVIDE':
        if (bRound === 0) return 'Error';
        return aRound / bRound;
      default:
        throw new Error("Invalid first argument type: type must be SUM, SUBTRACT or DIVIDE");
    }
  }
};

module.exports = Utils;
