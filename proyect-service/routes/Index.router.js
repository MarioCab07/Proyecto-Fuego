const express = require('express');
const router = express.Router();

const ActionRouter = require('./Action.router');
const MatchRouter = require('./Match.router');
const PlayerRouter = require('./Player.router');
const TeamRouter = require('./Team.router');

router.use('/action',ActionRouter);
router.use('/match',MatchRouter);
router.use('/player',PlayerRouter);
router.use('/team',TeamRouter);

module.exports = router;