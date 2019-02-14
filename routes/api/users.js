const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");

//User Model

const User = require('../../models/User');

// @route GET api/users
// @desc GET all Users
// @access Private

router.get('/', (req, res) => {
  User.find()
      .then(users => res.json(users))
});

// @route POST api/users
// @desc Create A Post
// @access Private

router.post('/', (req, res) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save().then(user => res.json(user));
    });
  });

});

module.exports =  router;
