// Import packages
const { Router } = require('express');

// Import controllers
const user = require('../controllers/user.controller');

// Import middlewares
const token = require('../utils/token.util');

// Create instance
const router = Router();

router.get('/', (req, res) => res.send('owo'));

/**
 * @swagger
 * tags:
 *  name: User
 *  description: API para interactuar con los usuarios
 */

/**
 * @swagger
 * paths:
 *  /user/profile:
 *   get:
 *      summary: Muestra los datos de un usuario que ha sido autenticado
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *      responses:
 *          200:
 *          description: Regresa el token en el header
 */
router.get('/user/profile', token.verify, user.profile);

/**
 * @swagger
 * paths:
 *      /user/signup:
 *          post:
 *              summary: Registra al usuario en la API
 *              tags: [User]
 *              operationID: signup
 *              requestBody:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/userSignIn'    
 *                  required: true
 *              responses:
 *                  200:
 *                      description: Usuario registrado exitosamente
 *                      content:
 *                          application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/serverResponse'
 */
router.post('/user/signup', user.signup);

/**
 * @swagger
 * paths:
 *      /user/login:
 *          post:
 *              summary: Autentica al usuario en la API
 *              tags: [User]
 *              operationID: login
 *              requestBody:
 *                  description: Para poder hacer uso de este endpoint debe existir un usuario previamente registrado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/userLogin'
 *                  required: true
 *              responses:
 *                  200:
 *                      description: El usuario ha sido autenticado
 *                      headers:
 *                          token:
 *                              description: El token sera utilizado para interactuar con endpoints protegidos
 *                              type: string
 *                      content:
 *                          application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/serverResponse'
 *                  404:
 *                      description: El email no esta registrado
 *                      content:
 *                          application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/serverResponse'
 *                  403:
 *                      description: La contraseña es incorrecta
 *                      content:
 *                          application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/serverResponse'
 * 
 */
router.post('/user/login', user.login);

/**
 * @swagger
 * paths:
 *  /user/logout:
 *   put:
 *      summary: Finaliza la sesion actual del usuario
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *      responses:
 *          200:
 *          description: Regresa el token en el header
 */
router.put('/user/logout', token.verify, user.logout);

/**
 * @swagger
 * components:
 *      schemas:
 *          serverResponse:
 *              type: object
 *              properties:
 *                  server:
 *                      type: string
 *                      description: Mensaje del servidor
 *          userLogin:
 *              type: object
 *              properties:
 *                  email:
 *                      type: string
 *                      format: email
 *                  password:
 *                      type: string
 *          userSignIn:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                  email:
 *                      type: string
 *                      format: email
 *                  password:
 *                      type: string
 *                  confirmPassword:
 *                      type: string
 *                      description: Debe ser igual a password
 */


module.exports = router;