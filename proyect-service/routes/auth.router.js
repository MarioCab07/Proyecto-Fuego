const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth.controller');
const runValidation = require('../validators/index.middleware');

const { registerValidator } = require('../validators/auth.validator');

router.post("/register",
    registerValidator,
    runValidation,
    AuthController.register
);

router.post("/login", AuthController.login);


module.exports = router;