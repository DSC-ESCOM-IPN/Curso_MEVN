'use strict';
// Import packages
const {Router} = require('express');

// import controllers
const category = require('../controllers/category.controller');

// Import middlewares
const token = require('../utils/token.util');

// Create instance
const router = Router();

/**
 * @swagger
 * tags:
 *  name: Category
 *  description: API para interactuar con las categorias
 */

/**
 * @swagger
 * paths:
 *  /category:
 *   get:
 *      summary: Muestra las categorias disponibles
 *      tags: [Category]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *      responses:
 *          200:
 *          description: Regresa el token en el header
 */
router.get('/category', token.verify, category.get);

/**
 * @swagger
 * paths:
 *  /category:
 *   post:
 *      summary: Crea una nueva categoria
 *      tags: [Category]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *      responses:
 *          200:
 *          description: Regresa el token en el header
 */
router.post('/category', token.verify, category.post);

/**
 * @swagger
 * paths:
 *  /category:
 *   delete:
 *      summary: Elimina una categoria
 *      tags: [Category]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *      responses:
 *          200:
 *          description: Regresa el token en el header
 */
router.delete('/category', token.verify, category.delete);

module.exports = router;
