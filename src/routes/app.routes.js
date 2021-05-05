const express = require("express");
const router = express.Router();

const app = require("../controllers/app.controller");

router.get("/", app.getApp);

module.exports = router;
