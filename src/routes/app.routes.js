const express = require('express');
const router = express.Router();

// const app = require('../controllers/app.controller');
const users = require('../controllers/user.controller');

router.get('/', users.getUsers);
router.get('/addStudent', users.getForm);

module.exports = router;
