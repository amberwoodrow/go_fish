// var game = require("./game");

function Deck() {
  this.cards = this.createDeck();
}
//
Deck.prototype.createDeck = function () {
  var deck = [];
  var suites = ["♠", "♥", "♦", "♣"];
  var faceVals = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  for (var i=0; i<suites.length; i++) {
    for (var j=0; j<faceVals.length; j++) {
      deck.push(faceVals[j]+suites[i]);
    }
  }
  return deck;
};

// Shuffle in place saves memory, instead of splicing from an old array and making a new one and having 2 arrays
Deck.prototype.shuffle = function() {
  var currentIndex = this.cards.length, temporaryValue, randomIndex; // Initialize variables

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // currentIndex starts at the end of the array and moves forward to the next index
    // And swap it with the current element.
    temporaryValue = this.cards[currentIndex]; // Stores var at current index to put at new random index
    this.cards[currentIndex] = this.cards[randomIndex]; // replaces value at currentIndex with value at randomIndex
    this.cards[randomIndex] = temporaryValue; // replaces value at randomIndex with the value at was at currentIndex
  }
  // return this.cards;
};

Deck.prototype.deal = function() {
  return this.cards.splice(0, 7);
};

Deck.prototype.draw = function() {
  return this.cards.splice(0, 1);
};

module.exports = Deck;
