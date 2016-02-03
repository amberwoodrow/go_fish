var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Game = new mongoose.Schema({
  tableName: String,
  deck: [],
  players: {
    p1: {
        id: Integer,
        name: String,
        hand: [],
        score: Integer
      },
    p2: {
        id: Integer,
        name: String,
        hand: [],
        score: Integer
      }
  }
});

module.exports = mongoose.model("Game", Game);

// MVP now, complexity later
// var Game = new mongoose.Schema({
//   tableName: String,
//   deck: [],
//   players: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Player'
//   },
// });
