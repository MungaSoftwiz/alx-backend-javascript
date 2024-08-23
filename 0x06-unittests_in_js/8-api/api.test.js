const assert = require('assert');
const request = require('request');

describe('testing our application', function () {
  describe('testing for existing routes', function () {
    it('request to default route should give a 200 status', function (done) {
      request('http://localhost:7865', function (err, resp, body) {
        if (err) { assert.equal(true, false); }
        assert.equal(resp.statusCode, 200);
        assert.equal(body, 'Welcome to the payment system');
        done();
      });
    });
    it('request to / should give a 200 status', function (done) {
      request('http://localhost:7865/', function (err, resp, body) {
        if (err) { assert.equal(true, false); }
        assert.equal(resp.statusCode, 200);
        assert.equal(body, 'Welcome to the payment system');
        done();
      });
    });
  });
  describe('testing for non-existing routes', function () {
    it('request to non existing route, should give 404 status', function (done) {
      request('http://localhost:7865/non-existing', function (err, resp, body) {
        if (err) { assert.equal(true, false); }
        assert.equal(resp.statusCode, 404);
        done();
      });
    });
  });
});
