const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const request = require('request');

const URL = "http://localhost:7865";

describe('Test suite for Index page', () => {
  it('should 200 status code', (done) => {
    request.get(`${URL}/cart/12`, (error, resp, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(resp.statusCode).to.equal(200);
      done();
    });
  });

  it("should check for the correct body response", (done) => {
    request.get(`${URL}/cart/12`, (error, resp, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should give 404 status code when a none number is given', (done) => {
    request.get(`${URL}/cart/hello`, (error, resp, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(resp.statusCode).to.equal(404);
      done();
    });
  });

  it('should 404 status code when infinity is given', (done) => {
    request.get(`${URL}/cart/Infinity`, (error, resp, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(resp.statusCode).to.equal(404);
      done();
    });
  });

  it('should 404 status code when a negative number is geven', (done) => {
    request.get(`${URL}/cart/-12`, (error, resp, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(resp.statusCode).to.equal(404);
      done();
    });
  });

  it('should 404 status code when a float is given', (done) => {
    request.get(`${URL}/cart/4.7`, (error, resp, body) => {
      if (error) {
        done(error);
        return;
      }
      expect(resp.statusCode).to.equal(404);
      done();
    });
  });
})
