const express = require('express');
const router = express.Router();

const TeamController = require('../controllers/Team.controller');

router.post('/create',TeamController.create);
router.get('/findAll',TeamController.findAll);

module.exports = router;