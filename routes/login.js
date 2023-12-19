const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    User.findOne({ username: username })
      .then((foundUser) => {
        if (foundUser) {
          if (foundUser.password === password) {
            res.render('index');
          } 
          else {
            res.render('login', { error: 'Incorrect password.' });
          }
        } 
        else {
          res.render('login', { error: 'User not found.' });
        }
      })
      .catch((err) => {
        console.log(err);
        res.render('login', { error: 'Error finding user in database.' });
      });
  });
  

module.exports = router;
