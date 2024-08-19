const express = require('express');
const router = express.Router();

const MatchController = require('../controllers/Match.controller');

router.post('/create',MatchController.create);

router.get('/findAll',MatchController.findAll);

router.get('/findByPlayday/:playday',MatchController.findByPlayday);

router.get('/findByTeam/:team',MatchController.findByTeam);

module.exports = router;