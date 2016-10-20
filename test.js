var request = require('supertest');
var app = require('./app');

describe('Request to root path', function() {
  it('Returns a status code of 200', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(error) {
        if (error) throw error;
        done();
      });
  });
});


describe('Liisting cities on /cities', function() {
  it('Returns 200 status code', function(done) {
    request(app)
      .get('/cities')
      .expect(200, done);
  });

  it('Returns JSON format', function(done) {
    request(app)
      .get('/cities')
      .expect('Content-type', /json/, done)
  });

});
