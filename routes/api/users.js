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

module.exports =  router;
