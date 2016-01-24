var express = require('express');
var router = express.Router();

// get all current games availible
router.get('/games', function(req, res) {
  res.send("get games");
});

// create game - send message, "waiting for opponent"
router.post('/games', function(req, res) {
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
