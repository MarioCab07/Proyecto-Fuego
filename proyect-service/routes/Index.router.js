const express = require('express');
const router = express.Router();

const ActionRouter = require('./Action.router');
const MatchRouter = require('./Match.router');
const PlayerRouter = require('./Player.router');
const TeamRouter = require('./Team.router');
const authRouter = require('./auth.router');

router.use('/action',ActionRouter);
router.use('/match',MatchRouter);
router.use('/player',PlayerRouter);
router.use('/team',TeamRouter);

router.use('/auth',authRouter);


module.exports = router;