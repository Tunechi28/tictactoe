const express = require('express');
const router = express.Router();

const {tictactoe, gameWinner, nextMove} = require('../controllers/game')

router.post('/',
  tictactoe
);

router.post('/winner',
  gameWinner
);

router.post('/move',
  nextMove
);
