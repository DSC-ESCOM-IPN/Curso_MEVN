'use stric'
// Import packages
const { Router } = require('express');

// import controllers
const order = require('../controllers/order.controller');

// Import middlewares
const token = require('../utils/token.util');

const router = Router();

router.post('/order', token.verify, order.post);

module.exports = router;