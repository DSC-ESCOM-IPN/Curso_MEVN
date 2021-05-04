const MongoClient = require('mongodb').MongoClient;
const chalk = require("chalk");

const DB_USER = process.env.DB_USER || "node-app"
const DB_HOST = process.env.DB_HOST || "localhost"
const DB_PORT = process.env.DB_PORT || 27017
const DB_NAME = process.env.DB_NAME || "mydb"
const DB_PASS = process.env.DB_PASS || "secret"

var _db;

module.exports = {

    connectToServer: function (callback) {
        MongoClient.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/admin?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true}, function (err, client) {
            _db = client.db(DB_NAME);
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    }
};