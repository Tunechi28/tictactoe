const chai = require('chai')
const { expect } = chai;

const { tictactoe, gameWinner, nextMove } = require('../../../server/controllers/game')

describe('controller test', function() {

    var mockObject = {
        body: {
            board: '["X","X","O","O","O","X","X","O",""]'
        }
    }
  
    var resMockObject = {
        value: '',
        json: function(obj) {
            return resMockObject.value = obj;
        }
    }
  
    it("ticTacToe function exists", function() {
      expect(tictactoe).to.not.be.undefined;
    });
  
    it('ticTacToe function accepts request and returns completed board', function() {
      tictactoe(mockObject,resMockObject);
      expect(resMockObject.value).to.eql({board : ['X','X','O','O','O','X','X','O','X']});
    });
  
    var winnerObject = {
      body: {
        board: '["X","O","","X","X","X","O","","O"]'
      }
    }
  
    var resWinnerObject = {
      value: '',
      json: function(obj) {
        return resWinnerObject.value = obj;
      }
    }
  
    it("winner function exists", function() {
      expect(gameWinner).to.not.be.undefined;
    });
  
    it('winner function accepts request and returns winner', function() {
      gameWinner(winnerObject,resWinnerObject);
      expect(resWinnerObject.value).to.eql({winner : 'X Wins'});
    });
  
      var nextMoveObject = {
      body: {
        board: '["X","O","","X","X","","O","","O"]'
      }
    }
  
    var resNextMoveObject = {
      value: '',
      json: function(obj) {
        return resNextMoveObject.value = obj;
      }
    }
  
    it("nextMove function exists", function() {
      expect(nextMove).to.not.be.undefined;
    });
  
    it('nextMove function accepts request and returns index of next move', function() {
      nextMove(nextMoveObject,resNextMoveObject);
      expect(resNextMoveObject.value).to.eql({nextMove : 5});
    });
  
  });
