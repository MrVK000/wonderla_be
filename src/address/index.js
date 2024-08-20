const express = require("express");
const router = express.Router();
const userController = require('./controller');

router.get('/get', userController.get);

module.exports = router;
