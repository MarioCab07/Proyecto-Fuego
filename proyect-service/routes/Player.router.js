const express = require('express');
const router = express.Router();
const {authentication}=require('../middleware/auth.middlewares');
const runValidation = require('../validators/index.middleware');
const PlayerController = require('../controllers/Player.controller');

router.post('/create',authentication,runValidation,PlayerController.create);

router.get('/findByTeam/:team',PlayerController.findByTeam);
router.get('/findByTeamPosition/:team/:position',PlayerController.findByTeamPosition);
router.get('/findByName/:name/:lastname/:team',PlayerController.findByName);

module.exports = router;