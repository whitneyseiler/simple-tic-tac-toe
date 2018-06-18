
var player1 = [];
player1.name = 'player1';
var player2 = [];
player2.name = 'player2';
var plays = 0;
var score = {player1: 0, player2: 0};

function renderScore(score) {
  var scoreBoard = document.getElementById('score');
  scoreBoard.innerHTML = "PLAYER 1 : " + score.player1 + "<br> PLAYER 2 : " + score.player2;
}

function onClick(id) {
  var square = document.getElementById(id);
  var turn = (plays % 2 === 0) ? 'X' : 'O';
  var player = (turn === 'X') ? player1 : player2;

  if (plays < 9) {
    if (square.className === 'open') {
      square.innerHTML = turn;
      square.className = turn;
      plays += 1;
      player.push(id);
    } else {
      alert('square already played!');
    }
  }
  calculateWinner(player);
}

function calculateWinner(player) {
  if (player.includes(1) && player.includes(4) && player.includes(7) ||
    (player.includes(2) && player.includes(5) && player.includes(8)) ||
    (player.includes(3) && player.includes(6) && player.includes(9)) ||
    (player.includes(2) && player.includes(5) && player.includes(8)) ||
    (player.includes(1) && player.includes(2) && player.includes(3)) ||
    (player.includes(4) && player.includes(5) && player.includes(6)) ||
    (player.includes(7) && player.includes(8) && player.includes(9)) ||
    (player.includes(1) && player.includes(5) && player.includes(9)) ||
    (player.includes(7) && player.includes(5) && player.includes(3))) {
    alert('**** CONGRATULATIONS, ' + player.name.toUpperCase() + '! ****\n\n***** YOU WIN! ******');
    score[player]++;
  } else if (plays === 0){
    alert('Dang! It\'s a draw!');
  }
}

function resetBoard() {
  debugger;

  var cells = document.getElementsByTagName("TD");
  for (var i = 0; i < cells.length; i++) {
    cells[i].className = 'open';
    cells[i].innerHTML = '';
  }
}
