const express = require('express');
const router = express.Router();


const ActionController = require('../controllers/Action.controller');

router.post('/create',ActionController.create);

router.get('/findByPlayer/:player',ActionController.findByPlayer)
router.get('/findByMatch/:match',ActionController.findByMatch)
router.get('/findByTeam/:team',ActionController.findByTeam)
router.get('/findByType/:type',ActionController.findByType)

module.exports = router;