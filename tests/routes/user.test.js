var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../../server');
chai.use(chaiHttp);

describe('Routes testing', function() {
  it('should list ALL users on /users GET', function(done) {
    chai.request(server)
        .get('/api/users')
        .end(function(err, res){
          res.should.have.status(200);
          done();
        });
  });

});