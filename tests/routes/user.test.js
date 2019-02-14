var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../../server');
var mongoose = require('mongoose');
chai.use(chaiHttp);
const db = require('../../config/keys').mongoTestURI;

describe('Routes testing', function() {

  beforeEach(function (done) {
    mongoose.connect(db, function(){
      mongoose.connection.db.dropDatabase(function(){
        done();
      })
    })
  });

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
        .send({'name': 'Lan', 'email': 'hello@gmail.com', 'password' : 'mybadpassword'})
        .end(function(err, res){
          res.should.be.json;
          res.should.have.status(200);
          done();
        });
  });

});