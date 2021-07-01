const chai = require('chai');
const { expect } = chai;

const { firstMove, secondMove, currentTurn, addBoard, gameCounter, winningMove, optimalMove, move, winningCombo, winner, optimalTictactoe } = require('../../../server/services/methods');


// first move test
describe('firstMove function test', () => {

    it("firstMove function exists", () => {
      expect(firstMove).to.not.be.undefined;
    });
    it('Returns corner position 0 when empty board is passed in', () => {
      expect(firstMove(['','','','','','','','',''])).to.equal(0);
    });
  
    it('Returns center position 4 when corner position 0 is passed in', () => {
      expect(firstMove(['X','','','','','','','',''])).to.equal(4);
    });
  
    it('Returns center position 4 when side position 1 is passed in', () => {
      expect(firstMove(['','X','','','','','','',''])).to.equal(4);
    });
  
    it('Returns center position 4 when corner position 2 is passed in', () => {
      expect(firstMove(['','','X','','','','','',''])).to.equal(4);
    });
  
    it('Returns center position 4 when side position 3 is passed in', () => {
      expect(firstMove(['','','','X','','','','',''])).to.equal(4);
    });
  
    it('Returns corner position 0 when center position 4 is passed in', () => {
      expect(firstMove(['','','','','X','','','',''])).to.equal(0);
    });
  
    it('Returns center position 4 when side position 5 is passed in', () => {
      expect(firstMove(['','','','','','X','','',''])).to.equal(4);
    });
  
    it('Returns center position 4 when corner position 6 is passed in', () => {
      expect(firstMove(['','','','','','','X','',''])).to.equal(4);
    });
  
    it('Returns center position 4 when side position 7 is passed in', () => {
      expect(firstMove(['','','','','','','','X',''])).to.equal(4);
    });
  
    it('Returns center position 4 when corner position 8 is passed in', () => {
      expect(firstMove(['','','','','','','','','X'])).to.equal(4);
    });
  
  });

// second move test

describe('secondMove function test', () => {

    it("secondMove function exists", () => {
      expect(secondMove).to.not.be.undefined;
    });
  
    it('Returns 3 when O player is in position 1', () => {
      expect(secondMove(['X','O','','','','','','',''])).to.equal(3);
    });
  
    it('Returns 3 when O player is in position 2', () => {
      expect(secondMove(['X','','O','','','','','',''])).to.equal(3);
    });
  
    it('Returns 1 when O player is in position 3', () => {
      expect(secondMove(['X','','','O','','','','',''])).to.equal(1);
    });
  
    it('Returns 1 when O player is in position 4', () => {
      expect(secondMove(['X','','','','O','','','',''])).to.equal(1);
    });
  
    it('Returns 4 when O player is in position 5', () => {
      expect(secondMove(['X','','','','','O','','',''])).to.equal(4);
    });
  
    it('Returns 1 when O player is in position 6', () => {
      expect(secondMove(['X','','','','','','O','',''])).to.equal(1);
    });
  
    it('Returns 2 when O player is in position 7', () => {
      expect(secondMove(['X','','','','','','','O',''])).to.equal(2);
    });
  
    it('Returns 2 when O player is in position 8', () => {
      expect(secondMove(['X','','','','','','','','O'])).to.equal(2);
    });
  
  });

//currentTurn test

