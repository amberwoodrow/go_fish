var deck = require("./deck.js");

function Player() {
  this.hand = [];
  this.score = 0;
}

Player.prototype.addToScore = function() {
  score++;
};

module.exports = Player;
