require('dotenv').config();

const DB_USER = process.env.DB_USER || 'node-app';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'mydb';
const DB_PASS = process.env.DB_PASS || 'secret';
const CLIENT_ID_GOOGLE = process.env.CLIENT_ID_GOOGLE || '';
const CLIENT_SECRET_GOOGLE = process.env.CLIENT_SECRET_GOOGLE || '';

const configurations = {
  MONGODB_URI: `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?retryWrites=true&w=majority`,
  google: {
    // eslint-disable-next-line max-len
    clientID: CLIENT_ID_GOOGLE,
    clientSecret: CLIENT_SECRET_GOOGLE,
  },
};

module.exports = configurations;
