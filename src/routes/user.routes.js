const express = require('express');
const router = express.Router();

const user = require('../controllers/user.controller');

router.get('/auth/google/redirect', user.redirectGoogle);
router.get('/user/logout', user.logout);
router.get('/auth/google', user.signinGoogle);

module.exports = router;
