var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../../server');
chai.use(chaiHttp);

describe('Routes testing', function() {
  it('should GET /users', function(done) {
    chai.request(server)
        .get('/api/users')
        .end(function(err, res){
          res.should.have.status(200);
          done();
        });
  });

  it('should POST /users', function(done) {
    chai.request(server)
        .post('/api/users')
        .send({'name': 'Lana', 'email': 'hello@gmail.com', 'password' : 'mybadpassword'})
        .end(function(err, res){
          res.should.be.json;
          res.should.have.status(200);
          done();
        });
  });

});