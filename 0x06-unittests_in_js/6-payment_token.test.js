const chai = require('chai');
const expect = chai.expect;

const getPaymentTokenFromAPI = require('./6-payment_token');


describe('getPaymentTokenFromAPI', () => {
  it('should return " data object" if true is passed', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(result).to.deep.equal({data: "Successful response from the API" });
        done();
      }).catch(done);
  });
});
