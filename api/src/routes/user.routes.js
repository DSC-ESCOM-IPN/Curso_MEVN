// Import packages
const {Router} = require('express');

// Import controllers
const user = require('../controllers/user.controller');

// Import middlewares
const token = require('../utils/token.util');

// Create instance
const router = Router();

router.get('/', (req, res) => res.send('owo'));
router.get('/user/profile', token.verify, user.profile);
router.post('/user/signup', user.signup);
router.post('/user/login', user.login);
router.put('/user/logout', token.verify, user.logout);

module.exports = router;
