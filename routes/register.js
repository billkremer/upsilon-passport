var router = require('express').Router();
var User = require('../models/user');

router.post('/', function (req, res) {
// add a new user

  User.findOne({username: req.body.username }, function (err, user) {
    if (err) {
      console.log('error checking for existing user.');
      res.sendStatus(500);
      return;
    };

    if (user) {
      console.log('username is taken');
      return res.status(400).send('Username already taken');
    }

    var user = new User({
      username: req.body.username,
      password: req.body.password
    });

    user.save(function (err) {
      if (err) {
        console.log('error saving new user', err);
        res.sendStatus(500);
      } else {
        console.log('created new user');

// TODO // also want to log person in if successful

        res.sendStatus(201);

      }



    })

  })






});










module.exports = router;
