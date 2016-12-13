var board = [ [X, O, X],
              [O, X, O],
              [X, O, O] ];
var player1 = X;
var player2 = O;
var currentPlayer = true;
var maxTurns = 9;

function startGame(){
  // wait for player1 to make move
}
function addMove(){
  // player marks target space
  // adds player value to board
  // toggles turn to other player
}
function isWinner(player){
  // takes in player value X or O
  // if rows top, middle, bottom contain all X or O return true
  for(var i=0; i<board.length; i++){ // checks rows
    if(board[i][0]===player && board[i][1]===player && board[i][2]===player){
      return true;
    }
  }
  // else if columns 0, 1, 2 contain all X or O return true
  for(var j=0; j<board.length; j++){
    if(board[0][j]===player && board[1][j]===player && board[2][j]===player){
      return true;
    }
  }
  // else if backslash and forward slash contain all X or O return true
    if(board[0][1]===player && board[1][1]===player && board[2][2]=player){
      return true;
    } else if(board[0][k]===player && board[1][1]===player && board[2][2]=player)
  // else return false
  return false;
}
