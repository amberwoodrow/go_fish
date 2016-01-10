var Deck = require('./deck');
var Player = require('./player');

function Game () {
  this.players = [];
  this.players.push(new Player());
  this.players.push(new Player());

  this.deck = new Deck();
  this.deck.shuffle();
  // this.playerWinning = playerWinning;
}

Game.prototype.initialDeal = function() {
  for (var i=0; i<this.players.length; i++) {
    this.players[i].hand = this.deck.deal();
    console.log(this.players[i]);
  }
  console.log(this.deck);
};

Game.prototype.dealCards = function(player) {
  for (var i=0; i<player.hand.length-7; i++) {
    player.hand.push(this.deck.draw());
  }
};

Game.prototype.ask = function(opponent) {
  var playerAsk = promt("Ask opponent for a card.");

  if (opponent.hand.indexOf(playerAsk) !== -1) {
    opponent.hand.splice(opponent.hand.indexOf(playerAsk), 1);
    currentPlayer++;
    this.ask(opponent);
  }
  this.dealCards(opponent);
  this.dealCards(currentPlayer);
};

Game.prototype.turn = function() {
  console.log(this.deck.cards);
  this.initialDeal();
  var opponent = players[1];
  var currentPlayer = players[0];

  while (this.deck < 0) { // needs to watch players hand for game not deck
    if (opponent === players[1]) {
      opponent = players[0];
      currentPlayer = players[1];
    } else {
      opponent = players[1];
      currentPlayer = players[0];
    }
    this.ask(opponent, currentPlayer);
  }
};

var game = new Game();
game.turn();

module.exports = {};


//  get num players
//  deal 7 cards to player
