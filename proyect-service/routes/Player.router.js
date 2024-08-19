const express = require('express');
const router = express.Router();

const PlayerController = require('../controllers/Player.controller');

router.post('/create',PlayerController.create);

router.get('/findByTeam/:team',PlayerController.findByTeam);
router.get('/findByTeamPosition/:team/:position',PlayerController.findByTeamPosition);
router.get('/findByName/:name/:lastname/:team',PlayerController.findByName);

module.exports = router;