describe('currentTurn function test', () => {

    it("currentTurn function exists", () => {
      expect(currentTurn).to.not.be.undefined;
    });
  
    it('Empty board returns X', () => {
      expect(currentTurn(['','','','','','','','',''])).to.equal('X');
    });
  
    it('Board returns X', () => {
      expect(currentTurn(['X','','','','O','','','',''])).to.equal('X');
    });
  
    it('Board returns O', () => {
      expect(currentTurn(['X','','','','','','','',''])).to.equal('O');
    });
  
    it('Last move on board returns X', () => {
      expect(currentTurn(['X','X','O','O','O','X','X','O',''])).to.equal('X');
    });  
  
  });

  describe('addBoard function test', () => {

    it("addBoard function exists", () => {
      expect(addBoard).to.not.be.undefined;
    });
  
    it('Adds X to empty board', () => {
      expect(addBoard(['','','','','','','','',''],0)).to.eql(['X','','','','','','','','']);
    });
  
    it('Adds O to board', () => {
      expect(addBoard(['X','','','','','','','',''],4)).to.eql(['X','','','','O','','','','']);
    });
  
    it('Adds X to board as last move', () => {
      expect(addBoard(['X','X','O','O','O','X','X','O',''],8)).to.eql(['X','X','O','O','O','X','X','O','X']);
    });  
  
  });

  //gameCounter test

  describe('gameCounter function test', () => {

    it("gameCounter function exists", () => {
      expect(gameCounter).to.not.be.undefined;
    });
  
    it('Empty board returns 0', () => {
      expect(gameCounter(['','','','','','','','',''])).to.equal(0);
    });
  
    it('Board with 2 moves returns 2', () => {
      expect(gameCounter(['X','','','','O','','','',''])).to.equal(2);
    });
  
    it('Board with 1 move returns 1', () => {
      expect(gameCounter(['X','','','','','','','',''])).to.equal(1);
    });
  
    it('Board with 8 moves returns', () => {
      expect(gameCounter(['X','X','O','O','O','X','X','O',''])).to.equal(8);
    });  
  
  });

//winning move test

describe('winningMove function test', () => {

    it("winningMove function exists", () => {
      expect(winningMove).to.not.be.undefined;
    });
  
    it('Returns false when the board is empty', () => {
      expect(winningMove(['','','','','','','','',''])).to.equal(false);
    });
  
    it('Returns false when no winning move is available', () => {
      expect(winningMove(['X','','','','O','','','',''])).to.equal(false);
    });
  
    it('Returns winning move when when available', () => {
      expect(winningMove(['X','O','','','X','','','',''])).to.eql(8);
    });
  
  });

//test of optimal move

describe('optimalMove function test', () => {

    it("optimalMove function exists", () => {
      expect(optimalMove).to.not.be.undefined;
    });
  
    it('Returns 2 to block winning move', () => {
      expect(optimalMove(['X','X','','','O','','','',''])).to.equal(2);
    });
  
    it('Returns 0 to block winning move', () => {
      expect(optimalMove(['','X','X','','O','','','',''])).to.equal(0);
    });
  
    it('Returns 3 to block winning move', () => {
      expect(optimalMove(['X','','','','O','','X','',''])).to.equal(3);
    });
  
    it('Returns 7 as optimal move', () => {
      expect(optimalMove(['X','','','','O','X','','',''])).to.equal(7);
    });
  
    it('Returns 5 as optimal move', () => {
      expect(optimalMove(['X','','','','O','','','X',''])).to.equal(5);
    });
  
    it('Returns 1 as optimal move', () => {
      expect(optimalMove(['X','','','','O','','','','X'])).to.equal(1);
    });
  
    it('Returns 2 as optimal move', () => {
      expect(optimalMove(['','X','','X','O','','','',''])).to.equal(2);
    });
  
    it('Returns 0 as optimal move', () => {
      expect(optimalMove(['','X','','','O','X','','',''])).to.equal(0);
    });
  
    it('Returns 5 as optimal move', () => {
      expect(optimalMove(['','X','','','O','','X','',''])).to.equal(5);
    });
  
    it('Returns 0 as optimal move', () => {
      expect(optimalMove(['','X','','','O','','','X',''])).to.equal(0);
    });
  
    it('Returns 3 as optimal move', () => {
      expect(optimalMove(['','X','','','O','','','','X'])).to.equal(3);
    });
  
    it('Returns 7 as optimal move', () => {
      expect(optimalMove(['','','X','X','O','','','',''])).to.equal(7);
    });
  
    it('Returns 1 as optimal move', () => {
      expect(optimalMove(['','','X','','O','','X','',''])).to.equal(1);
    });
  
    it('Returns 3 as optimal move', () => {
      expect(optimalMove(['','','X','','O','','','X',''])).to.equal(3);
    });
  
    it('Returns 0 as optimal move', () => {
      expect(optimalMove(['','','','X','O','X','','',''])).to.equal(0);
    });
  
    it('Returns 0 as optimal move', () => {
      expect(optimalMove(['','','','X','O','','','X',''])).to.equal(0);
    });
  
    it('Returns 1 as optimal move', () => {
      expect(optimalMove(['','','','X','O','','','','X'])).to.equal(1);
    });
  
    it('Returns 2 as optimal move', () => {
      expect(optimalMove(['O','','','','X','','','','X'])).to.equal(2);
    });
    
    it('Returns 1 as optimal move', () => {
      expect(optimalMove(['','','','','O','X','X','',''])).to.equal(1);
    });
  
    it('Returns 2 as optimal move', () => {
      expect(optimalMove(['','','','','O','X','','X',''])).to.equal(2);
    });
  
    //
    it('Returns 4 as optimal move', () => {
      expect(optimalMove(['X','O','','X','','','O','',''])).to.equal(4);
    });
  
    it('Returns 4 as optimal move', () => {
      expect(optimalMove(['X','X','O','O','','','','',''])).to.equal(4);
    });
  
    it('Returns 6 as optimal move', () => {
      expect(optimalMove(['X','O','X','','','','','','O'])).to.equal(6);
    });
  
    it('Returns 3 as last move', () => {
      expect(optimalMove(['X','O','X','','O','O','O','X','X'])).to.equal(3);
    });
  
  
  });

