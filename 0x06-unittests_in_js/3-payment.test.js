// test for sendPaymentRequestToApi
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils')
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
  it('should use Utils calculateNumber with SUM, 100, and 20', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.returnValues[0]).to.equal(Utils.calculateNumber('SUM', 100, 20));

    calculateNumberSpy.restore();
  });
});
