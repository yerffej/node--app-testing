const request = require('supertest');
const expect = require('expect');

const app = require('./server.js').app;


it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
          error: 'Page not found.'
      });
    })
    .end(done);
});


// Make a new test
// assert that status code is 200
// assert that you exist in the users array
it('should return list of users with Jeffrey among them', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({name:'Jeffrey',age:32});
    })
    .end(done);
});
