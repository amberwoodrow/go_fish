var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Game = new mongoose.Schema({
  tableName: String,
  deck: [],
  players: {
    p1: {
        id: Number,
        name: String,
        hand: [],
        score: Number
      },
    p2: {
        id: Number,
        name: String,
        hand: [],
        score: Number
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