//move test

describe('move function test', () => {

    it("move function exists", () => {
      expect(move).to.not.be.undefined;
    });
  
    it('Returns corner position 0 when empty board is passed in', () => {
      expect(move(['','','','','','','','',''])).to.equal(0);
    });
  
    it('Returns center position 4 when corner position 0 is passed in', () => {
      expect(move(['X','','','','','','','',''])).to.equal(4);
    });
  
    it('Returns center position 4 when side position 1 is passed in', () => {
      expect(move(['','X','','','','','','',''])).to.equal(4);
    });
  
    it('Returns center position 4 when corner position 2 is passed in', () => {
      expect(move(['','','X','','','','','',''])).to.equal(4);
    });
  
    it('Returns center position 4 when side position 3 is passed in', () => {
      expect(move(['','','','X','','','','',''])).to.equal(4);
    });
  
    it('Returns corner position 0 when center position 4 is passed in', () => {
      expect(move(['','','','','X','','','',''])).to.equal(0);
    });
  
    it('Returns center position 4 when side position 5 is passed in', () => {
      expect(move(['','','','','','X','','',''])).to.equal(4);
    });
  
    it('Returns center position 4 when corner position 6 is passed in', () => {
      expect(move(['','','','','','','X','',''])).to.equal(4);
    });
  
    it('Returns center position 4 when side position 7 is passed in', () => {
      expect(move(['','','','','','','','X',''])).to.equal(4);
    });
  
    it('Returns center position 4 when corner position 8 is passed in', () => {
      expect(move(['','','','','','','','','X'])).to.equal(4);
    });
  
    it('Returns 3 when O player is in position 1', () => {
      expect(move(['X','O','','','','','','',''])).to.equal(3);
    });
  
    it('Returns 3 when O player is in position 2', () => {
      expect(move(['X','','O','','','','','',''])).to.equal(3);
    });
  
    it('Returns 1 when O player is in position 3', () => {
      expect(move(['X','','','O','','','','',''])).to.equal(1);
    });
  
    it('Returns 1 when O player is in position 4', () => {
      expect(move(['X','','','','O','','','',''])).to.equal(1);
    });
  
    it('Returns 4 when O player is in position 5', () => {
      expect(move(['X','','','','','O','','',''])).to.equal(4);
    });
  
    it('Returns 1 when O player is in position 6', () => {
      expect(move(['X','','','','','','O','',''])).to.equal(1);
    });
  
    it('Returns 2 when O player is in position 7', () => {
      expect(move(['X','','','','','','','O',''])).to.equal(2);
    });
  
    it('Returns 2 when O player is in position 8', () => {
      expect(move(['X','','','','','','','','O'])).to.equal(2);
    });
    //
    it('Returns 2 to block winning move', () => {
      expect(move(['X','X','','','O','','','',''])).to.equal(2);
    });
  
    it('Returns 0 to block winning move', () => {
      expect(move(['','X','X','','O','','','',''])).to.equal(0);
    });
  
    it('Returns 3 to block winning move', () => {
      expect(move(['X','','','','O','','X','',''])).to.equal(3);
    });
  
    it('Returns 7 as optimal move', () => {
      expect(move(['X','','','','O','X','','',''])).to.equal(7);
    });
  
    it('Returns 5 as optimal move', () => {
      expect(move(['X','','','','O','','','X',''])).to.equal(5);
    });
  
    it('Returns 1 as optimal move', () => {
      expect(move(['X','','','','O','','','','X'])).to.equal(1);
    });
  
    it('Returns 2 as optimal move', () => {
      expect(move(['','X','','X','O','','','',''])).to.equal(2);
    });
  
    it('Returns 0 as optimal move', () => {
      expect(move(['','X','','','O','X','','',''])).to.equal(0);
    });
  
    it('Returns 5 as optimal move', () => {
      expect(move(['','X','','','O','','X','',''])).to.equal(5);
    });
  
    it('Returns 0 as optimal move', () => {
      expect(move(['','X','','','O','','','X',''])).to.equal(0);
    });
  
    it('Returns 3 as optimal move', () => {
      expect(move(['','X','','','O','','','','X'])).to.equal(3);
    });
  
    it('Returns 7 as optimal move', () => {
      expect(move(['','','X','X','O','','','',''])).to.equal(7);
    });
  
    it('Returns 1 as optimal move', () => {
      expect(move(['','','X','','O','','X','',''])).to.equal(1);
    });
  
    it('Returns 3 as optimal move', () => {
      expect(move(['','','X','','O','','','X',''])).to.equal(3);
    });
  
    it('Returns 0 as optimal move', () => {
      expect(move(['','','','X','O','X','','',''])).to.equal(0);
    });
  
    it('Returns 0 as optimal move', () => {
      expect(move(['','','','X','O','','','X',''])).to.equal(0);
    });
  
    it('Returns 1 as optimal move', () => {
      expect(move(['','','','X','O','','','','X'])).to.equal(1);
    });
  
    it('Returns 2 as optimal move', () => {
      expect(move(['O','','','','X','','','','X'])).to.equal(2);
    });
    
    it('Returns 1 as optimal move', () => {
      expect(move(['','','','','O','X','X','',''])).to.equal(1);
    });
  
    it('Returns 2 as optimal move', () => {
      expect(move(['','','','','O','X','','X',''])).to.equal(2);
    });
  
    it('Returns 3 as last move', () => {
      expect(move(['X','O','X','','O','O','O','X','X'])).to.equal(3);
    });
  
  });

