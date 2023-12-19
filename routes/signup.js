const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.render('signup');
});

router.post('/', function(req, res) {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });

  newUser.save()
    .then(() => {
      res.render('login');
    })
    .catch((err) => {
      console.log(err);
      res.send('Error saving user to database.');
    });
});

module.exports = router;
