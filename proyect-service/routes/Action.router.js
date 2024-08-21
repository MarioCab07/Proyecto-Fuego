const express = require('express');
const router = express.Router();
const {authentication}=require('../middleware/auth.middlewares');
const runValidation = require('../validators/index.middleware');

const ActionController = require('../controllers/Action.controller');

router.post('/create',authentication,runValidation,ActionController.create);

router.get('/findByPlayer/:player',ActionController.findByPlayer)
router.get('/findByMatch/:match',ActionController.findByMatch)
router.get('/findByTeam/:team',ActionController.findByTeam)
router.get('/findByType/:type',ActionController.findByType)

module.exports = router;