const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JokeSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
