const chalk = require("chalk");

const appController = {};

appController.getApp = (req, res) => {
    res.render('form');
};

module.exports = appController;