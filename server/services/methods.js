// the tictactoe board is labeled 0-8

/**
 * FirstMove returns the position a player makes for the first move, if an empty array is receeived the fumction asssumes it is making the first move
 * @param {Array} board an array of empty strings
 * @return {Number}  
 */
 
const firstMove = (board) => {
    return board.indexOf('X') === 4 || board.indexOf('X') ===  -1 ? 0 : 4
}

/**
 * SecondMove returns optimal move for X given O position
 * @param {Array} board an array of empty strings
 * @return {Number}
 */

const secondMove = (board) => {
    switch (board.indexOf('O')) {
		case 1:
		case 2:
			return 3;
			break;
		case 3:
		case 4:
		case 6:
			return 1;
			break;
		case 5:
			return 4;
			break;
		case 7:
		case 8:
			return 2;
			break;
	}

}

/**
 * determines if it is X or O turn given an array
 * @param {Array} board an array of empty strings
 * @returns {String} 
 */

const currentTurn = (board) => {
    let x = 0;
    let o = 0

    board.forEach((element) => {
        if(element === 'O') o++;
        if(element === 'X') x++
    })

    return x === o ? 'X' : 'O'
}

/**
 * takes the board(array) and position and returns the new array with the added element.
 * @param {Array} board an array of empty strings
 * @param {Number}  position an integer 
 * @return {Array} newBoard returns a new array
 */

const addBoard = (board, position) => {
    let move = currentTurn(board);
    let newBoard = []

    for(i=0; i< board.length; i++){
        if(i === position){
            newBoard.push(move);
        }else{
            newBoard.push(board[i]);
        }
    }
    return newBoard;
}

/**
 * gameCounter function counts the number of moves in a tic-tac-toe array by counting the number of empty array in the string
 * @param {Array} board an array of empty strings
 * @return {Number} counter
 */
const gameCounter = (board) => {
    let counter = 0;
    board.forEach((element) => {
        if(element !== '') counter++
    });

    return counter;
}

/**
 * winningMove function accepts an array as a parameter and returns 'false' 
 * if there is no winning spot on the board.if there is a winning tic-tac-toe position, the function will return the index position on the board.
 * @param {Array} board an array of strings
 */

const winningMove = (board) => {
    var winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	var winningIndex = false;

    winningCombinations.find(combo => {
        let xCount = 0;
        let yCount = 0;
        let emptyCount = 0;
        let emptyIndex;

        combo.reduce((n,val, index) => {
            if(board[val] === 'X') xCount++
            if(board[val] === 'Y') yCount++
            if(board[val] ===''){
                emptyCount++
                emptyIndex = val;
            }
        }, 0)
        if ((xCount || yCount) === 2 && emptyCount === 1) winningIndex = emptyIndex

		return (xCount || yCount) === 2 && emptyCount === 1;
    })

    return winningIndex;
}

/**
 * optimalMove function accepts an Array and given opponents position choice.
 * if there is no winning spot on the board.if there is a winning tic-tac-toe position, the function will return the index position on the board.
 * @param {Array} board an array of strings
 */

const optimalMove = (board) => {
    if(typeof winningMove(board) === 'number') return winningMove(board);

    switch(gameCounter(board)){
        case 3:
			if(board[0] === 'X' && board[5] === 'X') return 7;
			if(board[0] === 'X' && board[7] === 'X') return 5;
			if(board[0] === 'X' && board[8] === 'X') return 1;
			if(board[1] === 'X' && board[3] === 'X') return 2;
			if(board[1] === 'X' && board[5] === 'X') return 0;
			if(board[1] === 'X' && board[6] === 'X') return 5;
			if(board[1] === 'X' && board[7] === 'X') return 0;
			if(board[1] === 'X' && board[8] === 'X') return 3;
			if(board[2] === 'X' && board[3] === 'X') return 7;
			if(board[2] === 'X' && board[6] === 'X') return 1;
			if(board[2] === 'X' && board[7] === 'X') return 3;
			if(board[3] === 'X' && board[5] === 'X') return 0;
			if(board[3] === 'X' && board[7] === 'X') return 0;
			if(board[3] === 'X' && board[8] === 'X') return 1;
			if(board[4] === 'X' && board[8] === 'X') return 2;
			if(board[5] === 'X' && board[6] === 'X') return 1;
			if(board[5] === 'X' && board[7] === 'X') return 2;
			break;
		case 4:
			if(board[1] === 'O' && board[6] === 'O') return 4;
			if(board[2] === 'O' && board[3] === 'O') return 4;
			if(board[1] === 'O' && board[8] === 'O') return 6;
			break;
		default:
			return board.indexOf('');
    }
}

/**
 * move function accepts tic-tac-toe array as a parameter and returns index position for the next move.
 * @param {Array} board  An array of string
 * @returns {Number}
 */

const move = (board) => {
    switch (gameCounter(board)) {
		case 0:
		case 1:
			return firstMove(board);
			break;
		case 2:
			return secondMove(board);
			break;
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
			return optimalMove(board);
			break;
	}

}

/**
 * optimalTictactoe function receives an Array and returns an array with optimal position
 * @param {Array} board  An array of string
 * @returns {Array}
 */

const optimalTictactoe = (board) => {
    let position = move(board);
    return addBoard(board, position);
}

/**
 * winningCombo function accepts an array as a parameter and returns 'undefined' if there is no winning tic-tac-toe combination.
 * If there is a winning tic-tac-toe combination, the function will return an array containing the winning combination
 * @param {Array} board  An array of string
 */

function winningCombo(board){
	if (board === undefined) return undefined
	var winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	var winner = winningCombinations.find(combo =>
    board[combo[0]] !== '' &&
    board[combo[0]] === board[combo[1]] &&
    board[combo[1]] === board[combo[2]]
  );

  return winner

}

/**
 *winner function accepts tic-tac-toe board array as a paramenter and determines if the game has a winner.
 *Returns 'Tie', 'In Progress', 'X wins', 'O wins' 
 * @param {Array} board  An array of string
 */

 const winner = (board) => {

	if (!winningCombo(board) && board.indexOf('') > -1) return 'In Progress';
	if (!winningCombo(board) && board.indexOf('') === -1) return 'Tie';
	if (winningCombo(board)) return board[winningCombo(board)[0]] + ' Wins';

}

module.exports = {
    firstMove,
    secondMove,
    currentTurn,
    addBoard,
    gameCounter,
    winningMove,
    move,
    optimalMove,
    winningCombo,
    optimalTictactoe,
    winner
}