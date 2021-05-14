const express = require('express');
const router = express.Router();

const user = require('../controllers/user.controller');

router.get('/user/signup', user.renderSignUpForm);
router.post('/user/signup', user.singup);
router.get('/user/signin', user.renderSigninForm);
router.post('/user/signin', user.signin);
router.get('/user/logout', user.logout);

module.exports = router;
