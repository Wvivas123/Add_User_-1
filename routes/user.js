const express = require('express');
const User = require('../models/users');
const { model } = require('../models/users');
var path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + ' /../public/index.html'));
});

router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + ' /../public/register.html'));
});

router.post('/user', async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    secondName: req.body.secondName,
    email: req.body.email,
    username: req.body.userName,
  });
  try {
    await user.save();
    res.send('User Saved');
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
