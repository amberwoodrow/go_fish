var express = require('express');
var router = express.Router();
var game = require('../game.js');
// var deck = require('../game.js');
// var game = require('../game.js');


// get all current games availible
router.get('/games', function(req, res) {
  res.send("get games");
});

// create game - send message, "waiting for opponent"
router.post('/game', function(req, res) {
  console.log(req.body);
  var game = new Game();
  game.turn();
  res.send("post games");
});

// join game after nickname entry
// update nickname
// send back game - deal
router.patch('/game/:id', function(req, res) {
  res.send("patch games");
});
// other post
// check for card
// if it exists update deck and hands - send message
// if it doesn't next turn - if less then 7 cards in hand - deal then send message

module.exports = router;
