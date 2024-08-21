const express = require('express');
const router = express.Router();
const {authentication}=require('../middleware/auth.middlewares');
const runValidation = require('../validators/index.middleware');
const TeamController = require('../controllers/Team.controller');

router.post('/create',authentication,runValidation,TeamController.create);
router.get('/findAll',TeamController.findAll);

module.exports = router;