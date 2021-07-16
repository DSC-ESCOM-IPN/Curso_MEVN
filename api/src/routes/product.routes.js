'use strict';
// import packages
const {Router} = require('express');

// Import controllers
const product = require('../controllers/product.controller');

// Import middlewares
const token = require('../utils/token.util');

// Create instance
const router = Router();

/**
 * @swagger
 * tags:
 *  name: Product
 *  description: API para interactuar con los productos
 */

/**
 * @swagger
 * paths:
 *  /product:
 *   get:
 *      summary: Muestra los productos disponibles
 *      tags: [Product]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *      responses:
 *          200:
 *          description: Regresa el token en el header
 */
router.get('/product', product.get);

/**
 * @swagger
 * paths:
 *  /product:
 *   post:
 *      summary: Registra un nuevo producto
 *      tags: [Product]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *      responses:
 *          200:
 *          description: Regresa el token en el header
 */
router.post('/product', token.verify, product.post);

/**
 * @swagger
 * paths:
 *  /product:
 *   delete:
 *      summary: Elimina un producto
 *      tags: [Product]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *      responses:
 *          200:
 *          description: Regresa el token en el header
 */
router.delete('/product', token.verify, product.delete);

module.exports = router;
