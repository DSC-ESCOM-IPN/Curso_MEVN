const express = require('express');
const router = express.Router();

// const app = require('../controllers/app.controller');
const posts = require('../controllers/student.controller');

router.get('/', posts.getPosts);

module.exports = router;
