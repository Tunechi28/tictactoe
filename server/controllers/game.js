const {winner, optimalTictactoe, move} = require('../services/methods');

const tictactoe = (req,res) => {
    let input = JSON.parse(req.body.board);
    let output = optimalTictactoe(input);

    res.json({
        board : output
    });
}

const gameWinner = (req,res) => {
    let input = JSON.parse(req.body.board);
    let output = winner(input);
    res.json({winner : output});
}

const nextMove = (req,res) => {
    let input = JSON.parse(req.body.board);
    let output = move(input);

    res.json({nextMove : output});
}

module.exports = {
    tictactoe,
    gameWinner,
    nextMove
}