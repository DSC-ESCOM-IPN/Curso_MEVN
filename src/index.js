'use strict'
// Import packages
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const chalk = require('chalk');
const { v4: uuidv4 } = require('uuid');

require('dotenv').config();

const app = express();

// Settings
app.set('port', 8080);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Public folder
app.use('/productImages', express.static(path.resolve(__dirname, 'public', 'productImages')));

// Multer to handle files
app.use(
	multer({
        fileFilter: function (req, file, cb) {
            const filesAllowed = ['jpg', 'png', 'jpeg'];
            const aux = file.mimetype.split('/');
            const fileExt = aux.pop();
            if (!filesAllowed.includes(fileExt))
                return cb(new Error('Only images are allowed'))
            cb(null, true)
        },
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, path.resolve(__dirname, 'public', 'productImages'))
            },
            filename: function (req, file, cb) {
                const aux = file.mimetype.split('/');
                const fileExt = aux.pop();
                const fileName = `${uuidv4()}.${fileExt}`;
                cb(null, fileName)
            },
        }),
		limits: { fileSize: 100 * 1024 * 1024 } // Max 10Mb
	}).single('image')
);

// Database connection
require('./utils/database.util');

// Routes
app.use(require('./routes/user.routes'));
app.use(require('./routes/product.routes'));
app.use(require('./routes/category.routes'));
app.use(require('./routes/order.routes'));

// Swagger conf
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'DSC ESCOM ExpressAPI',
            version: '0.1.0',
            description:
                'Esta API fue creada para el taller del DSC-ESCOM 2020-2',
            license: {
                name: 'MIT',
                url: 'https://spdx.org/licenses/MIT.html',
            },
            contact: {
                name: 'DSC-ESCOM',
                url: 'https://www.facebook.com/Developer-Student-Club-ESCOM-IPN-111708200650636',
            },
        },
        servers: [{
            url: 'http://localhost:8080/',
        }],
    },
    apis: ['./src/routes/*.js'],
};
const specs = swaggerJsdoc(options);
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
);

// Start the server
app.listen(app.get('port'), () => {
    console.log(
        chalk.blue.bold('Server on port: '),
        chalk.bold(app.get('port')),
    );
});