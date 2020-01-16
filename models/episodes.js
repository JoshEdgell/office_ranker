const mongoose      = require('mongoose');

const episodeSchema = mongoose.Schema({
  season: Number,
  episode: Number,
  title: String,
  synopsis: String,
  score: { type: Number, default: 1500 },
  matches: { type: Number, default: 0}
});

module.exports = mongoose.model('episodes', episodeSchema);
