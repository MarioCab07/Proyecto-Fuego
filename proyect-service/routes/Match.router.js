const express = require('express');
const router = express.Router();
const {authentication}=require('../middleware/auth.middlewares');
const runValidation = require('../validators/index.middleware');

const MatchController = require('../controllers/Match.controller');

router.post('/create',authentication,runValidation,MatchController.create);

router.get('/findAll',MatchController.findAll);

router.get('/findByPlayday/:playday',MatchController.findByPlayday);

router.get('/findByTeam/:team',MatchController.findByTeam);

module.exports = router;