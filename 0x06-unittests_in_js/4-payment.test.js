// test for sendPaymentRequestToApi
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils')
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  it('should use Utils calculateNumber with SUM, 100, and 20', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(calculateNumberStub.returnValues[0]).to.equal(10);

    calculateNumberStub.restore();
  });
});
