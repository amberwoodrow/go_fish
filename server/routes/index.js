var express = require('express');
var router = express.Router();
var GameModel = require('../models/game.js');
var Game = require('../game.js');


// get all current games availible
router.get('/games', function(req, res) {
  res.send("get games");
});

// create game - send message, "waiting for opponent"
router.post('/game', function(req, res) {

  // var game = new Game();
  // game.turn();

  // console.log(game.deck.Deck.cards);

// if req.body.id
// else

if (req.body.gameID === "") {
  var newGame = new GameModel({
    tableName: req.body.tableName,
    players : {
      p1: {
        name: req.body.nickname
      }
    }
  });

  newGame.save(function(err, data){
    if(err){ res.json({'message':err}); }
    console.log(data._id);
    res.json({"Success": data});
  });
} else {
  res.json({"Error" : "Table exists already."});
}


});

// join game after nickname entry
// update nickname
// send back game - deal
// router.patch('/game/:id', function(req, res) {
//   res.send("patch games");
// });
// other post
// check for card
// if it exists update deck and hands - send message
// if it doesn't next turn - if less then 7 cards in hand - deal then send message

module.exports = router;
