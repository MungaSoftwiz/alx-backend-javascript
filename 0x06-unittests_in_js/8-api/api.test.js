const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index Page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return the correct status code and message', (done) => {
    request.get(baseUrl, (err, res, body) => {
      if (err) {
        done(err);
      } else {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      }
    });
  });
});

