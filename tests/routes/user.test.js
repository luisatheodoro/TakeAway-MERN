var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../../server');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
chai.use(chaiHttp);
const db = require('../../config/keys').mongoTestURI;

describe('Routes testing', function () {

  beforeEach(function (done) {
    mongoose.connect(db, function () {
      mongoose.connection.db.dropDatabase(function () {
        done();
      })
    })
  });

  it('should GET /users', function (done) {
    chai.request(server)
        .get('/api/users')
        .end(function (err, res) {
          res.should.have.status(200);
          done();
        });
  });

  it('should POST /users', function (done) {
    chai.request(server)
        .post('/api/users')
        .send({'name': 'Lan', 'email': 'hello@gmail.com', 'password': 'mybadpassword'})
        .end(function (err, res) {
          res.should.be.json;
          res.should.have.status(200);
          done();
        });
  });

  it('should add a SINGLE User on /users POST', function (done) {
    chai.request(server)
        .post('/api/users')
        .send({'name': 'Lana', 'email': 'hello@gmail.com', 'password': 'mybadpassword'})
        .end(function (err, res) {
          res.should.be.json;
          res.body.should.have.property('name');
          res.body.should.have.property('email');
          res.body.should.have.property('_id');
          res.body.should.have.property('password');
          res.body.name.should.equal('Lana');
          res.body.email.should.equal('hello@gmail.com');
          salt = bcrypt.genSaltSync(10);
          hash = bcrypt.hashSync(res.body.password, salt);
          bcrypt.compare(res.body.password, hash, function (err, res) {
            res.should.be.true;
            done();
          });
        });
  });
});
