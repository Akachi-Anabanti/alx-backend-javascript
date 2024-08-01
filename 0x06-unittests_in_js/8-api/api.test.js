const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const request = require('request');

const URL = "http://localhost:7865";

describe('Test suite for Index page', () => {
  it('should 200 status code', (done) => {
    request.get(URL, (error, resp, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(resp.statusCode).to.equal(200);
      done();
    });
  });

  it("should check for the correct body response", (done) => {
    request.get(URL, (error, resp, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
})