//winningcombo test

describe('winningCombo function test', () => {

    it("winningCombo function exists", () => {
      expect(winningCombo).to.not.be.undefined;
    });
  
    it('Returns undefined when no argument is passed in', () => {
      expect(winningCombo()).to.equal(undefined);
    });
  
    it('Returns undefined when the board is empty', () => {
      expect(winningCombo(['','','','','','','','',''])).to.equal(undefined);
    });
  
    it('Returns undefined when the board is tied', () => {
      expect(winningCombo(['X','O','X','X','O','O','O','X','X'])).to.equal(undefined);
    });
  
    it('Returns winning combo when a winning array is submitted', () => {
      expect(winningCombo(['X','O','X','O','O','X','','','X'])).to.eql([2,5,8]);
    });
  
  });

//winner test

describe('winner function test', function() {

    it("winner function exists", function() {
      expect(winner).to.not.be.undefined;
    });
  
    it('Returns Tie when a tied board is passed in', function() {
      expect(winner(['X','X','O','O','O','X','X','O','X'])).to.equal('Tie');
    });
  
    it('Returns X Wins when board with 3 Xs in a row is passed in', function() {
      expect(winner(['X','O','X','','O','X','O','','X'])).to.equal('X Wins');
    });
  
    it('Returns O Wins when board with 3 Os in a row is passed in', function() {
      expect(winner(['O','X','X','X','O','','','','O'])).to.equal('O Wins');
    });
  
    it('Returns In Progress when there is no winner but more squares available to continue playing', function() {
      expect(winner(['X','','','','O','','','','X'])).to.equal('In Progress');
    });
  
  });

  //optimal tictactoe test

  describe('optimalTictactoe function test', function() {

    it("optimalTictactoe function exists", function() {
      expect(optimalTictactoe).to.not.be.undefined;
    });
  
    it("optimalTictactoe In progress in a tie when the function plays itself", function() {
      var input = ['','','','','','','','',''];
      for(var i = 0; i < 9; i++) {
        input = optimalTictactoe(input);
      }
      var expected = 'In Progress'
      var actual = winner(input);
      expect(actual).to.equal(expected);
    });
  
  });



  
