const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  type: { type: String },
  setup: String,
  punchline: String,
  is_approved: {type: Boolean, default: false},
});

const Jokes = mongoose.model("Jokes", jokeSchema);

module.exports =  Jokes;
