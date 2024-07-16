var express = require('express');
var router = express.Router();

const {
  login,
  userProfile
} = require('../controllers/user.controller');

/* GET users listing. */
router.post('/login', login);
router.get('/user-profile', userProfile);

module.exports = router;
